'use client';

import { motion } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { tomes } from '@/data/tomes';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2, Lock, ChevronRight } from 'lucide-react';

const tomeGradients = [
  { from: '#D97706', to: '#EA580C' },
  { from: '#E11D48', to: '#DB2777' },
  { from: '#CA8A04', to: '#D97706' },
  { from: '#0D9488', to: '#0891B2' },
  { from: '#7C3AED', to: '#6D28D9' },
];

const tomeIcons = ['🌙', '🔥', '🌊', '💫', '👑'];

const chapterThemeIcons: Record<string, string> = {
  'Le Rêve du Jardin Secret': '🌿',
  'La Zawiyah du Village': '🕌',
  'Le Premier Monstre': '⚔️',
  'La Transformation': '✨',
  'Le Désert du Savoir': '🏜️',
  'La Montagne des Épreuves': '⛰️',
  'La Forêt des Épreuves': '🌲',
  'Le Lac de la Patience': '🌊',
  'La Vallée des Mirages': '🪞',
  'Le Sommet de la Sagesse': '🏔️',
  'L\'Océan de la Gratitude': '🫧',
  'La Grotte des Secrets': '🕳️',
  'Le Pont de la Confiance': '🌉',
  'La Cité Dorée': '🏰',
  'Le Jardin des Vertus': '🌷',
  'Le Palais de la Lumière': '🔆',
  'La Porte de la Paix': '🚪',
  'Le Trône de la Miséricorde': '👑',
  'Le Jardin Éternel': '🌟',
  'Le Cœur du Monde': '💖',
  'La Dernière Épreuve': '🔥',
};

function getChapterIcon(title: string): string {
  return chapterThemeIcons[title] || '📖';
}

export function WorldMapScreen() {
  const { navigateTo, selectTome, selectChapter, setCurrentScene, completedChapters, completedScenes } = useApp();

  const handleChapterClick = (tomeId: string, chapterId: string) => {
    const tome = tomes.find(t => t.id === tomeId);
    if (!tome) return;
    selectTome(tomeId);
    selectChapter(chapterId);
    const chapter = tome.chapters.find(c => c.id === chapterId);
    if (chapter) {
      const firstUncompleted = chapter.scenes.find(s => !completedScenes.includes(s.id));
      setCurrentScene(firstUncompleted ? firstUncompleted.id : chapter.scenes[0].id);
      navigateTo('story');
    }
  };

  const totalChapters = tomes.reduce((s, t) => s + t.chapters.length, 0);
  const completedCount = completedChapters.length;
  const overallProgress = totalChapters > 0 ? (completedCount / totalChapters) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-teal-50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-950">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-amber-50/80 dark:bg-stone-900/80 backdrop-blur-sm border-b border-amber-200/30 dark:border-stone-700/30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigateTo('home')} className="shrink-0">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Retour
          </Button>
          <h1 className="text-lg font-bold text-stone-800 dark:text-stone-100">Carte du Monde</h1>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-xs font-medium text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded-full">
              {completedCount}/{totalChapters}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Legend & Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="parchment-card rounded-xl p-4 mb-6"
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-stone-800 dark:text-stone-100">Progression du voyage</h2>
            <span className="text-xs font-bold text-amber-700 dark:text-amber-400">{Math.round(overallProgress)}%</span>
          </div>
          <div className="w-full h-3 bg-stone-100 dark:bg-stone-700 rounded-full overflow-hidden mb-3">
            <motion.div
              className="h-full story-progress-bar rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${overallProgress}%` }}
              transition={{ duration: 1.5 }}
            />
          </div>
          <div className="flex items-center gap-4 text-[10px] text-stone-500 dark:text-stone-400">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span>Terminé</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <span>En cours</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-stone-300 dark:bg-stone-600" />
              <span>Verrouillé</span>
            </div>
          </div>
        </motion.div>

        {/* Map path - vertical scrolling */}
        <div className="relative">
          {/* Central vertical path line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-300/40 via-stone-300/20 to-transparent dark:from-amber-500/20 dark:via-stone-500/10" />

          <div className="space-y-8">
            {tomes.map((tome, tomeIdx) => {
              const colors = tomeGradients[tomeIdx] || tomeGradients[0];
              const icon = tomeIcons[tomeIdx] || '📖';
              const completedInTome = completedChapters.filter(id =>
                tome.chapters.some(c => c.id === id)
              ).length;
              const isTomeComplete = completedInTome === tome.chapters.length;
              const isFirstTome = tomeIdx === 0;
              const isTomeUnlocked = isFirstTome || isTomeComplete ||
                completedChapters.includes(tomes[tomeIdx - 1].chapters[tomes[tomeIdx - 1].chapters.length - 1].id);

              return (
                <motion.section
                  key={tome.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: tomeIdx * 0.15 }}
                >
                  {/* Tome header */}
                  <div className="relative pl-16 mb-3">
                    {/* Tome node on path */}
                    <div
                      className="absolute left-2.5 top-0 w-7 h-7 rounded-full flex items-center justify-center z-10 shadow-md text-sm"
                      style={{
                        background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
                        boxShadow: isTomeComplete ? `0 0 12px ${colors.from}40` : 'none',
                      }}
                    >
                      {isTomeComplete ? (
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      ) : isTomeUnlocked ? (
                        <span>{icon}</span>
                      ) : (
                        <Lock className="w-3 h-3 text-white/60" />
                      )}
                    </div>

                    <div
                      className="rounded-xl p-3 text-white shadow-md"
                      style={{
                        background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
                        opacity: isTomeUnlocked ? 1 : 0.5,
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-sm">Tome {tome.number} — {tome.title}</h3>
                          <p className="text-xs opacity-80 font-amiri" dir="rtl">{tome.titleAr}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                            {completedInTome}/{tome.chapters.length}
                          </span>
                          {isTomeUnlocked && (
                            <button
                              onClick={() => {
                                selectTome(tome.id);
                                navigateTo('chapter_select');
                              }}
                              className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                      <p className="text-[10px] opacity-70 mt-1 italic">{tome.subtitle}</p>
                    </div>
                  </div>

                  {/* Chapter nodes */}
                  <div className="pl-16 space-y-2">
                    {tome.chapters.map((chapter, chIdx) => {
                      const isCompleted = completedChapters.includes(chapter.id);
                      const isChapterFirst = chIdx === 0;
                      const isChapterUnlocked = isChapterFirst ||
                        completedChapters.includes(tome.chapters[chIdx - 1]?.id);
                      const scenesInChapter = chapter.scenes.length;
                      const scenesDone = chapter.scenes.filter(s => completedScenes.includes(s.id)).length;
                      const chapterIcon = getChapterIcon(chapter.title);

                      return (
                        <motion.div
                          key={chapter.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: tomeIdx * 0.15 + chIdx * 0.05 }}
                          className="relative"
                        >
                          {/* Small connector dot */}
                          <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full z-10"
                            style={{
                              backgroundColor: isCompleted ? '#059669' : isChapterUnlocked ? colors.from : '#a8a29e',
                              boxShadow: isCompleted ? '0 0 6px #05966960' : 'none',
                            }}
                          />

                          <button
                            onClick={() => isChapterUnlocked && handleChapterClick(tome.id, chapter.id)}
                            disabled={!isChapterUnlocked}
                            className={`w-full text-left rounded-lg border p-3 transition-all flex items-center gap-3 ${
                              isChapterUnlocked
                                ? 'parchment-card hover:shadow-md cursor-pointer group'
                                : 'bg-white/20 dark:bg-stone-800/20 border-stone-200/30 dark:border-stone-700/30 opacity-40 cursor-not-allowed'
                            }`}
                          >
                            {/* Chapter icon */}
                            <div
                              className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg shrink-0 ${
                                isCompleted ? 'bg-green-100 dark:bg-green-900/30' :
                                isChapterUnlocked ? 'bg-amber-100 dark:bg-amber-900/30' :
                                'bg-stone-100 dark:bg-stone-800'
                              }`}
                            >
                              {isCompleted ? '✅' : isChapterUnlocked ? chapterIcon : '🔒'}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px] text-stone-400 dark:text-stone-500 font-medium uppercase">
                                  Ch.{chapter.number}
                                </span>
                                {isCompleted && (
                                  <span className="text-[9px] text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20 px-1.5 py-0.5 rounded-full">
                                    Terminé
                                  </span>
                                )}
                              </div>
                              <p className={`text-xs font-semibold truncate mt-0.5 ${
                                isCompleted ? 'text-green-700 dark:text-green-400' :
                                isChapterUnlocked ? 'text-stone-800 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400' :
                                'text-stone-400'
                              }`}>
                                {chapter.title}
                              </p>
                              {/* Mini scene progress */}
                              {isChapterUnlocked && scenesInChapter > 0 && (
                                <div className="flex items-center gap-2 mt-1.5">
                                  <div className="flex-1 h-1 bg-stone-100 dark:bg-stone-700 rounded-full overflow-hidden">
                                    <div
                                      className="h-full rounded-full transition-all"
                                      style={{
                                        width: `${(scenesDone / scenesInChapter) * 100}%`,
                                        backgroundColor: isCompleted ? '#059669' : colors.from,
                                      }}
                                    />
                                  </div>
                                  <span className="text-[9px] text-stone-400 dark:text-stone-500 shrink-0">
                                    {scenesDone}/{scenesInChapter}
                                  </span>
                                </div>
                              )}
                            </div>
                          </button>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Spacer between tomes */}
                  {tomeIdx < tomes.length - 1 && (
                    <div className="pl-16 flex items-center gap-2 pt-2">
                      <div className="h-px flex-1 bg-gradient-to-r from-stone-300/50 to-transparent dark:from-stone-600/50" />
                      <div className="w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-stone-600" />
                      <div className="h-px flex-1 bg-gradient-to-l from-stone-300/50 to-transparent dark:from-stone-600/50" />
                    </div>
                  )}
                </motion.section>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 parchment-card rounded-xl p-4 text-center"
        >
          <p className="text-xs text-stone-500 dark:text-stone-400 italic leading-relaxed">
            « La connaissance est une lumière qu&apos;Allah dépose dans le cœur. »
          </p>
          <p className="text-[10px] text-stone-400 dark:text-stone-500 mt-1">— Ibn al-Qayyim</p>
        </motion.div>
      </div>
    </div>
  );
}
