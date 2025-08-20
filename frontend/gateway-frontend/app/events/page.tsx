'use client';

import { useEffect } from 'react';
import { Calendar, ExternalLink, ArrowRight } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function EventsPage() {
  useEffect(() => {
    // Redirect to makrx.events after a short delay
    const timer = setTimeout(() => {
      window.location.href = 'https://makrx.events';
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-makrx-blue to-purple-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Loading Animation */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-makrx-yellow/20 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Calendar className="w-10 h-10 text-makrx-yellow" />
          </div>
          <div className="flex justify-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-makrx-yellow rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-makrx-yellow rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-makrx-yellow rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          MakrX Events
        </h1>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Redirecting you to our events platform where you can discover workshops, 
          meetups, and maker gatherings happening across India.
        </p>

        {/* Manual Link */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <p className="text-white/80 mb-4">Taking too long?</p>
          <a
            href="https://makrx.events"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-makrx-yellow text-makrx-blue font-semibold rounded-xl hover:bg-yellow-300 transition-all duration-300 hover:scale-105"
          >
            Visit MakrX Events
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-white/60">
          <p className="flex items-center justify-center gap-2">
            <ArrowRight className="w-4 h-4" />
            You'll be redirected automatically in a few seconds
          </p>
        </div>
      </div>
    </div>
  );
}
