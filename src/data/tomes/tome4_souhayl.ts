import type { Tome } from '@/types/story';

export const tome4_souhayl: Tome = {
  id: 'souhayl_tome4',
  number: 4,
  title: 'Le Pont de Lumière',
  titleAr: 'جسر النور',
  subtitle: "L'épreuve de la Patience et de l'Effort",
  description:
    "Le quatrième tome met Souhayl à l'épreuve. Quand il échoue un examen important à la madrasa, il doit apprendre la patience (Sabr) d'Ibn Al-Qayyim, la persévérance de la mère de Moïse (Hajar), et le courage de Bilal ibn Rabah. Souhayl découvre que les plus grandes victoires se remportent non pas par la force, mais par la constance.",
  theme: "As-Sabr wa al-Jihad — La Patience et l'Effort",
  coverImage: '/images/souhayl-tome4-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — La Défaite (الهزيمة)
    // ============================================================
    {
      id: 'st4c1',
      tomeId: 'souhayl_tome4',
      number: 1,
      title: 'La Défaite',
      titleAr: 'الهزيمة',
      scenes: [
        // --- st4c1s1: L'examen de la honte ---
        {
          id: 'st4c1s1',
          chapterId: 'st4c1',
          title: "L'examen de la honte",
          narration: `La salle de classe de la madrasa Bou Inania baignait dans une lumière blanche et crue qui tombait des fenêtres en claustra disposées haut sur les murs. Les murs étaient ornés de carreaux de zellige bleu et blanc formant des motifs géométriques complexes, et le sol, en marbre poli, reflétait les silhouettes des élèves assis en rangées serrées sur des tapis de prière repliés. L'odeur familière du bois de cèdre, de l'encens et du papier vieux se mélangeait à celle de la craie et de la nervosité des enfants.\n\nC'était le jour de l'examen de grammaire arabe — le plus important de l'année. Le professeur, un homme sévère au visage osseux et à la barbe grise taillée court, distribuait les feuilles d'examen une à une, dans un silence absolu que seule la respiration saccadée des élèves troublait. Chaque feuille qui se posait sur un pupitre sonnait comme un verdict.\n\nSouhayl prit la feuille entre ses doigts tremblants et lut la première question. Son cœur se serra. Les mots n'avaient aucun sens pour lui — ou plutôt, ils en avaient trop, et tous ces sens se brouillaient dans sa tête comme des lettres jetées dans un vent violent. Les règles de l'i'rab — l'analyse grammaticale — qu'il avait étudiées si patiemment pendant des semaines avec son père, s'étaient envolées, effacées par la peur qui lui gelait les pensées. Il regarda les autres élèves : certains griffonnaient déjà fiévreusement, leurs calames dansant sur le papier. Lui restait immobile, comme un oiseau paralysé devant un serpent.\n\nLes minutes passèrent, lentes et cruelles, comme du miel qui coulerait à l'envers. Souhayl essaya de se concentrer, de se rappeler les leçons de son père — « Le maf'oul bihi répond à la question "quoi" ou "qui", Souhayl, retiens bien cela » — mais les mots glissaient sur son esprit comme l'eau sur une pierre polie. Quand le professeur annonça la fin de l'épreuve en tapant trois coups secs sur son bureau, Souhayl regarda sa copie. Elle était presque vide. À peine quelques lignes griffonnées d'une écriture tremblante, des phrases incomplètes, des conclusions fausses. Une catastrophe.\n\nLe silence qui suivit fut pire que n'importe quel cri. Les élèves se levèrent en murmurant, comparant leurs réponses, souriant de soulagement ou soupirant de soulagement. Souhayl, lui, ne bougeait pas. Il fixait sa copie, sentant le rouge lui monter aux joues, puis au cou, puis aux oreilles, comme une marée de honte qui l'engloutissait tout entier. Autour de lui, il sentait les regards — pas toujours méchants, parfois curieux, souvent indifférents — mais chacun de ces regards était comme une aiguille dans sa peau. Il rangea sa copie dans son cartable sans un mot et sortit de la salle d'un pas mécanique, les jambes qui tremblaient sous lui.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Non... non, pas maintenant. Je les avais apprises, ces règles. Je les connaissais par cœur. Pourquoi mon esprit s'est-il arrêté ? Pourquoi ?",
              emotion: 'sad',
            },
            {
              characterId: 'nawfel',
              text: "Souhayl ! Attends-moi ! Comment ça s'est passé ? Moi, j'ai trouvé ça dur mais j'ai tout fini. Et toi ?",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "...Bien. Ça s'est passé... bien.",
              emotion: 'sad',
            },
          ],
          choices: [],
          nextSceneId: 'st4c1s2',
          background: 'classroom',
        },

        // --- st4c1s2: Le chemin du retour ---
        {
          id: 'st4c1s2',
          chapterId: 'st4c1',
          title: 'Le chemin du retour',
          narration: `Souhayl marchait dans les ruelles de la médina comme un fantôme. Les bruits habituels de Fès — les cris des marchands, le bêlement des chèvres, le claquement des babouches sur les pavés, le chant du muezzin — lui parvenaient comme à travers un mur d'eau, lointains et déformés, comme si le monde entier s'était séparé de lui et continuait de tourner sans qu'il en fasse partie. Il marchait sans but, les yeux fixés sur le sol, ses pieds suivant machinalement les lignes des galets noirs et blancs sans les voir vraiment.\n\nLa honte était un animal vorace qui dévorait son cœur de l'intérieur. Chaque pensée revenait à la même image — sa copie presque vide, les mots qu'il n'arrivait pas à écrire, le regard du professeur quand il ramassa sa feuille, ce regard à la fois déçu et surpris, car Souhayl était toujours l'un des meilleurs élèves de la classe. « Le fils du professeur Mehdi, et il n'a même pas réussi à terminer sa copie » — Souhayl imaginait les murmures, et chaque murmure imaginaire était un coup de poignard.\n\nIl s'arrêta au bord de la place Seffarine, là où les dinandiers frappaient le cuivre depuis des générations. Le son familier — « clang, clang, clang » — ne le réconforta pas cette fois. Au contraire, chaque coup de marteau lui rappelait les coups de la chance qui s'abattait sur lui : raté, raté, raté. Il s'assit sur le rebord d'une fontaine en pierre, ses mains tremblantes dans son giron, et pour la première fois depuis longtemps, il sentit les larmes venir. Pas les petites larmes discrètes qu'on essuie du revers de la main, mais des larmes chaudes et abondantes qui coulaient le long de ses joues et tombaient sur la pierre usée de la fontaine.\n\n« Pourquoi essayer ? » murmura-t-il entre ses dents. « Pourquoi étudier si dur si tout peut s'effondrer en une heure ? À quoi bon se lever tôt, apprendre par cœur, sacrifier ses jeux et ses moments de repos, si au final tout disparaît le jour de l'examen ? »\n\nUne voix douce et grave interrompit ses pensées sombres.\n\n— Parce que le savoir, Souhayl, n'est pas un bâtiment qu'on construit en un jour. C'est un arbre. Et les arbres les plus robustes sont ceux qui ont survécu aux tempêtes les plus violentes.\n\nSouhayl leva les yeux. Son père, Mehdi, se tenait debout devant lui, sa djellaba beige baignée dans la lumière dorée du soleil couchant. Il n'avait pas l'air en colère. Il n'avait pas l'air déçu. Il avait l'air... compréhensif. Compréhensif d'une manière qui fit pleurer Souhayl encore plus fort, car il sentit que son père comprenait exactement ce qu'il ressentait.`,
          dialogues: [
            {
              characterId: 'mehdi',
              text: "Mon fils, je sais ce qui s'est passé aujourd'hui. Le professeur Yusuf m'en a parlé. Mais écoute-moi bien : un examen n'est qu'un moment. Un instant dans une vie entière. Ce qui compte, ce n'est pas de tomber — tout le monde tombe — mais de se relever.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Mais Baba... j'ai tout oublié. Tout. Les règles de l'i'rab, les terminaisons, les cas... J'ai étudié pendant des semaines et au moment de l'examen, mon esprit était vide. Vide comme le désert. C'est comme si tout ce que j'avais appris n'existait plus.",
              emotion: 'sad',
            },
            {
              characterId: 'mehdi',
              text: "Ce que tu décris n'est pas l'oubli, Souhayl. C'est la peur. La peur a la capacité de verrouiller les portes de l'esprit. Mais les portes ne sont pas détruites — elles sont simplement fermées. Et il existe des clés pour les ouvrir. Viens, ce soir tu as besoin de rendre visite à un vieil ami.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st4c1s3',
          background: 'street',
        },

        // --- st4c1s3: Les paroles d'Ibn Al-Qayyim ---
        {
          id: 'st4c1s3',
          chapterId: 'st4c1',
          title: "Les paroles d'Ibn Al-Qayyim",
          narration: `La bibliothèque souterraine l'accueillit comme une mère accueille un enfant blessé — avec silence, douceur et lumière. Les lampes dorées brillaient d'une intensité plus chaude que d'habitude, comme si elles avaient senti la tristesse de Souhayl et voulaient le réconforter. Le murmure sacré — « اقرأ — Lis... » — résonnait doucement, non pas comme un ordre cette fois, mais comme une berceuse apaisante.\n\nSidi Mu'adh était assis à sa place habituelle, son tapis de prière impeccable, sa djellaba blanche immaculée, son livre ouvert sur ses genoux. Mais quelque chose avait changé dans son visage — les rides autour de ses yeux verts semblaient plus profondes, comme si une préoccupation ancienne l'avait visité pendant la nuit. Quand Souhayl entra, le vieillard leva les yeux et, au lieu de son sourire habituel, lui fit un signe de la main pour qu'il s'approche.\n\n— Assieds-toi, mon enfant, dit-il d'une voix dont la douceur même était un remède. Je sais pourquoi tu es triste. Les murs de cette bibliothèque ont entendu tes pleurs avant même que tu ne descends l'escalier. Ne sois pas honteux — les larmes sont un langage que Allah comprend mieux que n'importe quelle prière.\n\nSouhayl s'assit en tailleur devant le sage, les yeux baissés, ses mains serrées l'une contre l'autre dans son giron. Il ne voulait pas parler. Il voulait disparaître, fondre dans le sol de marbre, devenir invisible. Mais Sidi Mu'adh avait cette capacité extraordinaire de rendre le silence confortable, de le transformer en un espace où les cœurs pouvaient respirer.\n\n— Souhayl, dit le sage après un long moment, je vais te raconter l'histoire d'un homme qui a connu la souffrance comme tu n'imagines même pas. Un homme dont la vie entière fut une épreuve, et qui pourtant a écrit les plus beaux mots sur la patience que le monde islamique ait jamais connus. Son nom est Muhammad Ibn Abi Bakr, mais le monde le connaît sous le nom d'Ibn Al-Qayyim Al-Jawziyya. Il vivait à Damas, en Syrie, il y a sept siècles, et il était l'élève du plus grand savant de son époque, le Cheikh Ibn Taymiyyah.\n\nSidi Mu'adh se leva et marcha lentement vers l'une des étagères les plus élevées. Ses doigts effleurèrent les dos de plusieurs manuscrits avant de s'arrêter sur un volume relié en cuir brun, épais et lourd, dont les pages étaient jaunies par le temps mais intactes, comme si sept cents ans n'avaient pas réussi à les altérer. Il le posa devant Souhayl avec le respect qu'on accorde à un trésor inestimable.\n\n— Ce livre s'appelle « Madarij As-Salikin » — « Les degrés des voyageurs ». Ibn Al-Qayyim l'a écrit après avoir passé des années en prison avec son maître Ibn Taymiyyah. En prison, Souhayl. Dans une cellule froide, sombre, sans livres, sans élèves, sans rien. Et c'est là, dans l'obscurité la plus totale, qu'il a écrit les mots les plus lumineux sur la patience.\n\nSidi Mu'adh ouvrit le livre et lut d'une voix qui faisait vibrer l'air comme une corde de oud :\n\n— « La patience est de trois sortes : la patience dans l'obéissance à Allah, la patience contre la désobéissance à Allah, et la patience face au décret d'Allah. » — الصبر ثلاثة : صبر على الطاعة، وصبر عن المعصية، وصبر على البلاء. Et il a écrit aussi ceci : « Ne maudis jamais la douleur, car elle est le creuset dans lequel Allah forge les âmes les plus nobles. » — لا تلعن الألم فإنه ينقي النفوس.\n\nSouhayl leva les yeux vers Sidi Mu'adh. Les larmes s'étaient arrêtées. Quelque chose dans les mots d'Ibn Al-Qayyim avait touché une corde profonde dans son cœur — pas la corde de la tristesse, mais une corde plus forte, plus ancienne, une corde qu'il n'avait jamais entendue résonner auparavant.\n\n— Ibn Al-Qayyim a passé des années en prison, continua le sage, et il n'a jamais maudit ses geôliers. Il n'a jamais demandé pourquoi Allah lui faisait cela. Il a simplement continué à écrire, à enseigner à ceux qui partageaient sa cellule, et à patienter. Il disait : « Allah ne prive pas Son serviteur d'une chose sans lui donner en échange quelque chose de meilleur. » — ما منع الله عبداً شيئاً إلا أعطاه خيراً منه.\n\n— Mais moi, murmura Souhayl, ce n'est qu'un examen... Ce n'est rien comparé à la prison...\n\n— Et c'est pour cela même que tu dois apprendre la patience maintenant, dit Sidi Mu'adh en posant sa main ridée sur l'épaule du garçon. La patience ne s'apprend pas dans les grandes épreuves — elle se cultive dans les petites. Si tu apprends à patienter face à un examen raté, tu sauras patienter face aux tempêtes plus grandes que la vie te réserve. Le sabr — la patience — n'est pas de ne pas souffrir. C'est de continuer à avancer malgré la souffrance, en sachant qu'Allah ne teste que ceux qu'Il aime.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Souhayl, les larmes sont un langage qu'Allah comprend mieux que n'importe quelle prière. Mais sache ceci : la patience n'est pas de ne pas souffrir — c'est de continuer à avancer malgré la souffrance, en sachant qu'Allah ne teste que ceux qu'Il aime.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Ibn Al-Qayyim... en prison... et il écrivait quand même ? Il trouvait la force d'écrire des mots si beaux dans un endroit si sombre ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Parce qu'il avait compris quelque chose de fondamental, mon enfant. L'épreuve n'est pas une punition — c'est une invitation à grandir. Le diamant le plus pur est celui qui a supporté la plus grande pression. Et toi, Souhayl, tu es un diamant en devenir.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st4c1s4',
          background: 'inner_world',
        },

        // --- st4c1s4: Affronter ou se cacher ---
        {
          id: 'st4c1s4',
          chapterId: 'st4c1',
          title: 'Affronter ou se cacher',
          narration: `Souhayl remonta l'escalier de la bibliothèque avec un cœur différent de celui qu'il avait en descendant. La tristesse n'avait pas disparu — elle était encore là, lourde et présente, comme un nuage d'orage au-dessus de sa tête. Mais quelque chose d'autre avait germé à côté d'elle, quelque chose de fin et de fragile comme une pousse de menthe qui sort de terre après la pluie : une détermination encore floue, un courage encore hésitant, mais une volonté de ne pas se laisser abattre.\n\nLes ruelles de la médina, baignées par la lumière douce du crépuscule, lui semblaient différentes ce soir. Les mêmes murs ocre, les mêmes portes en bois de cèdre, les mêmes fenêtres en claustra — mais Souhayl les regardait avec des yeux qui venaient de pleurer, et les larmes, dit-on, lavent le regard de ses impuretés. Il remarqua des détails qu'il n'avait jamais vus : un chat gris assis sur un mur, ses yeux jaunes brillant dans la pénombre ; une vieille femme qui arrosait des géraniums rouges sur son balcon, ses lèvres remuant dans une prière silencieuse ; un enfant plus petit que lui, assis sur le seuil d'une boutique fermée, qui récitait le Coran à voix haute dans la soirée tranquille.\n\nLe monde continuait. Les gens continuaient. Et si eux pouvaient continuer, pourquoi pas lui ?\n\nEn arrivant chez lui, Souhayl entendit les voix de sa famille à travers la porte. Wassim jouait avec ses petites voitures sur le carrelage du couloir — « vroum, vroum, crash ! » — et Nawfel discutait avec sa mère dans la cuisine. Les arômes d'un tajine de légumes aux pruneaux et amandes montaient dans l'escalier, réconfortants et familiers.\n\nC'est là, la main posée sur la poignée de la porte, que Souhayl se retrouva face à un choix qui lui brûlait les doigts. Il pouvait entrer, s'asseoir à table comme si de rien n'était, mentir sur son examen et cacher sa défaite — comme il l'avait déjà fait avec Nawfel dans la rue. Ou il pouvait ouvrir cette porte en étant honnête, dire la vérité à ses parents, affronter leur regard et son propre échec, et accepter que la vulnérabilité n'est pas une faiblesse.\n\nLes mots de Sidi Mu'adh résonnaient dans sa mémoire : « La patience commence par l'honnêteté envers soi-même. Celui qui fuit la vérité ne peut pas affronter l'épreuve, car il ne sait même pas quelle est son épreuve. »\n\nSouhayl serra la poignée de la porte. Sa main tremblait encore un peu. Il prit une grande inspiration, sentit l'air tiède du soir emplir ses poumons, et poussa la porte.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Je peux mentir... Personne ne le saurait, à part le professeur. Mais Sidi Mu'adh a dit que la patience commence par l'honnêteté. Si je mens, je ne ferai que fuir. Et je ne veux plus fuir.",
              emotion: 'determined',
            },
            {
              characterId: 'aziza',
              text: "Souhayl ! Tu es là enfin ! Viens, le dîner est prêt. Wassim a failli manger ton pain en croyant que c'était le sien.",
              emotion: 'happy',
            },
          ],
          choices: [
            {
              id: 'st4c1s4_c1',
              text: "Avouer la vérité à sa famille — affronter sa défaite avec courage",
              nextSceneId: 'st4c1s5a',
              badgeId: 'sabr_ilm',
              isCorrect: true,
            },
            {
              id: 'st4c1s4_c2',
              text: "Garder le silence et se réfugier dans sa chambre sans rien dire",
              nextSceneId: 'st4c1s5b',
            },
          ],
          background: 'home',
        },

        // --- st4c1s5a: La force de la vérité ---
        {
          id: 'st4c1s5a',
          chapterId: 'st4c1',
          title: 'La force de la vérité',
          narration: `Souhayl s'assit à la table familiale, entre Nawfel et Wassim, face à ses parents. Le tajine fumait au centre de la table, dans ce grand plat en terre cuite émaillée de bleu et de blanc que sa mère avait reçu en dot de sa propre mère, et les pains ronds et dorés étaient disposés sur une planche en bois. Tout était parfait, chaleureux, lumineux — et Souhayl sentait que cette perfection même rendait sa confession plus difficile.\n\nIl prit son pain, en détacha un morceau, et le trempa dans la sauce du tajine sans y goûter. Son estomac était trop noué pour manger. Nawfel, à sa gauche, parlait de son match de football avec les enfants du quartier, et Wassim, à sa droite, essayait de construire une tour avec ses morceaux de pain — ce que leur mère interrompit avec un regard.\n\n— Baba, dit Souhayl d'une voix qu'il força d'être calme. Maman. J'ai quelque chose à vous dire.\n\nLe silence tomba sur la table comme un voile. Nawfel arrêta de parler. Wassim abandonna sa tour de pain. Aziza posa sa cuillère. Mehdi leva les yeux de son assiette et regarda son fils avec cette attention totale qu'il réservait aux moments importants.\n\n— J'ai raté mon examen de grammaire arabe, dit Souhayl. Pas un peu raté. Complètement raté. Ma copie était presque vide. J'ai oublié tout ce que vous m'aviez appris, Baba. Tout. Les règles de l'i'rab, les terminaisons, les cas grammaticaux... J'ai regardé la feuille et mon esprit était blanc. Comme une page vierge. Comme un désert.\n\nUn silence s'installa. Souhayl baissa les yeux, attendant la réprimande, la déception, les mots durs. Il méritait cela, se disait-il. Il avait échoué. Il avait déçu son père qui était professeur, déçu sa mère qui comptait sur lui, déçu ses frères qui le regardaient comme un exemple.\n\nMais ce qui vint n'était ni une réprimande ni une déception. Ce fut un rire doux — le rire de Mehdi, un rire qui sonnait comme de l'eau claire sur des cailloux.\n\n— Mon fils, dit Mehdi en se penchant vers lui, sais-tu ce que je vois en ce moment ? Je ne vois pas un garçon qui a échoué. Je vois un garçon qui a le courage de dire la vérité. Et crois-moi, Souhayl, le courage de dire « j'ai échoué » est bien plus rare — et bien plus précieux — que le talent de réussir du premier coup. Le Prophète ﷺ a dit : « Le croyant n'est pas mordu deux fois par le même serpent. » Tu as appris quelque chose aujourd'hui. Ce n'est pas un échec — c'est une leçon.\n\nAziza posa sa main sur la joue de Souhayl, et ses yeux — les mêmes yeux bruns et profonds que les siens — brillaient de fierté.\n\n— Je suis fière de toi, mon grand. Pas de tes notes — de ton honnêteté. Un cœur sincère vaut mieux qu'une copie parfaite.\n\nWassim, qui n'avait pas tout compris, leva son petit visage rond et déclara avec la logique irréfutable des enfants de six ans :\n\n— Moi non plus je n'aime pas les examens. Est-ce que ça veut dire que je suis courageux aussi ?\n\nTout le monde rit — et pour la première fois depuis l'examen, Souhayl rit aussi. Un vrai rire, qui venait du cœur, qui libérait quelque chose qui était resté coincé dans sa poitrine depuis le matin. Et dans ce rire, il sentit la honte s'envoler, comme la poussière que le vent emporte d'un vieux tapis qu'on secoue.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "J'ai raté mon examen, Baba. Complètement. Mon esprit était vide pendant toute l'épreuve. Je suis désolé. Je vous ai déçus.",
              emotion: 'sad',
            },
            {
              characterId: 'mehdi',
              text: "Tu ne nous as pas déçus, Souhayl. Le courage de dire la vérité vaut plus que mille examens réussis. Le Prophète ﷺ a dit : « Le croyant n'est pas mordu deux fois par le même serpent. » Tu as appris ta leçon. Maintenant, tu vas te relever.",
              emotion: 'wise',
            },
            {
              characterId: 'aziza',
              text: "Je suis fière de ton honnêteté, mon grand. Un cœur sincère vaut mieux qu'une copie parfaite. Allah voit ta sincérité, et Il te récompensera.",
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: "Moi aussi je suis fier de toi, Souhayl ! Même si je ne comprends pas trop ce qui s'est passé. Tu veux qu'on joue aux petites voitures pour fêter ?",
              emotion: 'happy',
            },
          ],
          choices: [],
          background: 'home',
          isEnding: true,
          earnedBadgeId: 'sabr_ilm',
          lesson: {
            title: "As-Sabr fi al-'Ilm — La patience dans l'apprentissage",
            content:
              "Souhayl a appris que l'échec n'est pas la fin du chemin — c'est un virage. Ibn Al-Qayyim, l'un des plus grands savants de l'Islam, a écrit ses œuvres les plus profondes alors qu'il était emprisonné. Il enseignait que la patience (Sabr) est de trois sortes : la patience dans l'obéissance à Allah, la patience contre la désobéissance, et la patience face aux épreuves d'Allah. Souhayl a choisi d'affronter sa défaite avec honnêteté et courage, découvrant que le sabr ne signifie pas ne pas souffrir, mais continuer à avancer malgré la souffrance, en faisant confiance à Allah.",
            quote: 'إنما الصبر عند الصدمة الأولى',
            source: 'Hadith — Sahih al-Bukhari et Muslim',
          },
        },

        // --- st4c1s5b: Le poids du silence ---
        {
          id: 'st4c1s5b',
          chapterId: 'st4c1',
          title: 'Le poids du silence',
          narration: `Souhayl traversa le salon sans un mot et monta l'escalier jusqu'à sa chambre. Aziza leva les yeux de son tajine, un regard interrogateur dans les yeux, mais Souhayl ne lui laissa pas le temps de parler. Il ferma sa porte derrière lui et s'assit sur son lit, le dos contre le mur, les genoux ramenés contre sa poitrine.\n\nSa chambre était petite mais ordonnée — une bibliothèque en bois d'olivier remplie de livres, un tapis de prière dans le coin près de la fenêtre, un bureau sur lequel étaient posés ses cahiers et ses calames. La lumière de la lampe de poche qu'il avait allumée projetait des ombres longues sur les murs, et Souhayl sentit que ces ombres ressemblaient à ses pensées — sombres, étirées, déformées.\n\nIl avait choisi de se taire. Et immédiatement, il le regretta. Le silence ne le soulageait pas — il l'étouffait. Chaque seconde passée sans parler de son échec était une seconde de plus où le mensonge pesait sur lui, l'alourdissait, l'enfermait dans une prison invisible. « Baba va le savoir de toute façon, pensa-t-il. Le professeur lui dira. Et quand il le saura, il sera encore plus déçu — non pas de ma note, mais de mon silence. »\n\nNawfel frappa doucement à sa porte.\n\n— Souhayl ? Tu veux dîner ? Maman a fait le tajine aux pruneaux, ton préféré.\n\nSouhayl ouvrit la bouche pour dire « non merci » et referma sa porte. Mais quelque chose — un instinct, une mémoire, les paroles de Sidi Mu'adh — l'arrêta. « La patience commence par l'honnêteté envers soi-même. »\n\nIl ouvrit la porte. Nawfel était là, son visage d'enfant de sept ans illuminé par la lumière dorée du couloir.\n\n— Nawfel, dit Souhayl d'une voix rauque, j'ai raté mon examen aujourd'hui. L'examen de grammaire arabe. Je n'ai presque rien écrit sur ma copie.\n\nNawfel le regarda un long moment, sans dire un mot. Puis il fit quelque chose que Souhayl n'attendait pas — il lui fit un câlin. Un câlin simple, silencieux, chaleureux, comme seuls les enfants savent les faire.\n\n— Ce n'est pas grave, frérot, murmura Nawfel. Moi, au foot, j'ai raté trois buts hier. Trois ! Et aujourd'hui, j'en ai marqué deux. Tu vois ? On rate, et après on réussit. C'est comme ça, la vie.\n\nLes mots de son petit frère — si simples, si directs, si dénués de toute complexité — touchèrent Souhayl plus profondément que n'importe quel discours savant. Parce que Nawfel ne parlait pas de patience, de sabr, de philosophie islamique. Il parlait de foot. Et dans ce football imaginaire, les règles étaient les mêmes : on rate, on tombe, on se relève, on recommence. Toujours.\n\nSouhayl descendit l'escalier avec Nawfel et s'assit à la table. Il regarda son père droit dans les yeux et dit :\n\n— Baba, j'ai raté mon examen. Je veux que tu me réexpliques les règles de l'i'rab. Ce soir, si tu veux. Je ne veux plus fuir.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Frérot, ce n'est pas grave. Au foot, j'ai raté trois buts hier. Et aujourd'hui, j'en ai marqué deux. On rate, et après on réussit. C'est comme ça, la vie.",
              emotion: 'neutral',
            },
            {
              characterId: 'souhayl',
              text: "Merci, Nawfel... Tu sais, tu es plus sage que tu ne le crois. Baba, j'ai raté mon examen. Je veux que tu m'aides à me préparer pour le rattrapage. Ce soir, s'il te plaît.",
              emotion: 'determined',
            },
            {
              characterId: 'mehdi',
              text: "Bien sûr, mon fils. Après la prière d'Isha, nous nous installerons dans le salon et nous travaillerons ensemble. Tu as eu le courage de parler — le reste, nous le ferons ensemble.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st4c1s5a',
          background: 'home',
        },
      ],
      lessons: [],
    },

  ],
};
