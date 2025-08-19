'use client';

import dynamic from 'next/dynamic';

const ThemeDemo = dynamic(() => import('../../components/page-components/PlaceholderPage').then(mod => ({ default: mod.ThemeDemo })), {
  ssr: false,
  loading: () => <div className="min-h-screen py-20 flex items-center justify-center">Loading...</div>
});

export default function ThemeDemoPage() {
  return <ThemeDemo />;
}
