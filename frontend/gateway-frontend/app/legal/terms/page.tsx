'use client';

import dynamic from 'next/dynamic';

const TermsOfService = dynamic(() => import('../../../components/page-components/PlaceholderPage').then(mod => ({ default: mod.TermsOfService })), {
  ssr: false,
  loading: () => <div className="min-h-screen py-20 flex items-center justify-center">Loading...</div>
});

export default function TermsOfServicePage() {
  return <TermsOfService />;
}
