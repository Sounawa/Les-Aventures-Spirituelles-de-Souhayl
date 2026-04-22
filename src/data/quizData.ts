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
  // ================================================================
  // TOME 2 — As-Sidq (الصِّدق) — La Vérité / La Sincérité
  // ================================================================

  t2c1: [
    { question: "Que signifie As-Sidq (الصِّدق) ?", options: ["La patience", "La vérité / la sincérité", "La justice", "La sagesse"], correctIndex: 1, explanation: "As-Sidq signifie la vérité, la sincérité et l'honnêteté. Dans le deuxième tome, Souhayl apprend qu'être sincère dans ses paroles et ses actes est la base de tout rapport avec Allah et avec les gens." },
    { question: "Quel grand savant enseigne à Souhayl la sincérité dans le deuxième tome ?", options: ["Imam Malik", "Al-Ghazali (الغزالي)", "Ibn Sina", "Umar ibn Al-Khattab"], correctIndex: 1, explanation: "Al-Ghazali, le grand savant perse, apparaît dans le manuscrit et enseigne à Souhayl que l'Ikhlas (الإخلاص) — la sincérité pure — est le trésor le plus précieux du cœur. Faire les choses uniquement pour Allah, sans chercher la louange des gens." },
    { question: "Que signifie l'Amana (الأمانة) — la confiance ?", options: ["Le courage au combat", "Le dépôt sacré qu'on doit préserver et rendre", "La prière du soir", "Le pèlerinage à La Mecque"], correctIndex: 1, explanation: "L'Amana est le dépôt sacré, la confiance. Ibn Sina enseigne à Souhayl qu'une promesse tenue est comme une lumière dans le cœur. Quand on garde une confiance, on renforce son lien avec Allah." },
    { question: "Que dit Al-Ghazali à Souhayl sur les intentions ?", options: ["« Les actes importent plus que les intentions »", "« Certes, les actions ne valent que par les intentions » (إنما الأعمال بالنيات)", "« Seules les grandes actions comptent »", "« L'intention n'a pas d'importance »"], correctIndex: 1, explanation: "Al-Ghazali rappelle le hadith fondamental : « إنما الأعمال بالنيات » — les actes ne valent que par les intentions. Sourire à son frère avec sincérité vaut plus qu'une grande action faite pour se montrer." },
  ],
  // ================================================================
  // TOME 3 — Al-Akhlaq (الأخلاق) — Le Bon Caractère
  // ================================================================

  t3c1: [
    { question: "Que signifie Al-Akhlaq (الأخلاق) ?", options: ["La prière", "Le bon caractère / les bonnes manières", "Le jeûne", "Le pèlerinage"], correctIndex: 1, explanation: "Al-Akhlaq signifie le bon caractère, les bonnes manières, la moralité. Le Prophète ﷺ a dit : « J'ai été envoyé pour parfaire les nobles caractères. » C'est le cœur de l'enseignement du troisième tome." },
    { question: "Quel compagnon du Prophète ﷺ enseigne la justice à Souhayl ?", options: ["Abu Bakr As-Siddiq", "Umar ibn Al-Khattab (عمر بن الخطاب)", "Ali ibn Abi Talib", "Bilal ibn Rabah"], correctIndex: 1, explanation: "Umar ibn Al-Khattab, le deuxième calife, apparaît dans le manuscrit. Connu pour sa justice impeccable, il enseigne à Souhayl que Adl (العدل) — la justice — est le fondement de toute société." },
    { question: "Que signifie Adl (العدل) ?", options: ["La patience", "La justice / l'équité", "Le courage", "La générosité"], correctIndex: 1, explanation: "Adl signifie la justice, l'équité. Umar ibn Al-Khattab enseigne à Souhayl que la justice consiste à traiter chacun avec équité, même quand c'est difficile — surtout quand c'est difficile." },
    { question: "Qui est Rabia Al-Adawiyya (ربيعة العدوية) ?", options: ["Une reine de l'Andalousie", "Une grande sainte connue pour son amour d'Allah", "La mère de Souhayl", "Une savante de médecine"], correctIndex: 1, explanation: "Rabia Al-Adawiyya est une grande sainte de l'islam, célèbre pour son amour pur d'Allah. Elle enseigne à Souhayl que la plus belle prière est celle qui naît de l'amour sincère, pas de la peur ou de l'habitude." },
  ],

  // ================================================================
  // TOME 4 — As-Sabr (الصبر) — La Patience
  // ================================================================

  t4c1: [
    { question: "Que signifie As-Sabr (الصبر) ?", options: ["La prière", "La patience / la persévérance", "Le courage", "La vérité"], correctIndex: 1, explanation: "As-Sabr signifie la patience, la persévérance, l'endurance. C'est la qualité que Souhayl doit développer dans le quatrième tome quand il traverse des moments difficiles dans sa quête de savoir." },
    { question: "Quel savant enseigne à Souhayl la patience dans l'apprentissage ?", options: ["Al-Ghazali", "Ibn Al-Qayyim (ابن القيم)", "Imam Malik", "Fatima Al-Fihri"], correctIndex: 1, explanation: "Ibn Al-Qayyim, le grand savant et élève d'Ibn Taymiyya, apparaît dans le manuscrit pour enseigner à Souhayl que le savoir demande de la patience. Un livre compris vaut mieux que dix livres survolés." },
    { question: "Qui est Hajar (هاجر) et quelle leçon enseigne-t-elle ?", options: ["Une reine d'Égypte", "L'épouse d'Ibrahim — elle a montré une confiance totale en Allah dans le désert", "Une savante de Fès", "La mère de Fatima Al-Fihri"], correctIndex: 1, explanation: "Hajar, l'épouse d'Ibrahim, a été laissée seule dans le désert de La Mecque avec son bébé Isma'il. Elle a couru entre Safa et Marwa avec une confiance totale en Allah. Elle enseigne à Souhayl que la patience est un acte de foi." },
    { question: "Quelle sourate coranique parle de la patience ?", options: ["Al-Fatiha", "Al-Asr — « Par le Temps ! L'homme est en perpétuelle perte, sauf ceux qui croient, font le bien, s'enjoignent mutuellement la vérité et s'enjoignent mutuellement la patience »", "Al-Ikhlas", "An-Nas"], correctIndex: 1, explanation: "La sourate Al-Asr est l'une des plus courtes mais des plus profondes. Elle mentionne quatre conditions pour ne pas être en perte, dont la patience. Sidi Mu'adh la cite souvent à Souhayl." },
  ],

  // ================================================================
  // TOME 5 — Al-Hikma (الحكمة) — La Sagesse
  // ================================================================

  t5c1: [
    { question: "Que signifie Al-Hikma (الحكمة) ?", options: ["La patience", "La sagesse / la compréhension profonde", "La vérité", "Le courage"], correctIndex: 1, explanation: "Al-Hikma est la sagesse — non pas le savoir intellectuel, mais la compréhension profonde du cœur. Le Coran dit : « Celui à qui Allah accorde la sagesse a reçu un bien immense. » (Al-Baqarah 2:269)" },
    { question: "Quel secret Grand-mère Aïcha révèle-t-elle à Souhayl ?", options: ["Une recette de cuisine secrète", "Le secret de la bibliothèque et sa mission de gardien", "Un trésor caché sous Fès", "Une formule magique"], correctIndex: 1, explanation: "Grand-mère Aïcha révèle à Souhayl le secret de famille : la bibliothèque magique a besoin d'un gardien et il est celui qui a été choisi. Ce secret va transformer le destin de Souhayl." },
    { question: "Qui Souhayl rencontre-t-il dans le dernier tome à travers le manuscrit ?", options: ["Un roi", "Le Prophète Muhammad ﷺ", "Un autre garçon", "Un djinn"], correctIndex: 1, explanation: "Dans le tome 5, Souhayl vit l'expérience la plus extraordinaire : à travers le manuscrit magique, il rencontre le Prophète Muhammad ﷺ dans une vision spirituelle. Cette rencontre illumine son cœur." },
    { question: "Que signifie « من يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا » ?", options: ["Celui qui est riche est chanceux", "Celui à qui Allah accorde la sagesse a reçu un bien immense", "La connaissance est la seule chose importante", "Les savants sont les meilleurs"], correctIndex: 1, explanation: "Ce verset de la sourate Al-Baqarah (2:269) est le fondement du tome 5. Sidi Mu'adh l'enseigne à Souhayl : la sagesse est le plus grand des cadeaux d'Allah, plus précieuse que l'or et les diamants." },
  ],
};
