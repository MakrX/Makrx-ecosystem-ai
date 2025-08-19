'use client';

import dynamic from 'next/dynamic';

const Makerspaces = dynamic(() => import('../../components/page-components/PlaceholderPage').then(mod => ({ default: mod.Makerspaces })), {
  ssr: false,
  loading: () => <div className="min-h-screen py-20 flex items-center justify-center">Loading...</div>
});

export default function MakerspacesPage() {
  return <Makerspaces />;
}
