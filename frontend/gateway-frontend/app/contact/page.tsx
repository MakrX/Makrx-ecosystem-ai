'use client';

import dynamicImport from 'next/dynamic';

export const dynamic = 'force-dynamic';

const Contact = dynamicImport(() => import('../../components/page-components/Contact'), {
  ssr: false,
  loading: () => <div className="min-h-screen py-20 flex items-center justify-center">Loading...</div>
});

export default function ContactPage() {
  return <Contact />;
}
