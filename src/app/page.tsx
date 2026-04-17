'use client';

import dynamic from 'next/dynamic';

const AppContent = dynamic(() => import('@/components/AppContent'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 via-orange-50 to-teal-50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-950">
      <div className="text-center space-y-4">
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute inset-0 rounded-full border-2 border-amber-200 dark:border-amber-800" />
          <div className="absolute inset-2 rounded-full border-2 border-amber-300 dark:border-amber-700" />
          <div className="absolute inset-0 rounded-full border-t-2 border-t-amber-500 animate-spin" style={{ animationDuration: '1.5s' }} />
          <span className="absolute inset-0 flex items-center justify-center text-3xl animate-pulse">🌙</span>
        </div>
        <p className="text-amber-700 dark:text-amber-400 font-medium text-sm">Chargement de l&apos;aventure...</p>
        <p className="text-amber-600/50 dark:text-amber-500/40 text-xs font-amiri" dir="rtl">مغامرات نوفل الروحية</p>
      </div>
    </div>
  ),
});

export default function Home() {
  return <AppContent />;
}
