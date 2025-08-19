'use client';

import dynamic from 'next/dynamic';

export const dynamic = 'force-dynamic';

const Store = dynamic(() => import('../../components/page-components/PlaceholderPage').then(mod => ({ default: mod.Store })), {
  ssr: false,
  loading: () => <div className="min-h-screen py-20 flex items-center justify-center">Loading...</div>
});

export default function StorePage() {
  return <Store />;
}
