'use client';

import React from "react";
import Link from "next/link";

interface PlaceholderPageProps {
  title: string;
  description: string;
  comingSoon?: boolean;
}

export default function PlaceholderPage({ title, description, comingSoon = true }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            {title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {description}
          </p>
          
          {comingSoon && (
            <div className="bg-makrx-yellow/10 border border-makrx-yellow/20 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-makrx-blue mb-2">Coming Soon</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We're working hard to bring you this feature. Stay tuned for updates!
              </p>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-makrx-blue text-white rounded-lg font-semibold hover:bg-makrx-blue/90 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-makrx-blue text-makrx-blue rounded-lg font-semibold hover:bg-makrx-blue hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Import comprehensive components
import About from './About';
import Contact from './Contact';
import Store from './Store';
import Makerspaces from './Makerspaces';
import Ecosystem from './Ecosystem';
import HomePage from './HomePage';

// Export the comprehensive components
export { About, Contact, Store, Makerspaces, Ecosystem, HomePage };

// Specific page components - keeping placeholders for components not yet implemented
export function Blog() {
  return (
    <PlaceholderPage
      title="MakrX Blog"
      description="Discover the latest insights, tutorials, and stories from the maker community."
    />
  );
}

export function Careers() {
  return (
    <PlaceholderPage
      title="Careers at MakrX"
      description="Join our team and help shape the future of digital manufacturing in India."
    />
  );
}

export function Docs() {
  return (
    <PlaceholderPage
      title="Documentation"
      description="Comprehensive guides and API documentation for all MakrX platforms."
    />
  );
}


export function Events() {
  return (
    <PlaceholderPage
      title="Events & Workshops"
      description="Join maker meetups, workshops, and community events happening across India."
    />
  );
}

export function Press() {
  return (
    <PlaceholderPage
      title="Press & Media"
      description="Latest news, press releases, and media coverage about MakrX."
    />
  );
}

export function ServiceProviders() {
  return (
    <PlaceholderPage
      title="Service Providers"
      description="Connect with professional manufacturers and service providers for your projects."
    />
  );
}

export function Status() {
  return (
    <PlaceholderPage
      title="System Status"
      description="Real-time status and uptime information for all MakrX services."
      comingSoon={false}
    />
  );
}

export function Support() {
  return (
    <PlaceholderPage
      title="Support Center"
      description="Get help with your MakrX account, services, and technical questions."
    />
  );
}

export function ThreeDStore() {
  return (
    <PlaceholderPage
      title="3D.MakrX.Store"
      description="Custom 3D printing, laser cutting, and fabrication services from professionals."
    />
  );
}

export function ThemeDemo() {
  return (
    <PlaceholderPage
      title="Theme Demo"
      description="Preview and test the MakrX theme system and design components."
      comingSoon={false}
    />
  );
}

export function PrivacyPolicy() {
  return (
    <PlaceholderPage
      title="Privacy Policy"
      description="How we collect, use, and protect your personal information."
      comingSoon={false}
    />
  );
}

export function TermsOfService() {
  return (
    <PlaceholderPage
      title="Terms of Service"
      description="Terms and conditions for using MakrX platforms and services."
      comingSoon={false}
    />
  );
}

export function NotFound() {
  return (
    <PlaceholderPage
      title="Page Not Found"
      description="The page you're looking for doesn't exist or has been moved."
      comingSoon={false}
    />
  );
}
