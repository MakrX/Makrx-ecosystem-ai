const fs = require('fs');
const path = require('path');

const pages = [
  'app/blog/page.tsx',
  'app/careers/page.tsx',
  'app/ecosystem/page.tsx',
  'app/events/page.tsx',
  'app/makerspaces/page.tsx',
  'app/press/page.tsx',
  'app/service-providers/page.tsx',
  'app/status/page.tsx',
  'app/store/page.tsx',
  'app/support/page.tsx',
  'app/theme-demo/page.tsx',
  'app/3d/page.tsx',
  'app/about/page.tsx',
  'app/legal/privacy/page.tsx',
  'app/legal/terms/page.tsx'
];

const pageComponents = {
  'blog': 'Blog',
  'careers': 'Careers',
  'ecosystem': 'Ecosystem',
  'events': 'Events',
  'makerspaces': 'Makerspaces',
  'press': 'Press',
  'service-providers': 'ServiceProviders',
  'status': 'Status',
  'store': 'Store',
  'support': 'Support',
  'theme-demo': 'ThemeDemo',
  '3d': 'ThreeDStore',
  'about': 'About',
  'privacy': 'PrivacyPolicy',
  'terms': 'TermsOfService'
};

pages.forEach(pagePath => {
  const fullPath = path.join(__dirname, pagePath);
  const fileName = path.basename(path.dirname(pagePath));
  const componentName = pageComponents[fileName];
  
  if (!componentName) {
    console.log(`Skipping ${pagePath} - no component mapping found`);
    return;
  }

  const newContent = `'use client';

import dynamic from 'next/dynamic';

const ${componentName} = dynamic(() => import('../../components/page-components/PlaceholderPage').then(mod => ({ default: mod.${componentName} })), {
  ssr: false,
  loading: () => <div className="min-h-screen py-20 flex items-center justify-center">Loading...</div>
});

export default function ${componentName}Page() {
  return <${componentName} />;
}
`;

  try {
    fs.writeFileSync(fullPath, newContent);
    console.log(`Updated ${pagePath}`);
  } catch (error) {
    console.error(`Error updating ${pagePath}:`, error.message);
  }
});

console.log('Page conversion complete!');
