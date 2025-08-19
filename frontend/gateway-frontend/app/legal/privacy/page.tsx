'use client';

import dynamic from 'next/dynamic';

const PrivacyPolicy = dynamic(() => import('../../../components/page-components/PlaceholderPage').then(mod => ({ default: mod.PrivacyPolicy })), {
  ssr: false,
  loading: () => <div className="min-h-screen py-20 flex items-center justify-center">Loading...</div>
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
