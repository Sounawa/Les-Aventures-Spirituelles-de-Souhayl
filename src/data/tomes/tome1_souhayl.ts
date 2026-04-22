import type { Tome, Scene, Dialogue, Choice, Lesson } from '@/types/story';

export const tome1_souhayl: Tome = {
  id: 'souhayl_tome1',
  number: 1,
  title: 'La Bibliothèque Perdue',
  titleAr: 'المكتبة المفقودة',
  subtitle: 'Le chemin du Savoir et de la Sagesse',
  description:
    "Au cœur de la millénaire médina de Fès, un garçon de neuf ans nommé Souhayl Benali découvre une entrée cachée vers une bibliothèque engloutie sous la mosquée Qarawiyyin. Guidé par le vieux sage Sidi Mu'adh, il apprend que la quête du savoir est un devoir sacré en Islam, que chaque livre est un trésor et que la vraie sagesse commence par le respect de ceux qui enseignent. Entre les récits d'Imam Malik et de Fatima Al-Fihri, Souhayl entame un voyage extraordinaire à travers la mémoire du monde islamique.",
  theme: "Al-'Ilm wa al-Hikma — Le Savoir et la Sagesse",
  coverImage: '/images/souhayl-tome1-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — Le Mur qui Parle (الجدار الذي يتكلم)
    // ============================================================
    {
      id: 'st1c1',
      tomeId: 'souhayl_tome1',
      number: 1,
      title: 'Le Mur qui Parle',
      titleAr: 'الجدار الذي يتكلم',
      scenes: [
        // --- st1c1s1: Un matin à Fès ---
        {
          id: 'st1c1s1',
          chapterId: 'st1c1',
          title: 'Un matin à Fès',
          narration: `Le soleil de Fès se levait doucement au-dessus des toits de terre cuite, peignant les murailles ocre de la médina d'une lumière dorée et tiède qui ressemblait à du miel versé sur du sable fin. Les ruelles étroites, si étroites que deux personnes pouvaient à peine marcher de front, s'animaient peu à peu du bruit de la ville qui s'éveillait. Des marchands ouvraient leurs boutiques en poussant de lourdes portes en bois de cèdre, des ânes chargés de paniers d'oranges et de grenades avançaient d'un pas prudent sur les pavés usés par des siècles de passages, et des femmes voilées de blanc se rendaient à la source publique, leurs jarres en poterie rouge balancées sur la hanche.\n\nSouhayl Benali marchait devant son père sur le chemin de la madrasa, son cartable en toile bleue battant doucement contre son dos à chaque pas. Il avait neuf ans, des cheveux noirs et bouclés qui s'échappaient de sous un petit bonnet blanc, et des yeux d'un brun profond qui semblaient toujours observer le monde avec une curiosité insatiable. C'était un garçon silencieux, de ceux qui préfèrent écouter que parler, et dont le regard, même enfantin, portait déjà une gravité inhabituelle.\n\nSon père, Mehdi Benali, était professeur à la madrasa Bou Inania, où il enseignait la grammaire arabe et les fondements du fiqh aux enfants de la médina. C'était un homme au visage rectangulaire, à la barbe taillée avec soin et au sourire indulgent. Il portait une djellaba beige et des babouches en cuir brun qui claquaient régulièrement sur les pavés. Ses mains, larges et calleuses, avaient l'habitude de tenir la craie et les livres, et Souhayl les trouvait belles — belles comme les mains de ceux qui travaillent avec patience et amour.\n\nEn passant devant la grande place Seffarine, où les dinandiers frappaient le cuivre depuis des générations, Souhayl s'arrêta un instant. Le son des marteaux sur le métal — « clang, clang, clang » — résonnait dans la morning comme le battement d'un cœur géant. Son père posa sa main sur son épaule.\n\n— Écoute, Souhayl. Tu entends ce son ? Chaque coup de marteau est comme une lettre d'un mot, et chaque mot est comme une brique dans un mur. C'est ainsi que l'on construit le savoir — un coup à la fois, une lettre à la fois, avec patience et constance.\n\nSouhayl hocha la tête, mais ses yeux étaient ailleurs. Depuis quelques jours, quelque chose d'étrange se produisait chaque fois qu'il passait près de la Qarawiyyin — la plus ancienne université du monde encore en activité. Il sentait une vibration, un frémissement dans l'air, comme si les pierres anciennes elles-mêmes essayaient de lui murmurer un secret.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: 'Baba, est-ce que tu as déjà ressenti quelque chose de... bizarre... près de la Qarawiyyin ? Comme une voix qui viendrait des murs ?',
              emotion: 'neutral',
            },
            {
              characterId: 'mehdi',
              text: "Bizarre, non. Mais sacré, oui. La Qarawiyyin n'est pas qu'un bâtiment, mon fils. C'est un lieu béni depuis plus de mille ans. Les prières, les études, les larmes des savants — tout cela a imprégné ces pierres. Si tu sens quelque chose, c'est peut-être qu'Allah veut te montrer quelque chose. Reste attentif.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st1c1s2',
          background: 'street',
        },

        // --- st1c1s2: La porte mystérieuse ---
        {
          id: 'st1c1s2',
          chapterId: 'st1c1',
          title: 'La porte mystérieuse',
          narration: `Après les cours du matin, Souhayl prit un chemin détourné pour rentrer chez lui. Au lieu de suivre la rue principale qui menait au quartier des tanneurs, il tourna dans une ruelle étroite qu'il affectionnait, bordée de murs en torchis couverts de mousse verte et surplombée de fenêtres en bois sculpté d'où pendaient des cages à oiseaux. Le sol était pavé de galets noirs et blancs formant des motifs géométriques complexes, et Souhayl aimait marcher en suivant les lignes avec ses pieds, comme s'il résolvait un puzzle géant.\n\nIl arriva devant le mur ouest de la Qarawiyyin — un mur immense, haut de plusieurs mètres, construit en pierre de taille et en briques roses vieillies par le temps. Des graffiti anciens en arabe, en calligraphie coufique, étaient gravés dans la pierre, et Souhayl s'arrêta pour les lire, comme il le faisait souvent. La plupart étaient des invocations — « Bismillah », « Allahoumma salli ala Muhammad », « Ya 'Alim, arfa'ni 'ilman » — Ô Toi qui sais, élève-moi en savoir.\n\nC'est alors qu'il la vit. À gauche du mur, à moitié cachée par un pot de bégonias rouges et une pile de planches en bois, une petite porte qu'il n'avait jamais remarquée. Elle était en fer forgé, noire, recouverte de rouille, et si étroite qu'un adulte aurait dû se pencher pour passer. Son heurtoir avait la forme d'un livre ouvert, et Souhayl sentit son cœur accélérer en le regardant.\n\nMais ce n'était pas la porte elle-même qui le troubla le plus. C'était ce qu'il entendait. Ou plutôt, ce qu'il croyait entendre. Un murmure, presque imperceptible, qui semblait venir de derrière la porte. Non pas une voix humaine, mais quelque chose de plus ancien, de plus profond — comme le bruit d'un fleuve souterrain, ou le frémissement de milliers de pages que le vent feuillette dans un immense livre. Et à travers le murmure, des mots se détachaient, flous mais distincts : « اقرأ — Lis... اقرأ — Lis... »\n\nSouhayl posa sa main sur la porte. Le fer était froid sous ses doigts, mais il sentit aussi une chaleur très lointaine, comme si un feu brûlait de l'autre côté. Son cœur battait si fort qu'il l'entendait dans ses tempes. Il devait prendre une décision.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "« Iqra »... Lis... Qui me dit de lire ? Cette porte... personne ne l'a jamais vue ?",
              emotion: 'surprised',
            },
          ],
          choices: [
            {
              id: 'st1c1s2_c1',
              text: "Tirer la porte et entrer — le savoir appelle",
              nextSceneId: 'st1c1s3a',
              badgeId: 'ilm',
              isCorrect: true,
            },
            {
              id: 'st1c1s2_c2',
              text: "Observer la porte plus attentivement avant de décider",
              nextSceneId: 'st1c1s3b',
              badgeId: 'sabr_ilm',
              isCorrect: true,
            },
            {
              id: 'st1c1s2_c3',
              text: "Partir et revenir plus tard avec son père",
              nextSceneId: 'st1c1s3c',
            },
          ],
          background: 'street',
        },

        // --- st1c1s3a: L'appel du savoir ---
        {
          id: 'st1c1s3a',
          chapterId: 'st1c1',
          title: "L'appel du savoir",
          narration: `Souhayl tira la porte. Le fer grinça, rouillé par des siècles de silence, et lentement, difficilement, l'ouverture se fit. Un courant d'air chaud et parfumé s'en échappa — un parfum que Souhayl n'avait jamais senti auparavant, un mélange de parchemin vieilli, d'encens, de cèdre et de quelque chose d'autre qu'il ne pouvait pas nommer mais qui lui fit penser à l'intérieur d'une mosquée au moment de la prière du Fajr, quand le monde entier est plongé dans la paix.\n\nUn escalier descendant apparaît dans la pénombre, taillé dans la roche et pavé de marbre blanc veiné de bleu. Des lampes à huile, accrochées au mur à intervalles réguliers, brillaient d'une lumière dorée qui n'avait pas besoin de flamme — elles irradiaient, comme des lanternes de lumière pure. Souhayl descendit un pas, puis deux, puis trois. Chaque pas l'emmenait plus profondément sous la terre, et avec chaque pas, le murmure grandissait, devenant plus clair, plus distinct.\n\n« اقرأ باسم ربك الذي خلق — Lis au nom de ton Seigneur qui a créé » résonnait le murmure, et Souhayl reconnut avec un frisson les premiers mots de la révélation coranique. Ce n'était pas une voix humaine qui parlait — c'étaient les pierres elles-mêmes, les murs, l'air, tout cet endroit souterrain qui récitait les versets sacrés avec la voix grave et douce de l'éternité.\n\nAu bas de l'escalier, Souhayl déboucha dans une salle circulaire d'une beauté à couper le souffle. Des colonnes de marbre soutenaient un plafond voûté couvert de mosaïques bleues et dorées représentant des étoiles et des constellations. Au centre de la salle, un grand bassin octogonal reflétait la lumière des lampes, et autour du bassin, disposés sur des étagères en bois de cèdre qui montaient jusqu'au plafond, des milliers de livres — des manuscrits anciens reliés en cuir, en soie, en parchemin — dormaient dans un silence sacré.\n\nEt au milieu de tout cela, assis sur un tapis de prière, le dos droit, un livre ouvert sur les genoux, un vieillard attendait.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: 'Subhanallah... C\'est... c\'est une bibliothèque ! Souterraine ! Sous la Qarawiyyin !',
              emotion: 'surprised',
            },
          ],
          choices: [],
          nextSceneId: 'st1c1s4',
          background: 'inner_world',
          earnedBadgeId: 'ilm',
          lesson: {
            title: "Talab al-'Ilm — La quête du savoir",
            content:
              "En Islam, la quête du savoir est un devoir sacré. Le Prophète ﷺ a dit : « Quiconque emprunte un chemin à la recherche du savoir, Allah lui facilite un chemin vers le Paradis. » Souhayl a entendu le premier mot de la révélation — « Iqra » (Lis) — et a répondu à l'appel. Chaque pas vers le savoir est un pas vers Allah.",
            quote: 'اقرأ باسم ربك الذي خلق',
            source: 'Coran, Sourate Al-Alaq (96:1)',
          },
        },

        // --- st1c1s3b: La porte des patient ---
        {
          id: 'st1c1s3b',
          chapterId: 'st1c1',
          title: 'La porte des patients',
          narration: `Souhayl ne toucha pas à la porte. Il s'assit sur le sol pavé de galets, les jambes croisées, exactement comme il le faisait pendant les prières, et il observa. Il observa le heurtoir en forme de livre ouvert, les motifs de la ferronnerie — des entrelacs arabesques, des fleurs de lys stylisées, une calligraphie à moitié effacée par la rouille qu'il ne pouvait pas déchiffrer. Il observa les murs autour de la porte, cherchant des indices, des marques, quelque chose qui pourrait lui expliquer pourquoi cette porte semblait l'appeler.\n\nLa patience de Souhayl fut récompensée. Au bout de quelques minutes, il remarqua que la lumière du soleil, en frappant le mur à un angle précis, éclairait une inscription gravée dans la pierre au-dessus de la porte. Les lettres arabes, fines et délicates, étaient presque invisibles dans la lumière directe, mais dans ce rayon oblique de fin de matinée, elles brillaient comme de l'or liquide. Souhayl se rapprocha et lut, les lèvres remuant silencieusement :\n\n« من سلك طريقا يلتمس فيه علما سهل الله له طريقا إلى الجنة — Quiconque emprunte un chemin à la recherche du savoir, Allah lui facilite un chemin vers le Paradis. »\n\nSon cœur s'arrêta un instant. C'était un hadith — un hadith qu'il avait appris à la madrasa avec son père. Et en dessous, une deuxième ligne, plus petite : « Cette porte ne s'ouvre que pour celui qui cherche avec sincérité. »\n\nSouhayl posa sa main sur la poitrine, sentant son cœur battre sous sa paume. Puis, avec respect, il tira la porte. Elle s'ouvrit sans effort cette fois, sans grincement, comme si elle avait attendu qu'il soit prêt. L'escalier descendant s'ouvrit devant lui, éclairé par des lampes dorées qui brillaient sans flamme.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "« Celui qui cherche avec sincérité... » Baba m'a toujours dit que le savoir ne se donne qu'à ceux qui le cherchent vraiment. Je vais descendre.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 'st1c1s4',
          background: 'inner_world',
          earnedBadgeId: 'sabr_ilm',
          lesson: {
            title: 'Sabr fi Talab al-Ilm — La patience dans la quête du savoir',
            content:
              "Le savoir ne se révèle pas à celui qui se précipite. Souhayl a choisi d'observer avant d'agir, et sa patience lui a permis de découvrir l'inscription sacrée au-dessus de la porte. Le Prophète ﷺ a enseigné que celui qui est patient dans l'apprentissage recevra la meilleure des récompenses. L'observation attentive et la réflexion sont les premières étapes du chemin vers le savoir.",
            quote: 'إنما العلم بالتعلم وإنما الحلم بالتحلم',
            source: 'Hadith — Sunan Ad-Darimi',
          },
        },

        // --- st1c1s3c: Le chemin détourné ---
        {
          id: 'st1c1s3c',
          chapterId: 'st1c1',
          title: 'Le chemin détourné',
          narration: `Souhayl recula d'un pas. Son cœur lui disait d'entrer, mais sa raison, celle d'un garçon de neuf ans élevé dans le respect des règles, lui commandait de ne pas. On ne pénètre pas dans des endroits inconnus tout seul. On ne force pas des portes mystérieuses. On demande d'abord. C'est ce que sa mère lui avait toujours enseigné : « La sagesse commence par savoir quand ne pas agir. »\n\nIl s'éloigna de la porte en courant, ses babouches claquant sur les pavés de la ruelle, et ne s'arrêta que lorsqu'il atteignit le bord de la place Seffarine, haletant, le cœur battant. Le son des dinandiers le calma — « clang, clang, clang » — et Souhayl reprit son souffle en regardant les artisans marteler le cuivre avec une régularité parfaite. Chaque coup était identique au précédent. Patience. Précision. Répétition. C'était comme ça qu'on forgeait le savoir — pas en se précipitant, mais en frappant avec méthode.\n\nMais le murmure ne le quitta pas. Pendant toute la journée — à la madrasa, à la maison, au dîner avec sa famille — Souhayl sentit les mots « اقرأ — Lis » résonner dans sa poitrine comme un écho lointain mais insistant. Il ne dormit pas bien cette nuit-là, se tournant et se retournant dans son lit, et quand il ferma les yeux, il voyait la petite porte de fer forgé et son heurtoir en forme de livre ouvert.\n\nLe lendemain matin, il en parla à son père pendant le petit-déjeuner. Mehdi posa son thé et regarda son fils avec une attention soudaine et intense qui coupa court à tout le reste de la conversation dans la pièce. Aziza, la mère, arrêta de verser le lait. Même Wassim, le petit frère de six ans, cessa de jouer avec ses petites voitures pour lever les yeux vers son grand frère. Nawfel, l'autre frère de Souhayl, âgé de huit ans, arrêta lui aussi de dessiner sur son cahier, intrigué par la gravité soudaine de la conversation.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Baba, j'ai trouvé une porte près de la Qarawiyyin. C'est bizarre... j'entends des mots qui viennent de derrière. Des mots en arabe. Comme « Iqra ». Je crois qu'il y a quelque chose là-dessous.",
              emotion: 'neutral',
            },
            {
              characterId: 'mehdi',
              text: "Souhayl... c'est un signe important. Ce que tu décris, cette porte, ce murmure... Mon fils, tu as peut-être été choisi pour quelque chose de grand. Mais la prudence est aussi une vertu. Nous irons ensemble.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st1c1s4',
          background: 'home',
        },

        // --- st1c1s4: Sidi Mu'adh ---
        {
          id: 'st1c1s4',
          chapterId: 'st1c1',
          title: "Sidi Mu'adh",
          narration: `Le vieillard assis au centre de la bibliothèque souterraine leva les yeux de son livre. Son visage était un paysage de rides profondes, comme les sillons d'un champ labouré par des générations de laboureurs. Sa barbe, blanche comme la laine des moutons de l'Atlas, tombait sur sa poitrine et reposait sur une djellaba blanche d'une propreté immaculée malgré l'âge apparent des lieux. Mais ce qui frappa le plus Souhayl, ce furent ses yeux — des yeux d'un vert extraordinaire, d'un vert qui n'existait pas dans la nature, un vert entre l'émeraude et la lumière, comme si on avait capturé la couleur du premier printemps du monde et qu'on l'avait enfermée dans deux prunelles.\n\nLe vieillard sourit, et son sourire illumina la salle entière. Pas une illumination physique — les lampes ne changèrent pas d'intensité — mais une illumination du cœur, une chaleur qui envahit Souhayl de la tête aux pieds et qui le fit se sentir, pour la première fois de sa vie, parfaitement à sa place.\n\n— Bienvenue, Souhayl Benali, dit le vieillard d'une voix douce et claire, comme l'eau d'une source qui coule sur des galets lisses. Je suis Sidi Mu'adh. Je t'attendais. Assieds-toi, mon enfant. Tu as beaucoup de questions, et le temps, ici, est un ami.\n\nSouhayl s'assit en tailleur devant le vieillard, exactement comme il le faisait à la madrasa. Ses yeux allaient du visage de Sidi Mu'adh aux milliers de livres qui l'entouraient, et il sentait que chaque livre, chaque manuscrit, chaque page dans cette bibliothèque contenait un univers entier de savoir. Son cœur débordait de questions, mais il se tut, attendant que le sage parle. C'était ce que son père lui avait appris : le savoir commence par le silence.\n\n— Tu as entendu l'appel, continua Sidi Mu'adh en refermant délicatement son livre. L'appel du savoir. C'est le premier signe, Souhayl. Le premier des nombreux signes qui t'accompagneront sur le chemin de la connaissance. Sache que cette bibliothèque n'est pas une bibliothèque ordinaire. Elle existe depuis des siècles, cachée sous la Qarawiyyin, protégée par les prières des savants et la baraka de ceux qui ont consacré leur vie au savoir. Elle ne se révèle qu'à ceux dont le cœur est pur et dont l'intention est sincère.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Bienvenue, Souhayl Benali. Je t'attendais. Tu as entendu l'appel du savoir — le premier signe que ton cœur est prêt pour le voyage le plus beau qui soit : celui de la connaissance.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Sidi Mu'adh... comment savez-vous mon nom ? Et cette bibliothèque... elle est sous la Qarawiyyin ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Les pierres de Fès parlent à ceux qui savent écouter. Ton nom m'a été murmuré par ces mêmes pierres il y a bien longtemps. Oui, cette bibliothèque est sous la Qarawiyyin. Elle est le cœur caché du savoir — la racine dont l'arbre visible n'est que la branche. Tout ce qui a été enseigné là-haut est né ici, dans ces manuscrits. Et toi, Souhayl, tu as été choisi pour en être le gardien.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st1c1s5',
          background: 'inner_world',
        },

        // --- st1c1s5: Le devoir du savoir ---
        {
          id: 'st1c1s5',
          chapterId: 'st1c1',
          title: 'Le devoir du savoir',
          narration: `Sidi Mu'adh se leva lentement, avec la douceur des vieillards qui ont appris que chaque mouvement est un cadeau, et marcha vers l'une des étagères colossales. Ses doigts effleurèrent les dos des manuscrits comme un musicien effleure les touches d'un piano — avec tendresse, avec respect, avec l'intimité de celui qui connaît chaque livre par cœur. Il en retira un, petit, relié en cuir vert émeraude, et le posa devant Souhayl.\n\n— Ouvre-le, dit-il doucement.\n\nSouhayl prit le manuscrit entre ses mains. Il était plus léger qu'il ne l'avait imaginé, et sa couverture était tiède, comme si le livre était vivant. Il l'ouvrit avec précaution, craignant de abîmer les pages jaunies par le temps. L'intérieur était rédigé en calligraphie naskh d'une élégance extraordinaire — chaque lettre était un petit chef-d'œuvre, tracé avec une encre noire qui n'avait pas pâli malgré les siècles.\n\n— Lis la première ligne, dit Sidi Mu'adh.\n\nSouhayl déchiffra lentement, de ses yeux d'enfant de neuf ans : « طلب العلم فريضة على كل مسلم — La recherche du savoir est une obligation pour chaque musulman. »\n\nSidi Mu'adh acquiesça, ses yeux verts brillant d'une lueur qui ressemblait à la fierté d'un grand-père voyant son petit-fils faire ses premiers pas.\n\n— C'est un hadith du Prophète ﷺ, Souhayl. Le tout premier hadith que tu dois graver dans ton cœur. Le savoir n'est pas un luxe, pas un passe-temps, pas une activité optionnelle. C'est une obligation — un farida. Allah a créé l'être humain et lui a donné l'intelligence, et avec cette intelligence vient le devoir de la nourrir. Un esprit qui ne se nourrit pas de savoir se flétrit comme une plante privée d'eau. Et un cœur qui ne comprend pas la création d'Allah ne peut pas vraiment L'aimer.\n\nSouhayl sentit chaque mot se déposer dans son cœur comme une graine dans une terre fertile. Le concept était simple — le savoir est obligatoire — mais sa portée immense. Ce n'était pas seulement les mathématiques ou l'arabe qu'il devait apprendre. C'était tout. Le savoir de la foi, le savoir du monde, le savoir du cœur. Tout était relié, et chaque connaissance le rapprochait un peu plus de Celui qui est Al-'Alim — le Savant par excellence.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Une obligation... Baba m'a toujours dit d'étudier sérieusement, mais je ne savais pas que c'était aussi important que la prière...",
              emotion: 'neutral',
            },
            {
              characterId: 'sidimuadh',
              text: "C'est aussi important, mon enfant. Le Prophète ﷺ a dit : « Les anges étendent leurs ailes par satisfaction pour celui qui cherche le savoir. » Quand tu ouvres un livre pour apprendre, Souhayl, les anges sont avec toi. Chaque page que tu tournes est une prière. Chaque mot que tu comprends est une prosternation. C'est cela, la grandeur du savoir en Islam.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st1c1s6',
          background: 'inner_world',
          lesson: {
            title: "Faridat al-'Ilm — L'obligation du savoir",
            content:
              "Le Prophète ﷺ a dit : « La recherche du savoir est une obligation pour chaque musulman. » En Islam, le savoir n'est pas un simple passe-temps — c'est un devoir religieux. L'intelligence est un don d'Allah, et ne pas la nourrir serait comme recevoir un trésor et le cacher sous terre. Quiconque étudie avec sincérité est accompagné par les anges.",
            quote: 'طلب العلم فريضة على كل مسلم',
            source: 'Hadith — Sunan Ibn Majah',
          },
        },

        // --- st1c1s6: Le retour à la maison ---
        {
          id: 'st1c1s6',
          chapterId: 'st1c1',
          title: 'Le retour à la maison',
          narration: `Souhayl remonta l'escalier de la bibliothèque souterraine avec la sensation de porter un secret immense dont le poids, au lieu de l'écraser, le faisait se sentir plus léger. La porte de fer se referma derrière lui avec un clic doux, presque affectueux, et le mur ouest de la Qarawiyyin retrouva son apparence banale — un vieux mur couvert de mousse, devant lequel personne ne s'arrêtait jamais.\n\nEn marchant vers la maison, Souhayl voyait la médina avec des yeux nouveaux. Les ruelles qu'il parcourait chaque jour lui semblaient soudain pleines de mystères qu'il n'avait jamais remarqués. Les inscriptions arabes gravées au-dessus des portes — « Masha'Allah », « Alhamdulillah », « Ya Hafiz » — n'étaient plus de simples décorations. C'étaient des messages, des enseignements, des fragments de savoir gravés dans la pierre par des générations de croyants. Chaque gravure était un livre miniature, et chaque porte était une page d'une histoire millénaire.\n\nQuand il arriva chez lui, la maison sentait le pain au levain et le tajine de poulet aux olives que sa mère préparait pour le dîner. Wassim courut à sa rencontre dans le couloir, ses petites jambes de six ans tapant sur les carreaux zellige, ses joues rondes rougies par le jeu. Nawfel, assis sur le tapis du salon avec un livre d'histoires, leva les yeux et lui fit un signe de la main.\n\nAziza, la mère, était dans la cuisine, ses mains habiles tournant les semoules pour le couscous. Elle portait un hijab d'un vert olive qui encadrait un visage doux et lumineux, et ses yeux — les mêmes yeux bruns et profonds que Souhayl — se posèrent sur son fils avec cette attention particulière que seules les mères possèdent, cette capacité à voir au-delà des mots et des apparences.\n\n— Tu as l'air différent ce soir, mon grand, dit-elle en posant un plat de salade sur la table. Quelque chose s'est passé. Ton regard brille d'une manière que je ne connais pas encore.\n\nSouhayl hésita. Sidi Mu'adh lui avait dit que la bibliothèque était un secret, un lieu protégé. Mais sa mère... sa mère avait ce don de voir la vérité dans les yeux de ses enfants. Impossible de lui mentir.`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Souhayl ! Souhayl ! Tu étais où ? Moi je t'ai attendu pour jouer aux petites voitures ! Tu m'avais promis !",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "Désolé Wassim, j'ai été retenu. Demain, je te le promets, on joue aux petites voitures après les cours.",
              emotion: 'neutral',
            },
            {
              characterId: 'aziza',
              text: "Mon grand, tu as marché longtemps dans les ruelles ce soir. Ton père m'a dit que tu avais trouvé quelque chose près de la Qarawiyyin. Veux-tu m'en parler ?",
              emotion: 'neutral',
            },
          ],
          choices: [
            {
              id: 'st1c1s6_c1',
              text: "Tout raconter à sa mère — elle mérite sa confiance",
              nextSceneId: 'st1c1s7a',
              badgeId: 'sidq',
              isCorrect: true,
            },
            {
              id: 'st1c1s6_c2',
              text: "Garder le secret pour protéger la bibliothèque",
              nextSceneId: 'st1c1s7b',
            },
          ],
          background: 'home',
        },

        // --- st1c1s7a: La confiance de la mère ---
        {
          id: 'st1c1s7a',
          chapterId: 'st1c1',
          title: 'La confiance de la mère',
          narration: `Souhayl s'assit à la table de la cuisine, ses mains posées à plat sur le bois ciré, et raconta tout. La porte, le mur, le murmure, les mots « Iqra », l'escalier descendant, la bibliothèque immense avec ses milliers de manuscrits, et surtout, Sidi Mu'adh — le vieillard aux yeux verts dont le sourire illuminait les cœurs. Il parla longuement, avec des mots qui venaient du plus profond de lui, comme un fleuve qui coule naturellement vers la mer.\n\nAziza l'écouta sans l'interrompre une seule fois. Ses mains avaient cessé de préparer la cuisine et elle tenait une cuillère en bois immobile au-dessus du couscous, oubliant complètement le dîner. Wassim, assis sur un tabouret près du comptoir, écoutait avec de grands yeux émerveillés, sa bouche grande ouverte, ses petites voitures oubliées à ses pieds.\n\nQuand Souhayl eut fini, un long silence s'installa dans la cuisine. On n'entendait que le chant du canari dans sa cage près de la fenêtre et le bruit lointain du muezzin qui appelait à la prière du Maghrib depuis le minaret le plus proche.\n\nAziza posa sa cuillère et s'essuya les mains dans son tablier. Puis elle fit quelque chose qui surprit Souhayl — elle sourit. Pas un sourire de surprise ou d'inquiétude, mais un sourire de reconnaissance profonde, comme si elle venait de recevoir une nouvelle qu'elle attendait depuis longtemps.\n\n— Mon fils, dit-elle d'une voix tremblante d'émotion, ton grand-père maternel me parlait souvent d'une bibliothèque cachée sous la Qarawiyyin. Il disait qu'elle avait été fondée par les premiers savants de Fès pour protéger les manuscrits des destructions et des guerres, et qu'elle ne se révélait qu'aux cœurs purs. Il disait aussi que, un jour, quelqu'un de notre famille la retrouverait. Je ne pensais pas que ce serait mon propre fils.\n\nDes larmes brillèrent dans les yeux de Aziza, mais c'étaient des larmes de joie, des larmes de gratitude envers Allah qui avait choisi la lignée de leur famille pour ce destin extraordinaire.`,
          dialogues: [
            {
              characterId: 'aziza',
              text: "Souhayl, tu dois honorer ce cadeau. Le savoir est un amana — un dépôt sacré. Ce que Sidi Mu'adh va t'enseigner, tu devras le préserver, le transmettre, le vivre chaque jour. Promets-moi une chose : ne recherche jamais le savoir pour te vanter ou pour éclipser les autres. Recherche-le uniquement pour Allah, pour comprendre Sa création et mieux Le servir.",
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: "Moi aussi je veux voir la bibliothèque ! Y a-t-il des livres avec des images ? Des histoires de chevaliers ?",
              emotion: 'happy',
            },
            {
              characterId: 'nawfel',
              text: "Et moi ? Je pourrais venir aussi ? Je suis plus grand que Wassim, je saurai être sage !",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "Wassim, c'est un lieu sacré. Peut-être qu'un jour... Mais pour l'instant, c'est un secret entre moi, Sidi Mu'adh, et Allah. Je te le promets, maman, je chercherai le savoir uniquement pour Allah.",
              emotion: 'determined',
            },
          ],
          choices: [],
          background: 'home',
          isEnding: true,
          earnedBadgeId: 'sidq',
          lesson: {
            title: 'Al-Sidq — La sincérité dans la quête',
            content:
              "Souhayl a choisi de tout dire à sa mère avec honnêteté. L'Islam enseigne que le savoir doit être recherché avec une intention pure — uniquement pour la face d'Allah (l'Ikhlas). La mère de Souhayl, Aziza, lui rappelle que le savoir est un Amana (un dépôt sacré) qui ne doit ni être utilisé pour la vantardise, ni caché par orgueil, mais partagé avec humilité.",
            quote: 'إنما الأعمال بالنيات',
            source: 'Hadith — Sahih al-Bukhari et Muslim',
          },
        },

        // --- st1c1s7b: Le poids du secret ---
        {
          id: 'st1c1s7b',
          chapterId: 'st1c1',
          title: 'Le poids du secret',
          narration: `Souhayl secoua la tête et dit que tout allait bien, qu'il s'était simplement perdu dans ses pensées en marchant. Mais en prononçant ces mots, il sentit quelque chose d'inconfortable dans sa poitrine — un léger resserrement, comme si une corde invisible se resserrait autour de son cœur. Le secret était là, entre lui et sa mère, et Souhayl réalisa que garder un secret à une personne qui voit la vérité dans vos yeux était aussi futile que d'essayer de cacher le soleil avec sa main.\n\nAziza ne dit rien. Elle posa sa main sur la joue de Souhayl, le regarda longuement, et lui sourit — un sourire qui disait clairement : « Je sais que tu me caches quelque chose, et c'est ton droit. Quand tu seras prêt, tu me le diras. »\n\nWassim, qui avait observé la scène avec l'intelligence intuitive des enfants, tira la manche de Souhayl. Nawfel, leur frère de huit ans, les regardait depuis le seuil de la porte, silencieux et attentif.\n\n— Frérot, dit-il à voix basse, tu mens. Je le sais parce que tes oreilles deviennent rouges quand tu mens. Maman aussi le sait. Mais c'est OK. Je vais garder ton secret aussi.\n\nSouhayl regarda son petit frère, stupéfait par sa perspicacité. Puis il regarda sa mère, qui retournait à sa cuisine avec un calme apparent, et il comprit qu'il y a des secrets qu'on garde non pas par méfiance, mais par prudence — et que les personnes qui nous aiment véritablement respectent cette prudence sans la juger.\n\nCe soir-là, Souhayl ne dormit pas. Il repensa aux paroles de Sidi Mu'adh, au hadith sur l'obligation du savoir, et il murmura dans l'obscurité de sa chambre : « Allahoumma arfa'ni 'ilman — Ô Allah, augmente-moi en savoir. » Les mots flottèrent dans l'air comme des lucioles, et Souhayl sentit qu'ils étaient entendus.`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Frérot, tes oreilles sont rouges. Tu mens à maman. Mais moi je ne dirai rien. C'est notre secret, d'accord ?",
              emotion: 'neutral',
            },
            {
              characterId: 'souhayl',
              text: "Merci, Wassim. Tu es plus sage que tu ne le crois. Un jour, je t'expliquerai tout.",
              emotion: 'neutral',
            },
          ],
          choices: [],
          nextSceneId: 'st1c1s7a',
          background: 'home',
        },
      ],
      lessons: [],
    },

  ],
};
