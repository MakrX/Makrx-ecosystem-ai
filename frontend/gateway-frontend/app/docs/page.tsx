'use client';

import dynamic from 'next/dynamic';

export const dynamic = 'force-dynamic';

const Docs = dynamic(() => import('../../components/page-components/PlaceholderPage').then(mod => ({ default: mod.Docs })), {
  ssr: false,
  loading: () => <div className="min-h-screen py-20 flex items-center justify-center">Loading...</div>
});

export default function DocsPage() {
  return <Docs />;
}
