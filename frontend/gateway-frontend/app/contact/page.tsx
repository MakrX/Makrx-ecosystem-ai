'use client';

import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const Contact = dynamic(() => import('../../components/page-components/Contact'), {
  ssr: false,
  loading: () => <div className="min-h-screen py-20 flex items-center justify-center">Loading...</div>
});

export default function ContactPage() {
  return <Contact />;
}
