'use client';

import dynamic from 'next/dynamic';

const Careers = dynamic(() => import('../../components/page-components/PlaceholderPage').then(mod => ({ default: mod.Careers })), {
  ssr: false,
  loading: () => <div className="min-h-screen py-20 flex items-center justify-center">Loading...</div>
});

export default function CareersPage() {
  return <Careers />;
}
