export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const quizQuestions: Record<string, QuizQuestion[]> = {

  // ================================================================
  // TOME 1 — Al-'Ilm (العِلم) — La Connaissance
  // ================================================================

  t1c1: [
    { question: "Où Souhayl découvre-t-il la bibliothèque magique ?", options: ["Sous sa maison à Fès", "Sous la mosquée Qarawiyyin", "Dans le palais royal", "Au sommet du mont Zerhoun"], correctIndex: 1, explanation: "Souhayl découvre une bibliothèque secrète cachée sous la mosquée Qarawiyyin, la plus ancienne université du monde fondée à Fès. C'est Sidi Mu'adh qui le guide jusqu'à ce lieu magique." },
    { question: "Comment s'appelle le vieux sage aux yeux verts qui guide Souhayl ?", options: ["Sidi Ahmad", "Sidi Mu'adh", "Sidi Ali", "Sidi Omar"], correctIndex: 1, explanation: "Sidi Mu'adh est un vieil homme sage aux yeux verts qui devient le guide spirituel de Souhayl. Il connaît les secrets de la bibliothèque et initie Souhayl au savoir des anciens savants musulmans." },
    { question: "Quel est le métier du père de Souhayl ?", options: ["Boulanger", "Marchand de tapis", "Enseignant à la madrasa", "Architecte"], correctIndex: 2, explanation: "Mehdi, le père de Souhayl, enseigne à la madrasa de Fès. Il transmet le savoir islamique aux enfants, ce qui inspire Souhayl dans sa quête de connaissance." },
    { question: "Comment s'appelle le petit frère de Souhayl ?", options: ["Nawfel", "Wassim", "Yassine", "Aucun frère"], correctIndex: 1, explanation: "Wassim (وسيم) est le petit frère de Souhayl. Il a 6 ans bientôt 7 et possède un don naturel pour percevoir la sincérité. Sa pureté de cœur fait de lui un allié précieux pour Souhayl." },
  ],

  t1c2: [
    { question: "Qui a fondé la mosquée-université Qarawiyyin ?", options: ["Imam Malik", "Fatima Al-Fihri (فاطمة الفهرية)", "Ibn Sina", "Salahuddin"], correctIndex: 1, explanation: "Fatima Al-Fihri, une femme extraordinaire de Fès, a fondé la Qarawiyyin en 859. Souhayl apprend que le savoir n'est pas réservé aux hommes — les femmes ont été des piliers de la civilisation islamique." },
    { question: "Quel savant Souhayl rencontre-t-il dans le premier tome à travers le manuscrit magique ?", options: ["Al-Ghazali", "Imam Malik (إمام مالك)", "Ibn Al-Qayyim", "Rabia Al-Adawiyya"], correctIndex: 1, explanation: "Imam Malik, l'un des plus grands savants de l'islam, apparaît dans le manuscrit magique. Il enseigne à Souhayl que la connaissance commence par le respect et l'écoute attentive." },
    { question: "Que signifie Al-'Ilm (العِلم) ?", options: ["La patience", "La vérité", "La connaissance / le savoir", "La sagesse"], correctIndex: 2, explanation: "Al-'Ilm signifie la connaissance, le savoir. C'est le premier pilier que Souhayl explore dans la bibliothèque magique. Le Prophète ﷺ a dit : « La quête du savoir est une obligation pour chaque musulman. »" },
    { question: "Quel verset coranique Sidi Mu'adh cite-t-il sur la lecture et le savoir ?", options: ["Al-Fatiha (1:1)", "Iqra' — « Lis ! Au nom de ton Seigneur » (96:1)", "Al-Ikhlas (112:1)", "Al-Kawthar (108:1)"], correctIndex: 1, explanation: "Le premier verset révélé au Prophète ﷺ est « Iqra' — Lis ! » (Sourate Al-'Alaq 96:1). Sidi Mu'adh rappelle à Souhayl que l'islam commence par une invitation à lire et à apprendre." },
  ]
};
