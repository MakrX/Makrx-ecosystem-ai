'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, Phone, Mail, Globe, Twitter, Linkedin, Instagram, 
  Youtube, Github, ArrowRight, Heart
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Stay in the loop</h3>
              <p className="text-slate-300">
                Get the latest updates on makerspaces, tools, and community events
              </p>
            </div>
            <form 
              onSubmit={handleNewsletterSubmit}
              className="flex gap-2 w-full md:w-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-makrx-yellow focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-makrx-yellow text-makrx-blue rounded-lg font-medium hover:bg-makrx-yellow/90 transition-colors flex items-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-makrx-yellow rounded flex items-center justify-center">
                <span className="text-makrx-blue font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">MakrX</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              India's leading digital manufacturing ecosystem connecting creators, 
              makerspaces, and service providers.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-makrx-yellow flex-shrink-0" />
                <span className="text-sm">Bangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-makrx-yellow flex-shrink-0" />
                <span className="text-sm">+91 99999 99999</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-makrx-yellow flex-shrink-0" />
                <span className="text-sm">hello@makrx.org</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Globe className="w-4 h-4 text-makrx-yellow flex-shrink-0" />
                <span className="text-sm">makrx.org</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/makerspaces" 
                  className="text-slate-300 hover:text-makrx-yellow transition-colors"
                >
                  MakrCave Makerspaces
                </Link>
              </li>
              <li>
                <Link 
                  href="/store" 
                  className="text-slate-300 hover:text-makrx-yellow transition-colors"
                >
                  MakrX.Store
                </Link>
              </li>
              <li>
                <Link 
                  href="/3d" 
                  className="text-slate-300 hover:text-makrx-yellow transition-colors"
                >
                  3D.MakrX.Store
                </Link>
              </li>
              <li>
                <Link 
                  href="/service-providers" 
                  className="text-slate-300 hover:text-makrx-yellow transition-colors"
                >
                  Service Providers
                </Link>
              </li>
              <li>
                <Link 
                  href="/events" 
                  className="text-slate-300 hover:text-makrx-yellow transition-colors"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/docs" 
                  className="text-slate-300 hover:text-makrx-yellow transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-slate-300 hover:text-makrx-yellow transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/support" 
                  className="text-slate-300 hover:text-makrx-yellow transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link 
                  href="/status" 
                  className="text-slate-300 hover:text-makrx-yellow transition-colors"
                >
                  Status
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/makrx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-makrx-yellow transition-colors inline-flex items-center gap-1"
                >
                  GitHub
                  <Github className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/about" 
                  className="text-slate-300 hover:text-makrx-yellow transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/careers" 
                  className="text-slate-300 hover:text-makrx-yellow transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  href="/press" 
                  className="text-slate-300 hover:text-makrx-yellow transition-colors"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-slate-300 hover:text-makrx-yellow transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="/legal/privacy" 
                  className="text-slate-300 hover:text-makrx-yellow transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/legal/terms" 
                  className="text-slate-300 hover:text-makrx-yellow transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <span>© 2024 MakrX. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="inline-flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-red-500" /> in India
              </span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com/makrx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-makrx-yellow transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/makrx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-makrx-yellow transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/makrx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-makrx-yellow transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@makrx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-makrx-yellow transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/makrx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-makrx-yellow transition-colors"
                aria-label="View our GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
