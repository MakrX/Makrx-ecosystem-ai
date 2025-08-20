'use client';

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Star,
  Users,
  Building2,
  ShoppingCart,
  GraduationCap,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  ChevronRight,
  Award,
  TrendingUp,
  Heart,
} from "lucide-react";

// SEO Component placeholder - you might want to implement this properly
const SEOStructuredData = ({ type }: { type: string }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "MakrX",
        description: "India's leading digital manufacturing platform",
        url: "https://makrx.org",
      }),
    }}
  />
);

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  href,
}) => (
  <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700 hover:border-makrx-blue/20 dark:hover:border-makrx-yellow/20">
    <div className="w-16 h-16 bg-makrx-blue/10 dark:bg-makrx-yellow/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-makrx-blue/20 dark:group-hover:bg-makrx-yellow/20 transition-colors">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-makrx-blue dark:group-hover:text-makrx-yellow transition-colors">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
      {description}
    </p>
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-makrx-blue dark:text-makrx-yellow font-semibold hover:gap-3 transition-all"
    >
      Learn More
      <ArrowRight className="w-4 h-4" />
    </Link>
  </div>
);

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  company,
}) => (
  <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-slate-700">
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-makrx-yellow fill-current" />
      ))}
    </div>
    <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{quote}"</p>
    <div className="flex items-center">
      <div className="w-12 h-12 bg-makrx-blue dark:bg-makrx-yellow rounded-full flex items-center justify-center text-white dark:text-makrx-blue font-bold mr-4">
        {author.charAt(0)}
      </div>
      <div>
        <div className="font-semibold text-gray-900 dark:text-white">
          {author}
        </div>
        <div className="text-gray-600 dark:text-gray-400 text-sm">
          {role}, {company}
        </div>
      </div>
    </div>
  </div>
);

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* SEO Structured Data */}
      <SEOStructuredData type="organization" />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[80vh] sm:min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-makrx-blue via-makrx-blue/90 to-purple-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 px-4 sm:px-6 pt-8 sm:pt-12"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none relative z-10 mb-6">
                <span className="text-white dark:text-gray-100 hover:text-makrx-yellow transition-colors duration-500 cursor-default">
                  MakrX
                </span>
              </h1>

              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white/90 dark:text-gray-200 mb-8 leading-tight">
                <div className="flex flex-row items-center justify-center gap-2 sm:gap-6 md:gap-8">
                  <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent font-medium">
                    Dream.
                  </span>
                  <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-makrx-yellow/60"></div>
                  <span className="bg-gradient-to-r from-makrx-yellow via-yellow-300 to-makrx-yellow bg-clip-text text-transparent font-bold">
                    Make.
                  </span>
                  <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-makrx-yellow/60"></div>
                  <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent font-medium">
                    Share.
                  </span>
                </div>
              </div>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-white/80 dark:text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
              India&apos;s most comprehensive digital manufacturing ecosystem. 
              Access world-class makerspaces, shop for components, and bring your ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link
                href="/makerspaces"
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-makrx-yellow text-makrx-blue rounded-xl font-bold text-base sm:text-lg hover:bg-makrx-yellow/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                Explore Makerspaces
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/store"
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-sm"
              >
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                Shop Components
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Complete Manufacturing Ecosystem
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to turn ideas into reality - from conception to production
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <FeatureCard
              icon={<Building2 className="w-8 h-8 text-makrx-blue dark:text-makrx-yellow" />}
              title="MakrCave Makerspaces"
              description="Access 50+ fully-equipped makerspaces across India with 3D printers, laser cutters, CNC machines, and electronics labs."
              href="/makerspaces"
            />

            <FeatureCard
              icon={<ShoppingCart className="w-8 h-8 text-makrx-blue dark:text-makrx-yellow" />}
              title="MakrX.Store"
              description="Shop thousands of components, tools, and materials from trusted suppliers with same-day delivery in major cities."
              href="/store"
            />

            <FeatureCard
              icon={<Zap className="w-8 h-8 text-makrx-blue dark:text-makrx-yellow" />}
              title="3D.MakrX.Store"
              description="Get custom 3D printing, laser cutting, PCB fabrication, and CNC machining services from certified professionals."
              href="/3d"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-makrx-blue dark:text-makrx-yellow mb-2 group-hover:scale-110 transition-transform">
                50+
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Makerspaces</div>
            </div>
            <div className="group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-makrx-blue dark:text-makrx-yellow mb-2 group-hover:scale-110 transition-transform">
                10K+
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Active Makers</div>
            </div>
            <div className="group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-makrx-blue dark:text-makrx-yellow mb-2 group-hover:scale-110 transition-transform">
                1000+
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Products</div>
            </div>
            <div className="group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-makrx-blue dark:text-makrx-yellow mb-2 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              What Makers Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied creators across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Testimonial
              quote="MakrX transformed my prototyping process. What used to take weeks now takes days."
              author="Rajesh Kumar"
              role="Hardware Engineer"
              company="Tech Startup"
            />

            <Testimonial
              quote="The community and equipment quality at MakrCave makerspaces is unmatched in India."
              author="Priya Sharma"
              role="Product Designer"
              company="Design Studio"
            />

            <Testimonial
              quote="Finally, a platform that understands the needs of Indian makers and entrepreneurs."
              author="Amit Patel"
              role="Entrepreneur"
              company="IoT Solutions"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-makrx-blue via-makrx-blue/90 to-purple-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Ready to Start Making?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed">
            Join thousands of makers, entrepreneurs, and innovators building the future with MakrX
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              href="/makerspaces"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-makrx-yellow text-makrx-blue rounded-xl font-bold text-base sm:text-lg hover:bg-makrx-yellow/90 transition-all transform hover:scale-105 shadow-lg"
            >
              <Building2 className="w-5 h-5" />
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-white/10 hover:border-white/50 transition-all"
            >
              <Heart className="w-5 h-5" />
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
