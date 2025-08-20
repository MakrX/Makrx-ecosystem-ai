'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, Building2, Package, Calendar, BarChart3, Users, MapPin, Wrench, ArrowRight } from 'lucide-react';

export default function Makerspaces() {
  const features = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "50+ Locations",
      description: "Makerspaces across major Indian cities with consistent quality and equipment standards"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Advanced Equipment",
      description: "3D printers, laser cutters, CNC machines, electronics labs, and woodworking tools"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Easy Booking",
      description: "Book equipment by the hour or day through our simple online platform"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Project Management",
      description: "Track inventory, manage projects, and collaborate with team members"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description: "Connect with fellow makers, share knowledge, and get expert guidance"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Training & Workshops",
      description: "Regular workshops and training sessions on equipment usage and safety"
    }
  ];

  const cities = [
    "Bangalore", "Mumbai", "Delhi", "Pune", "Chennai", "Hyderabad", 
    "Kolkata", "Ahmedabad", "Kochi", "Gurgaon", "Noida", "Jaipur"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-makrx-blue via-makrx-blue/90 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-makrx-yellow/20 text-makrx-yellow text-sm font-medium mb-6">
              <Building2 className="w-4 h-4 mr-2" />
              Access Premium Spaces
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            MakrCave
            <span className="block bg-gradient-to-r from-makrx-yellow to-yellow-300 bg-clip-text text-transparent">
              Makerspaces
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Access premium makerspaces with cutting-edge equipment, inventory management, 
            and project collaboration tools. Join a community of creators and innovators.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://makrcave.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-makrx-yellow text-makrx-blue rounded-xl font-bold text-lg hover:bg-makrx-yellow/90 transition-all transform hover:scale-105 shadow-lg"
            >
              Explore MakrCave
              <ExternalLink className="w-5 h-5" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all"
            >
              Partner with Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Everything You Need to Create
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professional-grade equipment, expert support, and a vibrant community of makers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                <div className="w-16 h-16 bg-makrx-blue/10 dark:bg-makrx-yellow/10 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-makrx-blue dark:text-makrx-yellow">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-24 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Professional Equipment
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Access the same tools used by leading product design companies and research institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-makrx-blue/10 dark:bg-makrx-yellow/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Package className="w-10 h-10 text-makrx-blue dark:text-makrx-yellow" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">3D Printers</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">FDM, SLA, and SLS printers for rapid prototyping</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-makrx-blue/10 dark:bg-makrx-yellow/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-10 h-10 text-makrx-blue dark:text-makrx-yellow" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Laser Cutters</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Precision cutting for wood, acrylic, and metal</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-makrx-blue/10 dark:bg-makrx-yellow/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-10 h-10 text-makrx-blue dark:text-makrx-yellow" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">CNC Machines</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Computer-controlled milling and machining</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-makrx-blue/10 dark:bg-makrx-yellow/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-10 h-10 text-makrx-blue dark:text-makrx-yellow" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Electronics Lab</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">PCB design, testing, and assembly tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Nationwide Coverage
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find a MakrCave makerspace near you in major cities across India
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {cities.map((city, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full border border-gray-200 dark:border-slate-700">
                <MapPin className="w-4 h-4 text-makrx-blue dark:text-makrx-yellow" />
                <span className="text-gray-900 dark:text-white font-medium">{city}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://makrcave.com/locations"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-makrx-blue dark:bg-makrx-yellow text-white dark:text-makrx-blue rounded-xl font-semibold hover:bg-makrx-blue/90 dark:hover:bg-makrx-yellow/90 transition-colors"
            >
              Find Nearest Location
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-makrx-blue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Making?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Join our community of makers and access professional-grade tools and resources
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://makrcave.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-makrx-yellow text-makrx-blue rounded-xl font-bold text-lg hover:bg-makrx-yellow/90 transition-all transform hover:scale-105 shadow-lg"
            >
              Sign Up Now
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="https://makrcave.com/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all"
            >
              Book a Demo
              <Calendar className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
