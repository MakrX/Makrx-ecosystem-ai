'use client';

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Star,
  Users,
  Zap,
  Shield,
  Globe,
  Heart,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-makrx-blue to-makrx-blue/80 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Welcome to the{" "}
              <span className="text-makrx-yellow">MakrX Ecosystem</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in-up animation-delay-200">
              India's leading digital manufacturing platform connecting creators,
              makerspaces, and service providers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Link
                href="/makerspaces"
                className="inline-flex items-center gap-2 px-8 py-4 bg-makrx-yellow text-makrx-blue rounded-lg font-semibold hover:bg-makrx-yellow/90 transition-all transform hover:scale-105 shadow-lg"
              >
                Explore Makerspaces
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/store"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-makrx-blue transition-all transform hover:scale-105"
              >
                <Play className="w-5 h-5" />
                Shop Tools & Components
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Your Complete Digital Manufacturing Platform
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Access makerspaces, buy tools and components, get custom fabrication,
              and connect with service providers - all in one ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* MakrCave */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-makrx-blue rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                MakrCave Makerspaces
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Access fully-equipped makerspaces with 3D printers, laser cutters,
                electronics labs, and more.
              </p>
              <Link
                href="/makerspaces"
                className="inline-flex items-center gap-2 text-makrx-blue font-semibold hover:text-makrx-blue/80 transition-colors"
              >
                Find Makerspaces
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* MakrX.Store */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-makrx-yellow rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-makrx-blue" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                MakrX.Store
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Shop for electronics, components, tools, and materials from
                trusted suppliers.
              </p>
              <Link
                href="/store"
                className="inline-flex items-center gap-2 text-makrx-blue font-semibold hover:text-makrx-blue/80 transition-colors"
              >
                Browse Store
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3D.MakrX.Store */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                3D.MakrX.Store
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get custom 3D printing, laser cutting, and fabrication services
                from professionals.
              </p>
              <Link
                href="/3d"
                className="inline-flex items-center gap-2 text-makrx-blue font-semibold hover:text-makrx-blue/80 transition-colors"
              >
                Get Custom Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-makrx-blue mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Makerspaces</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-makrx-blue mb-2">10k+</div>
              <div className="text-gray-600 dark:text-gray-300">Makers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-makrx-blue mb-2">1000+</div>
              <div className="text-gray-600 dark:text-gray-300">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-makrx-blue mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-makrx-blue to-makrx-blue/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Making?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of makers, entrepreneurs, and innovators who are
            building the future with MakrX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/makerspaces"
              className="inline-flex items-center gap-2 px-8 py-4 bg-makrx-yellow text-makrx-blue rounded-lg font-semibold hover:bg-makrx-yellow/90 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-makrx-blue transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
