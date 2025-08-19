'use client';

import dynamic from 'next/dynamic';

export const dynamic = 'force-dynamic';

const About = dynamic(() => import('../../components/page-components/About'), {
  ssr: false,
  loading: () => <div className="min-h-screen py-20 flex items-center justify-center">Loading...</div>
});

export default function AboutPage() {
  return <About />;
}
