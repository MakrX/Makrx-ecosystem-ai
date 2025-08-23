/**
 * @fileoverview MakrX Theme Management System
 *
 * This module provides a comprehensive theme management solution for the MakrX ecosystem.
 * It supports light/dark themes with automatic system theme detection and persistence.
 *
 * Features:
 * - Light, dark, and system theme modes
 * - Automatic system preference detection
 * - localStorage persistence across sessions
 * - Real-time theme switching
 * - SSR-compatible initialization
 * - CSS class and data-attribute support
 *
 * Storage: Theme preference is stored in localStorage as 'makrx-theme'
 * CSS Integration: Applies 'light'/'dark' classes to document root
 */

'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

/**
 * Available theme options
 */
export type Theme = 'light' | 'dark' | 'system';

/**
 * Theme context type definition
 */
interface ThemeContextType {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  systemTheme: 'light' | 'dark';
}

/**
 * Theme context instance
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Detects system theme preference
 */
function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Theme Provider Component
 * 
 * Wraps the application to provide theme management functionality
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system');
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage after mount
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('makrx-theme') as Theme;
    if (stored && ['light', 'dark', 'system'].includes(stored)) {
      setThemeState(stored);
    }
    setSystemTheme(getSystemTheme());
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setSystemTheme(getSystemTheme());
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Resolve theme (system -> light/dark)
  const resolvedTheme: 'light' | 'dark' = theme === 'system' ? systemTheme : theme;

  // Apply theme to document
  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark');
    
    // Add current theme class
    root.classList.add(resolvedTheme);
    
    // Set data attribute for CSS compatibility
    root.setAttribute('data-theme', resolvedTheme);
    
    // Set color-scheme for better browser integration
    root.style.colorScheme = resolvedTheme;
  }, [resolvedTheme, mounted]);

  // Theme setter with persistence
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    if (mounted) {
      localStorage.setItem('makrx-theme', newTheme);
    }
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        {children}
      </div>
    );
  }

  const value: ThemeContextType = {
    theme,
    resolvedTheme,
    setTheme,
    systemTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook to access theme context
 * 
 * @returns Theme context value
 * @throws Error if used outside ThemeProvider
 */
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

/**
 * Default export for convenience
 */
export default {
  ThemeProvider,
  useTheme,
};
