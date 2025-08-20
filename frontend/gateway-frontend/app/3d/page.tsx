'use client';

import dynamicImport from 'next/dynamic';

export const dynamic = 'force-dynamic';

const ThreeDStore = dynamicImport(() => import('../../components/page-components/PlaceholderPage'), {
  ssr: false,
  loading: () => <div className="min-h-screen py-20 flex items-center justify-center">Loading...</div>
}).ThreeDStore;

export default function ThreeDStorePage() {
  return <ThreeDStore />;
}
