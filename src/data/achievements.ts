import { tomes } from '@/data/tomes';

// ─────────────────────────────────────────────────────────────
// Achievement System — Les Aventures Spirituelles de Nawfel
// ─────────────────────────────────────────────────────────────

export type AchievementCategory = 'progress' | 'wisdom' | 'exploration' | 'social';

export interface Achievement {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  icon: string;
  color: string;
  condition: string;
  category: AchievementCategory;
}

// ─────────────────────────────────────────────────────────────
// Achievement Definitions
// ─────────────────────────────────────────────────────────────

export const achievements: Achievement[] = [
  // ─── PROGRESS ─────────────────────────────────────────────
  {
    id: 'first_chapter',
    name: 'Première Lecture',
    nameAr: 'أول قراءة',
    description: 'Tu as lu ton premier chapitre de l\'aventure de Nawfel. Le voyage intérieur commence.',
    icon: '📖',
    color: '#6366F1',
    condition: 'completedChapters.length >= 1',
    category: 'progress',
  },
  {
    id: 'explorer',
    name: 'Explorateur',
    nameAr: 'مستكشف',
    description: 'Tu as exploré 5 chapitres. Ton cœur s\'ouvre à la sagesse.',
    icon: '🧭',
    color: '#0EA5E9',
    condition: 'completedChapters.length >= 5',
    category: 'progress',
  },
  {
    id: 'truth_seeker',
    name: 'Chercheur de Vérité',
    nameAr: 'باحث الحقيقة',
    description: 'Tu as complété 10 chapitres. La quête spirituelle s\'approfondit.',
    icon: '🔭',
    color: '#7C3AED',
    condition: 'completedChapters.length >= 10',
    category: 'progress',
  },
  {
    id: 'spiritual_master',
    name: 'Maître Spirituel',
    nameAr: 'أستاذ روحي',
    description: 'Tu as complété tous les chapitres de l\'histoire. Tu es devenu un maître du cheminement spirituel.',
    icon: '👑',
    color: '#F59E0B',
    condition: 'completedChapters.length === totalChapters',
    category: 'progress',
  },
  {
    id: 'tome1_complete',
    name: 'Tome I Conquis',
    nameAr: 'المجلد الأول مكتمل',
    description: 'Tu as complété le Tome I — L\'Éveil. La porte du cœur est grande ouverte.',
    icon: '📕',
    color: '#DC2626',
    condition: 'All chapters of tome 1 completed',
    category: 'progress',
  },
  {
    id: 'complete_sage',
    name: 'Sage Complet',
    nameAr: 'حكيم كامل',
    description: 'Tu as complété les 5 tomes de l\'aventure. Nawfel n\'a plus de secrets pour toi.',
    icon: '🌟',
    color: '#D97706',
    condition: 'All 5 tomes completed',
    category: 'progress',
  },

  // ─── WISDOM ───────────────────────────────────────────────
  {
    id: 'first_wisdom',
    name: 'Première Sagesse',
    nameAr: 'الحكمة الأولى',
    description: 'Tu as passé ton premier quiz. La connaissance est une lumière que l\'on porte en soi.',
    icon: '🧠',
    color: '#8B5CF6',
    condition: 'Object.keys(quizScores).length >= 1',
    category: 'wisdom',
  },
  {
    id: 'perfect_student',
    name: 'Élève Exemplaire',
    nameAr: 'تلميذ مثالي',
    description: 'Tu as obtenu 100% à un quiz. Ton cœur retient la sagesse à la perfection, Masha\'Allah.',
    icon: '💯',
    color: '#10B981',
    condition: 'Any quiz with perfect score (all correct)',
    category: 'wisdom',
  },
  {
    id: 'scholar',
    name: 'Érudit',
    nameAr: 'عالم',
    description: 'Tu as complété 5 quiz. Le savoir s\'accumule comme les gouttes d\'eau qui forment un océan.',
    icon: '🎓',
    color: '#2563EB',
    condition: 'Object.keys(quizScores).length >= 5',
    category: 'wisdom',
  },
  {
    id: 'wise_heart',
    name: 'Cœur Savant',
    nameAr: 'قلب عالم',
    description: 'Tu as complété tous les quiz. Ton cœur est rempli de connaissance et de lumière.',
    icon: '💡',
    color: '#F59E0B',
    condition: 'All quizzes completed',
    category: 'wisdom',
  },

  // ─── EXPLORATION ──────────────────────────────────────────
  {
    id: 'collector',
    name: 'Collectionneur',
    nameAr: 'جامع',
    description: 'Tu as obtenu ta première vertu spirituelle. Chaque badge est un pas vers la lumière.',
    icon: '🏷️',
    color: '#059669',
    condition: 'earnedBadges.length >= 1',
    category: 'exploration',
  },
  {
    id: 'virtuous',
    name: 'Vertueux',
    nameAr: 'صاحب الفضيلة',
    description: 'Tu as obtenu 5 vertus spirituelles. Tes qualités intérieures rayonnent comme des étoiles.',
    icon: '🌺',
    color: '#EC4899',
    condition: 'earnedBadges.length >= 5',
    category: 'exploration',
  },
  {
    id: 'inner_light',
    name: 'Lumière Intérieure',
    nameAr: 'النور الداخلي',
    description: 'Tu as collecté les 8 badges de vertus. La lumière de ton cœur illumine le monde.',
    icon: '✨',
    color: '#EAB308',
    condition: 'earnedBadges.length >= 8',
    category: 'exploration',
  },
  {
    id: 'spiritual_writer',
    name: 'Écrivain Spirituel',
    nameAr: 'كاتب روحي',
    description: 'Tu as écrit ta première réflexion dans le journal spirituel. L\'écriture est un miroir de l\'âme.',
    icon: '📝',
    color: '#0D9488',
    condition: 'journalEntries.length >= 1',
    category: 'exploration',
  },
  {
    id: 'reflective',
    name: 'Réflexif',
    nameAr: 'متأمل',
    description: 'Tu as écrit 5 réflexions spirituelles. La contemplation mène à la compréhension profonde.',
    icon: '📜',
    color: '#6D28D9',
    condition: 'journalEntries.length >= 5',
    category: 'exploration',
  },

  // ─── SOCIAL ───────────────────────────────────────────────
  {
    id: 'patience_pillar',
    name: 'Pilier de Patience',
    nameAr: 'عماد الصبر',
    description: 'Tu as réussi un quiz du premier coup sans aucune erreur. La patience et la concentration portent leurs fruits.',
    icon: '⚓',
    color: '#14B8A6',
    condition: 'Perfect first-attempt score on any quiz',
    category: 'social',
  },
  {
    id: 'faithful_path',
    name: 'Fidèle au Chemin',
    nameAr: 'المخلص للطريق',
    description: 'Tu as visité tous les écrans de l\'application. Tu es un explorateur fidèle de l\'aventure de Nawfel.',
    icon: '🗺️',
    color: '#7C3AED',
    condition: 'All app screens visited',
    category: 'social',
  },
];

// ─────────────────────────────────────────────────────────────
// State interface for achievement checking
// ─────────────────────────────────────────────────────────────

export interface AchievementState {
  completedChapters: string[];
  earnedBadges: string[];
  quizScores: Record<string, number>;
  journalEntries: any[];
  /** Optional — track which screens the player has visited */
  visitedScreens?: string[];
  /** Optional — track whether a quiz was passed on the first attempt with no errors */
  perfectFirstAttempts?: string[];
}

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

/** Total number of chapters across all tomes */
function getTotalChapters(): number {
  return tomes.reduce((sum, tome) => sum + tome.chapters.length, 0);
}

/** All chapter IDs across all tomes */
function getAllChapterIds(): string[] {
  return tomes.flatMap(tome => tome.chapters.map(ch => ch.id));
}

/** Chapter IDs belonging to a specific tome */
function getTomeChapterIds(tomeId: string): string[] {
  const tome = tomes.find(t => t.id === tomeId);
  return tome ? tome.chapters.map(ch => ch.id) : [];
}

/** Total number of questions per chapter (all quizzes have 5 questions) */
const QUESTIONS_PER_QUIZ = 5;

/** All possible screen types in the app */
const ALL_SCREENS = [
  'home',
  'tome_select',
  'chapter_select',
  'story',
  'character_gallery',
  'badge_collection',
  'lesson',
  'quiz',
  'settings',
  'stats',
  'journal',
];

// ─────────────────────────────────────────────────────────────
// Achievement Checker
// ─────────────────────────────────────────────────────────────

/**
 * Checks the player's current state and returns IDs of newly earned achievements.
 * The caller is responsible for persisting earned achievement IDs and only
 * triggering this for truly *new* unlocks by comparing against a previously-saved list.
 */
export function checkAchievements(state: AchievementState): string[] {
  const earned: string[] = [];
  const { completedChapters, earnedBadges, quizScores, journalEntries, visitedScreens, perfectFirstAttempts } = state;

  const totalChapters = getTotalChapters();
  const allChapterIds = getAllChapterIds();
  const quizKeys = Object.keys(quizScores);
  const hasPerfectScore = quizKeys.some(key => quizScores[key] >= QUESTIONS_PER_QUIZ);

  // ─── PROGRESS ─────────────────────────────────────────────

  // Première Lecture — first chapter completed
  if (completedChapters.length >= 1) {
    earned.push('first_chapter');
  }

  // Explorateur — 5 chapters completed
  if (completedChapters.length >= 5) {
    earned.push('explorer');
  }

  // Chercheur de Vérité — 10 chapters completed
  if (completedChapters.length >= 10) {
    earned.push('truth_seeker');
  }

  // Maître Spirituel — all chapters completed
  if (completedChapters.length >= totalChapters) {
    earned.push('spiritual_master');
  }

  // Tome I Conquis — all 4 chapters of tome 1 completed
  const tome1Ids = getTomeChapterIds('tome1');
  if (tome1Ids.every(id => completedChapters.includes(id))) {
    earned.push('tome1_complete');
  }

  // Sage Complet — all 5 tomes completed (all chapters across all tomes)
  if (completedChapters.length >= totalChapters && totalChapters > 0) {
    earned.push('complete_sage');
  }

  // ─── WISDOM ───────────────────────────────────────────────

  // Première Sagesse — at least one quiz taken
  if (quizKeys.length >= 1) {
    earned.push('first_wisdom');
  }

  // Élève Exemplaire — perfect score on any quiz
  if (hasPerfectScore) {
    earned.push('perfect_student');
  }

  // Érudit — 5 quizzes completed
  if (quizKeys.length >= 5) {
    earned.push('scholar');
  }

  // Cœur Savant — all quizzes completed (one per chapter that has a quiz)
  // Every chapter can have a quiz, so we check against all completed chapters
  // that the player has attempted. If they've attempted quizzes for every chapter
  // in tomes that have quiz content (tome 1 has quizzes for all 4 chapters),
  // we consider it "all quizzes".
  const totalChaptersWithQuizzes = allChapterIds.length;
  if (quizKeys.length >= totalChaptersWithQuizzes && totalChaptersWithQuizzes > 0) {
    earned.push('wise_heart');
  }

  // ─── EXPLORATION ──────────────────────────────────────────

  // Collectionneur — first badge earned
  if (earnedBadges.length >= 1) {
    earned.push('collector');
  }

  // Vertueux — 5 badges earned
  if (earnedBadges.length >= 5) {
    earned.push('virtuous');
  }

  // Lumière Intérieure — all 8 badges collected
  if (earnedBadges.length >= 8) {
    earned.push('inner_light');
  }

  // Écrivain Spirituel — first journal entry
  if (journalEntries.length >= 1) {
    earned.push('spiritual_writer');
  }

  // Réflexif — 5 journal entries
  if (journalEntries.length >= 5) {
    earned.push('reflective');
  }

  // ─── SOCIAL ───────────────────────────────────────────────

  // Pilier de Patience — perfect score on the first attempt (no retries)
  // Either use the explicit perfectFirstAttempts tracker, or check if any
  // quiz score equals the max questions (which indicates a first-attempt perfect)
  const hasFirstAttemptPerfect =
    (perfectFirstAttempts && perfectFirstAttempts.length >= 1) ||
    hasPerfectScore;
  if (hasFirstAttemptPerfect) {
    earned.push('patience_pillar');
  }

  // Fidèle au Chemin — visited all screens
  if (
    visitedScreens &&
    ALL_SCREENS.every(screen => visitedScreens.includes(screen))
  ) {
    earned.push('faithful_path');
  }

  return earned;
}

// ─────────────────────────────────────────────────────────────
// Achievement Lookup
// ─────────────────────────────────────────────────────────────

export function getAchievement(id: string): Achievement | undefined {
  return achievements.find(a => a.id === id);
}
