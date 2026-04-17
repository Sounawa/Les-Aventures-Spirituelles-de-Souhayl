'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { achievements, checkAchievements } from '@/data/achievements';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Lock, Trophy } from 'lucide-react';

export default function AchievementsScreen() {
  const { navigateTo, completedChapters, earnedBadges, quizScores, journalEntries } = useApp();

  const earnedIds = useMemo(() => checkAchievements({
    completedChapters,
    earnedBadges,
    quizScores,
    journalEntries,
  }), [completedChapters, earnedBadges, quizScores, journalEntries]);

  const totalAchievements = achievements.length;
  const earnedCount = earnedIds.length;
  const progressPercent = totalAchievements > 0 ? Math.round((earnedCount / totalAchievements) * 100) : 0;

  const categories = [
    { key: 'progress' as const, label: 'Progression', labelAr: 'التقدم', color: '#6366F1' },
    { key: 'wisdom' as const, label: 'Sagesse', labelAr: 'الحكمة', color: '#8B5CF6' },
    { key: 'exploration' as const, label: 'Exploration', labelAr: 'الاستكشاف', color: '#059669' },
    { key: 'social' as const, label: 'Social', labelAr: 'اجتماعي', color: '#EC4899' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-teal-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-amber-50/80 backdrop-blur-sm border-b border-amber-200/30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigateTo('home')} className="shrink-0">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Retour
            </Button>
            <h1 className="text-lg font-bold text-stone-800 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-600" />
              Succès
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
              {earnedCount}/{totalAchievements}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Progress overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="parchment-card rounded-2xl p-6 text-center"
        >
          {/* Progress ring */}
          <div className="relative w-28 h-28 mx-auto mb-4">
            <svg width="112" height="112" className="-rotate-90">
              <circle cx="56" cy="56" r="46" fill="none" stroke="currentColor" strokeWidth="8" className="text-stone-100" />
              <motion.circle
                cx="56" cy="56" r="46"
                fill="none" stroke="#D97706" strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={289}
                initial={{ strokeDashoffset: 289 }}
                animate={{ strokeDashoffset: 289 - (earnedCount / totalAchievements) * 289 }}
                transition={{ duration: 1.5 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div>
                <span className="text-2xl font-bold text-stone-700">{earnedCount}</span>
                <p className="text-[10px] text-stone-400">/{totalAchievements}</p>
              </div>
            </div>
          </div>
          <h2 className="text-lg font-bold text-stone-800 mb-1">Succès & Achievements</h2>
          <p className="text-sm text-stone-500 mb-3">
            {earnedCount === 0
              ? 'Explore l\'aventure pour débloquer tes premiers succès !'
              : earnedCount === totalAchievements
                ? 'Masha\'Allah ! Tu as débloqué tous les succès !'
                : `${progressPercent}% complété — Continue ton chemin spirituel !`
            }
          </p>
          {/* Progress bar */}
          <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full story-progress-bar rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        </motion.div>

        {/* Categories */}
        {categories.map((cat) => {
          const catAchievements = achievements.filter(a => a.category === cat.key);
          const catEarned = catAchievements.filter(a => earnedIds.includes(a.id)).length;

          return (
            <motion.section
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                <h3 className="text-sm font-semibold text-stone-700">{cat.label}</h3>
                <span className="text-xs text-stone-400 ml-auto">{catEarned}/{catAchievements.length}</span>
              </div>

              <div className="space-y-2">
                {catAchievements.map((achievement, idx) => {
                  const isEarned = earnedIds.includes(achievement.id);

                  return (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      className={`parchment-card rounded-xl p-4 flex items-start gap-3 transition-all ${
                        isEarned
                          ? ''
                          : 'opacity-50'
                      }`}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                        style={{
                          backgroundColor: isEarned ? `${achievement.color}15` : 'bg-stone-50',
                        border: isEarned ? `2px solid ${achievement.color}30` : '2px solid #e7e5e4',
                        boxShadow: isEarned ? `0 0 12px ${achievement.color}20` : 'none',
                        transition: 'all 0.3s',
                      }}
                      >
                        {isEarned ? achievement.icon : <Lock className="w-5 h-5 text-stone-300" />}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className={`text-sm font-bold ${isEarned ? 'text-stone-800' : 'text-stone-400'}`}>
                            {achievement.name}
                          </h4>
                        </div>
                        <p
                          className={`text-[10px] mt-0.5 ${isEarned ? '' : 'text-stone-300'}`}
                          dir="rtl"
                          style={{ color: isEarned ? achievement.color : undefined }}
                        >
                          {achievement.nameAr}
                        </p>
                        <p className={`text-xs mt-1 leading-relaxed ${isEarned ? 'text-stone-600' : 'text-stone-400'}`}>
                          {isEarned ? achievement.description : '???'}
                        </p>
                        {isEarned && (
                          <div className="mt-1.5 flex items-center gap-1">
                            <div
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: achievement.color }}
                            />
                            <span className="text-[9px] font-medium" style={{ color: achievement.color }}>
                              Débloqué
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          );
        })}

        {/* Motivational quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="parchment-card rounded-xl p-4 text-center islamic-border"
        >
          <p className="text-xs text-stone-500 italic leading-relaxed">
            « Chaque pas en avant est une victoire sur soi-même. »
          </p>
        </motion.div>
      </div>
    </div>
  );
}
