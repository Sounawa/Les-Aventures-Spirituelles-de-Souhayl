'use client';

import dynamic from 'next/dynamic';

const AppContent = dynamic(() => import('@/components/AppContent'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 via-orange-50 to-teal-50">
      <div className="text-center">
        <div className="text-5xl mb-4 animate-bounce">🌙</div>
        <p className="text-amber-700 font-medium text-lg">Chargement...</p>
      </div>
    </div>
  ),
});

export default function Home() {
  return <AppContent />;
}
