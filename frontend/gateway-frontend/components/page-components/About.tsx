'use client';

import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            About MakrX
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              MakrX is India's leading digital manufacturing ecosystem, connecting creators, 
              makerspaces, and service providers through innovative technology platforms.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              To democratize access to digital manufacturing tools and create a thriving 
              ecosystem where anyone can bring their ideas to life.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Platforms</h2>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li>
                <strong>MakrCave:</strong> Network of makerspaces providing access to 
                professional-grade manufacturing equipment
              </li>
              <li>
                <strong>MakrX.Store:</strong> Marketplace for tools, components, and materials
              </li>
              <li>
                <strong>3D.MakrX.Store:</strong> Custom fabrication and manufacturing services
              </li>
            </ul>

            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-makrx-blue text-white rounded-lg font-semibold hover:bg-makrx-blue/90 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
