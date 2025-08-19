'use client';

import dynamicImport from 'next/dynamic';

export const dynamic = 'force-dynamic';

const Docs = dynamicImport(() => import('../../components/page-components/PlaceholderPageSimple'), {
  ssr: false,
  loading: () => <div className="min-h-screen py-20 flex items-center justify-center">Loading...</div>
});

export default function DocsPage() {
  return <Docs title="Documentation" description="Comprehensive guides and API documentation for the MakrX ecosystem." />;
}
