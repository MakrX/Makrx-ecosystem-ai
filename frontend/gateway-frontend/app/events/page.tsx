'use client';

import dynamic from 'next/dynamic';

export const dynamic = 'force-dynamic';

const Events = dynamic(() => import('../../components/page-components/PlaceholderPage').then(mod => ({ default: mod.Events })), {
  ssr: false,
  loading: () => <div className="min-h-screen py-20 flex items-center justify-center">Loading...</div>
});

export default function EventsPage() {
  return <Events />;
}
