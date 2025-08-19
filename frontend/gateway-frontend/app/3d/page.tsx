'use client';

import dynamic from 'next/dynamic';

const ThreeDStore = dynamic(() => import('../../components/page-components/PlaceholderPage').then(mod => ({ default: mod.ThreeDStore })), {
  ssr: false,
  loading: () => <div className="min-h-screen py-20 flex items-center justify-center">Loading...</div>
});

export default function ThreeDStorePage() {
  return <ThreeDStore />;
}
