'use client';

import Layout from '../../components/Layout';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <Layout children={children} />
    </ProtectedRoute>
  );
}
