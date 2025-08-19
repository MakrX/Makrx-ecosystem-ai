'use client';

import dynamicImport from 'next/dynamic';

export const dynamic = 'force-dynamic';

const About = dynamicImport(() => import('../../components/page-components/About'), {
  ssr: false,
  loading: () => <div className="min-h-screen py-20 flex items-center justify-center">Loading...</div>
});

export default function AboutPage() {
  return <About />;
}
