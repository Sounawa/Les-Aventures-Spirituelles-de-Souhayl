'use client';

import { motion } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { tomes } from '@/data/tomes';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, CheckCircle2, Sparkles } from 'lucide-react';

export function TomeSelectScreen() {
  const { setScreen, selectTome, completedChapters } = useApp();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-teal-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-amber-50/80 backdrop-blur-sm border-b border-amber-200/30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => setScreen('home')} className="shrink-0">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Retour
          </Button>
          <h1 className="text-lg font-bold text-stone-800">Les Tomes</h1>
          <div className="ml-auto">
            <span className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-1 rounded-full">
              {tomes.length} tomes
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {tomes.map((tome, idx) => {
          const completedChaptersInTome = completedChapters.filter(id => tome.chapters.some(c => c.id === id)).length;
          const isComplete = completedChaptersInTome.includes(tome.id);

          const tomeColors = [
            'from-amber-500 to-orange-600',
            'from-rose-500 to-pink-600',
            'from-yellow-500 to-amber-600',
            'from-teal-500 to-cyan-600',
            'from-purple-500 to-violet-600',
          ];

          return (
            <motion.button
              key={tome.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => {
                selectTome(tome.id);
                setScreen('chapter_select');
              }}
              className="w-full text-left bg-white/70 backdrop-blur-sm rounded-xl border border-amber-200/40 shadow-sm hover:shadow-md transition-all overflow-hidden group"
            >
              <div className="flex">
                {/* Tome number badge */}
                <div className={`w-20 md:w-24 bg-gradient-to-br ${tomeColors[idx] || tomeColors[0]} flex flex-col items-center justify-center text-white shrink-0`}>
                  <BookOpen className="w-5 h-5 mb-1" />
                  <span className="text-2xl font-bold">{tome.number}</span>
                </div>

                {/* Info */}
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-stone-800 text-base">{tome.title}</h3>
                      <p className="text-sm text-amber-600" dir="rtl">{tome.titleAr}</p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      {isComplete && (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-stone-500 mt-1">{tome.subtitle}</p>

                  {/* Monsters */}
                  <div className="mt-2 flex flex-wrap gap-1">
                    {tome.monsters.map((monster) => (
                      <span key={monster} className="inline-flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 bg-stone-100 text-stone-500 rounded-full">
                        <Sparkles className="w-2.5 h-2.5" />
                        {monster.split('(')[0].trim()}
                      </span>
                    ))}
                  </div>

                  {/* Progress */}
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-amber-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(completedChaptersInTome / tome.chapters.length) * 100}%` }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                      />
                    </div>
                    <span className="text-[10px] text-stone-400">
                      {completedChaptersInTome}/{tome.chapters.length} chapitres
                    </span>
                  </div>
                </div>
              </div>
            </motion.button>
          );
        })}

        {/* Spiritual journey note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center pt-4 pb-2"
        >
          <p className="text-xs text-stone-400 italic">
            « Le plus grand jihad est le jihad contre soi-même. »
          </p>
          <p className="text-[10px] text-stone-300 mt-1">— Rapporté par Ahmad et Bayhaqi</p>
        </motion.div>
      </div>
    </div>
  );
}
