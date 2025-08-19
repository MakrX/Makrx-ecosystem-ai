'use client';

import dynamicImport from 'next/dynamic';

export const dynamic = 'force-dynamic';

const ServiceProviders = dynamicImport(() => import('../../components/page-components/PlaceholderPage').then(mod => ({ default: mod.ServiceProviders })), {
  ssr: false,
  loading: () => <div className="min-h-screen py-20 flex items-center justify-center">Loading...</div>
});

export default function ServiceProvidersPage() {
  return <ServiceProviders />;
}
