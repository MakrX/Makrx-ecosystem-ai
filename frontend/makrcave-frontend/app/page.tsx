'use client';

import dynamicImport from 'next/dynamic';

export const dynamic = 'force-dynamic';

const LandingPage = dynamicImport(() => import('../pages/LandingPage'), {
  ssr: false,
  loading: () => <div className="min-h-screen py-20 flex items-center justify-center">Loading...</div>
});

export default function HomePage() {
  return <LandingPage />;
}
