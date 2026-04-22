import type { Tome } from '@/types/story';

export const tome3_souhayl: Tome = {
  id: 'souhayl_tome3',
  number: 3,
  title: "Les Étoiles de la Sagesse",
  titleAr: 'نجوم الحكمة',
  subtitle: 'Le voyage du Bon Caractère',
  description: "Dans ce troisième tome, Souhayl apprend les qualités du bon caractère (Akhlaq) à travers des rencontres extraordinaires. Quand Umar ibn Al-Khattab lui enseigne la justice absolue, quand Rabia Al-Adawiyya lui montre l'amour désintéressé d'Allah, et quand Salahuddin Al-Ayyubi lui révèle que la plus grande force est la miséricorde, Souhayl comprend que le savoir sans bon caractère est comme un arbre sans fruits.",
  theme: 'Al-Akhlaq — Le Bon Caractère et la Compassion',
  coverImage: '/images/souhayl-tome3-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — La Balance d'Umar (ميزان عمر)
    // ============================================================
    {
      id: 'st3c1',
      tomeId: 'souhayl_tome3',
      number: 1,
      title: 'La Balance d\'Umar',
      titleAr: 'ميزان عمر',
      scenes: [
        // --- st3c1s1: Le livre de la justice ---
        {
          id: 'st3c1s1',
          chapterId: 'st3c1',
          title: 'Le livre de la justice',
          narration: `L'odeur de l'encens flottait dans la bibliothèque souterraine comme un voile invisible, mêlée à celle du parchemin vieilli et du bois de cèdre. Souhayl descendit l'escalier de marbre blanc veiné de bleu, ses babouches ne faisant aucun bruit sur les marches — comme si les pierres elles-mêmes absorbaient le son pour préserver le silence sacré de ce lieu. Les lampes dorées s'allumèrent l'une après l'autre à son passage, et le murmure familier reprit, doux et constant : « اقرأ — Lis... اقرأ — Lis... »\n\nCela faisait plusieurs semaines que Souhayl venait régulièrement dans la bibliothèque cachée sous la Qarawiyyin. Chaque visite était une nouvelle aventure, chaque manuscrit un portail vers un monde oublié. Mais aujourd'hui, quelque chose était différent. Sidi Mu'adh n'était pas assis à sa place habituelle au centre de la salle circulaire. Il se tenait debout devant l'une des étagères les plus hautes, celle que Souhayl n'avait jamais osé approcher, et il tenait dans ses mains un livre d'une taille inhabituelle — grand, épais, relié en cuir brun foncé avec des fermoirs en argent oxydé.\n\nLe vieillard se retourna quand il entendit les pas de Souhayl. Ses yeux verts brillaient d'une lueur que le garçon n'avait pas vue auparavant — une lueur grave, comme celle d'une étoile qui brille plus fort avant l'aube. Son visage, normalement souriant et paisible, portait une expression de solennité qui fit ralentir Souhayl.\n\n— Souhayl, dit Sidi Mu'adh d'une voix plus basse que d'habitude, approche-toi. Aujourd'hui, nous allons parler de quelque chose de plus important que le savoir lui-même. Nous allons parler de ce qui donne au savoir sa valeur — le bon caractère. Al-Akhlaq.\n\nIl posa le grand livre sur la table basse en bois d'olivier et en ouvrit les fermoirs avec un cliquetis métallique qui résonna dans la salle comme un gong. Les pages s'ouvrirent lentement, révélant une calligraphie d'une beauté saisissante — des lettres arabes tracées à l'encre noire et dorée, ornées d'enluminures représentant une balance à plateaux, un symbole que Souhayl reconnut immédiatement.\n\n— La balance, murmura Souhayl. C'est le symbole de...\n\n— De la justice, compléta Sidi Mu'adh. De l'Adl — العدل. La justice est la colonne vertébrale du bon caractère, Souhayl. Sans justice, le savoir devient une arme au lieu d'être une lumière. Sans justice, la puissance devient oppression et la richesse devient cupidité. Le Prophète ﷺ a dit : « Les justes seront auprès d'Allah sur des pupitres de lumière, à la droite du Tout Miséricordieux — et Ses deux mains sont droites — ceux qui sont justes dans leurs jugements, dans leurs familles, et dans ce dont ils sont responsables. »\n\nSouhayl regarda les enluminures de la balance avec une fascination grandissante. Les deux plateaux étaient parfaitement équilibrés, et au centre, une petite flamme dorée vacillait, comme si le livre lui-même respirait.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "La recherche du savoir a une condition, Souhayl : le bon caractère. Le Prophète ﷺ a dit : « Le meilleur d'entre vous est celui qui a le meilleur caractère. » Aujourd'hui, tu vas rencontrer un homme dont la justice était si célèbre que même les montagnes tremblaient quand il parlait. Umar ibn Al-Khattab.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Umar ibn Al-Khattab ? Le deuxième calife ? Celui dont Baba nous raconte les histoires à la maison ? Celui qui avait tellement peur d'Allah qu'il pleurait pendant ses sermons ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Le même. L'homme que le Prophète ﷺ appelait « Al-Faruq » — celui qui distingue le vrai du faux. Prépare ton cœur, Souhayl, car le manuscrit va t'emmener dans le temps, à Médine, il y a plus de quatorze siècles. Tu vas le voir de tes propres yeux.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st3c1s2',
          background: 'inner_world',
        },

        // --- st3c1s2: La ville d'Umar ---
        {
          id: 'st3c1s2',
          chapterId: 'st3c1',
          title: 'La ville d\'Umar',
          narration: `Les pages du manuscrit tournèrent toutes seules, comme poussées par un vent invisible, et la lumière dorée de la bibliothèque se transforma. Les murs de pierre disparurent, remplacés par un ciel d'un bleu intense, sans la moindre nuage, sous lequel s'étendait une ville que Souhayl ne reconnaissait pas. Des maisons en briques crues, basses et blanchies à la chaux, s'alignaient le long de ruelles poussiéreuses bordées de palmiers dattiers dont les feuilles claquaient doucement dans la brise chaude. L'air sentait le santal, la figue mûre et la terre sèche après la pluie.\n\nSouhayl se trouvait dans une ruelle étroite de Médine, à l'époque du califat d'Umar ibn Al-Khattab. Il le savait sans que personne ne le lui dise — c'était écrit dans la lumière elle-même, dans la couleur du ciel, dans le son lointain de l'adhan qui montait depuis la Mosquée du Prophète ﷺ au bout de la rue. Les voix qui l'entouraient parlaient un arabe ancien, plus chantant que celui de Fès, et les vêtements des passants — djellaba simples, turbans blancs ou rayés, sandales en cuir — appartenaient à une époque révolue.\n\nEt puis il le vit.\n\nUn homme grand, imposant, marchait seul au milieu de la ruelle. Sa silhouette était celle d'un chêne centenaire — large d'épaules, droit comme un minaret, avec une barbe épaisse qui descendait sur sa poitrine et des yeux perçants qui semblaient voir à travers les murs. Il portait une tunique simple, rapiécée à plusieurs endroits, et ses pieds étaient nus dans la poussière — oui, nus, le calife de tous les musulmans marchait pieds nus dans les rues de sa propre ville. Souhayl sentit son cœur se serrer en le regardant. Cet homme portait le poids d'un empire sur ses épaules, et pourtant il n'avait pas de chaussures.\n\nL'homme s'arrêta devant une petite maison en ruine, au toit effondré. Il regarda les murs fissurés, la porte tombante, le sol jonché de pierres, et ses yeux — des yeux d'une dureté légendaire, des yeux qui avaient fait trembler des armées — se remplirent de larmes. Des larmes silencieuses qui coulèrent sur ses joues et tombèrent dans la poussière sans un bruit.\n\n— « Ô Umar, murmura l'homme à lui-même, tu as gouverné avec justice, mais as-tu bien pris soin de chaque brebis de ton troupeau ? Cette maison est en ruine, et son occupant dort peut-être sous les étoiles ce soir. Comment pourrais-tu rencontrer Allah le jour du Jugement alors qu'une seule de Ses créatures souffre sous ta responsabilité ? »\n\nSouhayl sentit chaque mot comme une flèche qui transperçait sa poitrine. Il fit un pas en avant, et l'homme tourna la tête vers lui. Ses yeux perçants se posèrent sur le garçon de neuf ans, et au lieu de surprise ou de colère, ils exprimèrent une douceur que Souhayl n'aurait jamais imaginée chez un homme d'une telle stature.\n\n— Qui es-tu, petit garçon, demanda Umar d'une voix grave mais chaleureuse, et comment es-tu arrivé ici ?\n\nSouhayl s'inclina respectueusement, comme son père lui avait appris de le faire devant les savants et les personnes âgées.\n\n— Je m'appelle Souhayl, dit-il. Je viens de Fès... du futur. Je suis ici pour apprendre de vous, Ô Commandeur des Croyants.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Ô Commandeur des Croyants, on m'a dit que vous étiez le plus juste des hommes. Est-ce vrai ? Comment peut-on être juste tout le temps ?",
              emotion: 'neutral',
            },
            {
              characterId: 'umar',
              text: "Juste ? Moi, juste ? Souhayl, la justice appartient à Allah seul. Je ne suis qu'un serviteur qui essaie de ne pas être injuste. Tu veux savoir ce qu'est la justice ? Écoute bien. La justice, c'est de traiter les autres comme tu aimerais être traité — et cela vaut pour le plus puissant comme pour le plus faible. Je te le dis avec les mots du Prophète ﷺ : « Traitez vos serviteurs avec ce dont vous aimez être traités. »",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Mais c'est difficile, non ? Parfois, les autres sont méchants avec nous. Comment rester juste quand on a envie de crier ou de se venger ?",
              emotion: 'neutral',
            },
            {
              characterId: 'umar',
              text: "Difficile ? C'est la chose la plus difficile du monde, Souhayl. Plus difficile que de gouverner un empire. Plus difficile que de vaincre une armée. Car la vraie justice commence là où personne ne regarde — dans ton cœur, quand personne ne te juge. Le Prophète ﷺ disait : « adore Allah comme si tu Le voyais, et si tu ne Le vois pas, Lui te voit. » C'est vrai aussi pour la justice : sois juste comme si Allah te regardait. Parce qu'Il te regarde.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st3c1s3',
          background: 'inner_world',
          lesson: {
            title: "Al-'Adl — La justice absolue",
            content:
              "Umar ibn Al-Khattab, le deuxième calife de l'Islam, était surnommé « Al-Faruq » (celui qui distingue le vrai du faux) par le Prophète ﷺ. Il gouvernait un empire immense mais vivait dans la pauvreté, portant des vêtements rapiécés et marchant pieds nus. Sa justice était si célèbre qu'un jour, un vieillard juif comparaît devant lui avec un différend contre le calife lui-même — et Umar jugea en faveur du vieillard. En Islam, la justice (Al-'Adl) est un devoir absolu, même envers ses ennemis, même quand cela nous coûte.",
            quote: 'إن الله يأمركم أن تؤدوا الأمانات إلى أهلها وإذا حكمتم بين الناس أن تحكموا بالعدل',
            source: 'Coran, Sourate An-Nisa (4:58)',
          },
        },

        // --- st3c1s3: L'injustice à la madrasa ---
        {
          id: 'st3c1s3',
          chapterId: 'st3c1',
          title: "L'injustice à la madrasa",
          narration: `La lumière de Médine s'effaça comme une bougie soufflée par le vent, et Souhayl se retrouva assis sur son coussin dans la bibliothèque souterraine, le manuscrit ouvert sur ses genoux. Les lampes dorées brillaient de nouveau, le silence sacré régnait, et Sidi Mu'adh le regardait avec ses yeux verts, un sourire grave aux lèvres.\n\n— Tu as vu, dit le sage doucement. Tu as vu l'homme qui tremblait de peur devant Allah malgré tout son pouvoir. Souhayl, la justice n'est pas une théorie que l'on étudie dans un livre. C'est une pratique que l'on vit chaque jour, dans chaque situation, même les plus petites. Même à la madrasa. Même dans la cour de récréation.\n\nCes derniers mots frappèrent Souhayl comme un avertissement. Il remercia Sidi Mu'adh et remonta l'escalier vers la surface, la porte de fer se refermant derrière lui avec son clic familier.\n\nLe lendemain matin, Souhayl arriva à la madrasa Bou Inania avec le cœur lourd de ce qu'il avait appris. Les cours du matin se passèrent normalement — grammaire arabe, mémorisation du Coran, calcul. Mais c'est pendant la pause de midi que tout changea.\n\nSouhayl était assis dans la cour intérieure de la madrasa, un carreau de zellige bleu sous ses pieds, un sandwich au fromage à la main, quand il entendit un bruit désagréable venant du coin nord de la cour. Il leva les yeux et vit une scène qui lui noua l'estomac.\n\nKarim, un garçon de onze ans, le plus grand et le plus fort de la classe, se tenait debout devant un petit garçon de sept ans du nom de Yassine. Yassine était nouveau à la madrasa — un enfant timide aux cheveux roux et aux yeux brillants, qui venait d'un village de l'Atlas et qui portait encore des vêtements de montagne qui le faisaient se démarquer des autres. Karim avait arraché le sac de Yassine et en vidait le contenu par terre — des cahiers, des crayons, une gourde en métal, un petit Coran relié en cuir vert.\n\n— Regarde ça ! s'exclama Karim en tenant le petit Coran de Yassine au-dessus de sa tête, hors de portée. Le montagnard a apporté son Coran à l'école ! Tu sais lire, montagnard ? Tu sais même pas parler correctement !\n\nLes autres élèves riaient. Certains par vraie méchanceté, d'autres par lâcheté — cette lâcheté silencieuse de ceux qui rient avec le fort pour ne pas devenir la prochaine cible. Yassine se tenait debout, les yeux baissés, les épaules tremblantes, et ses lèvres bougeaient silencieusement — il récitait quelque chose, peut-être une dou'a, une prière, pour lui demander de la patience.\n\nSouhayl sentit la colère monter en lui comme de l'eau chaude dans une théière. Mais il sentit autre chose aussi — la peur. Karim était grand, fort, et ses amis le soutenaient. Si Souhayl intervenait, il risquait de devenir lui-même une cible. Sidi Mu'adh avait parlé de justice. Les mots d'Umar résonnaient encore dans sa tête : « La vraie justice commence là où personne ne regarde — dans ton cœur. » Mais c'est facile à dire quand on est le calife d'un empire. C'est moins facile quand on est un garçon de neuf ans face à un garçon de onze ans qui tient en l'air le Coran d'un enfant de sept ans.\n\nYassine leva les yeux vers Souhayl. Ses yeux brillants, pleins de larmes qu'il s'efforçait de retenir, le suppliaient silencieusement. Et dans ces yeux, Souhayl vit quelque chose qu'il n'oublierait jamais — la même expression que celle du vieillard juif devant Umar, celle de celui qui espère que la justice existe encore dans ce monde.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Allahoumma, guide-moi... Qu'est-ce que je dois faire ? Sidi Mu'adh m'a dit que la justice est le pilier du bon caractère...",
              emotion: 'neutral',
            },
          ],
          choices: [
            {
              id: 'st3c1s3_c1',
              text: "Intervenir et défendre Yassine — la justice ne peut pas attendre",
              nextSceneId: 'st3c1s4a',
              badgeId: 'adl',
              isCorrect: true,
            },
            {
              id: 'st3c1s3_c2',
              text: "Appeler un professeur au lieu de s'interposer directement",
              nextSceneId: 'st3c1s4b',
            },
          ],
          background: 'classroom',
        },

        // --- st3c1s4a: La balance du courage ---
        {
          id: 'st3c1s4a',
          chapterId: 'st3c1',
          title: 'La balance du courage',
          narration: `Souhayl se leva. Ses jambes tremblaient un peu — il ne pouvait pas le cacher — mais ses pieds se mouvirent malgré la peur, portés par quelque chose de plus fort que la lâcheté, quelque chose qu'Umar ibn Al-Khattab aurait reconnu immédiatement : la certitude intime que rester assis face à l'injustice est un péché plus grand que de se faire gronder.\n\nIl traversa la cour à grandes enjambées, son cœur battant si fort qu'il l'entendait dans ses oreilles comme le tambour d'un tambourin berbère. Karim le vit arriver et fronça les sourcils.\n\n— Qu'est-ce que tu veux, Souhayl ? C'est pas ton problème.\n\nSouhayl s'arrêta devant Karim et leva les yeux vers lui — il était plus petit, il le savait, mais les paroles de Sidi Mu'adh lui donnaient une force qui ne mesurait pas en centimètres.\n\n— Si tu ne rends pas son Coran à Yassine tout de suite, dit Souhayl d'une voix qu'il força d'être stable, je vais prévenir mon père. Et si tu ne sais pas qui est mon père, il s'appelle Mehdi Benali et il est professeur ici. Il ne tolère pas qu'on maltraite les élèves.\n\nLes mots sortirent de sa bouche avec une netteté qui surprit Souhayl lui-même. Il n'avait pas crié, il n'avait pas insulté — il avait simplement énoncé les faits avec la clarté d'une sentence. Karim hésita. Il regarda Souhayl, puis les amis de Souhayl qui commençaient à se lever, puis son propre groupe qui commençait à se disperser, et il comprit que la dynamique avait changé.\n\n— Tiens, grommela-t-il en jetant le Coran de Yassine à terre. Prends ton livre, montagnard. Et la prochaine fois, reste dans ton village.\n\nKarim s'éloigna avec ses amis, et Souhayl s'agenouilla pour ramasser le Coran de Yassine. Il le dépoussière délicatement, le porta à sa poitrine un instant — le Coran mérite le respect, même quand il tombe — et le tendit à Yassine.\n\nLe petit garçon le prit avec des mains qui tremblaient encore, et il leva ses yeux brillants vers Souhayl.\n\n— Choukran, murmura-t-il d'une voix à peine audible. Choukran bzaf.\n\nSouhayl posa sa main sur l'épaule de Yassine et lui sourit.\n\n— Tu es le bienvenu ici, Yassine. Si quelqu'un te dérange encore, viens me voir. On n'est pas nombreux à s'asseoir seuls pendant la pause — on pourrait s'asseoir ensemble.\n\nCe soir-là, en rentrant chez lui, Souhayl monta à la bibliothèque et trouva Sidi Mu'adh qui l'attendait. Le sage avait un sourire que Souhayl n'avait encore jamais vu — un sourire qui ressemblait à celui d'un père voyant son fils accomplir son premier acte de bravoure.\n\n— Tu as été juste aujourd'hui, Souhayl, dit Sidi Mu'adh. Umar aurait été fier de toi. Mais souviens-toi : la justice, ce n'est pas seulement défendre les faibles. C'est aussi être juste envers ceux qui font le mal — les corriger avec sagesse, pas avec colère. Tu n'as pas insulté Karim, tu n'as pas crié. Tu as utilisé la raison et le calme. C'est cela, la vraie justice — ferme mais douce, courageuse mais sage.\n\nSouhayl sentit une chaleur se répandre dans sa poitrine, comme si une petite étoile venait de s'allumer dans son cœur. Et sur la page ouverte du manuscrit posé devant lui, l'enluminure de la balance commença à briller d'une lumière dorée, si intense que Souhayl dut fermer les yeux un instant. Quand il les rouvrit, une petite broche en forme de balance avait apparu sur la page — fine, délicate, forgée dans un métal qui ressemblait à de l'or et de l'argent mêlés.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "J'avais peur, Sidi Mu'adh. J'avais vraiment peur de Karim. Mais quand j'ai vu les yeux de Yassine, j'ai compris que je ne pouvais pas rester assis. Les mots d'Umar me sont revenus : « La justice commence là où personne ne regarde. »",
              emotion: 'neutral',
            },
            {
              characterId: 'sidimuadh',
              text: "Tu as compris la leçon la plus difficile de toutes, Souhayl. Le Prophète ﷺ a dit : « Quiconque voit une injustice, qu'il la corrige par sa main. S'il n'y arrive pas, que ce soit par sa langue. S'il n'y arrive pas, que ce soit par son cœur — et c'est là le degré le plus faible de la foi. » Tu as agi par ta main et ta langue aujourd'hui. Allah est satisfait de toi.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Et Karim ? Je ne veux pas qu'il soit puni cruellement. Il a fait du mal, mais... il est quand même un enfant comme moi.",
              emotion: 'neutral',
            },
            {
              characterId: 'sidimuadh',
              text: "Voilà la justice dans toute sa noblesse, Souhayl. Tu défends la victime ET tu penses au coupable avec équité. Umar disait : « Ne hais pas la punition, mais hais le crime. » C'est cela, Al-'Adl — pondérer chaque chose avec la balance de la sagesse.",
              emotion: 'wise',
            },
          ],
          choices: [],
          background: 'inner_world',
          isEnding: true,
          earnedBadgeId: 'adl',
          lesson: {
            title: "Al-'Adl — La justice dans la vie quotidienne",
            content:
              "Souhayl a appris que la justice (Al-'Adl — العدل) n'est pas seulement une affaire de tribunaux et de lois — c'est un devoir quotidien, même pour les enfants. Le Prophète ﷺ a enseigné : « Quiconque voit une injustice, qu'il la corrige par sa main. S'il n'y arrive pas, que ce soit par sa langue. S'il n'y arrive pas, que ce soit par son cœur. » Souhayl a choisi d'intervenir pour défendre un camarade plus faible, avec courage mais sans violence, prouvant que la vraie justice est ferme et douce à la fois.",
            quote: 'من رأى منكم منكرا فليغيره بيده فإن لم يستطع فبلسانه فإن لم يستطع فبقلبه وذلك أضعف الإيمان',
            source: 'Hadith — Sahih Muslim',
          },
        },

        // --- st3c1s4b: Le silence qui pèse ---
        {
          id: 'st3c1s4b',
          chapterId: 'st3c1',
          title: 'Le silence qui pèse',
          narration: `Souhayl resta assis sur son carreau de zellige, le sandwich au fromage à moitié mangé dans sa main, et il ne bougea pas. Il regarda la scène avec des yeux grands ouverts et un cœur qui cognait contre ses côtes comme un oiseau dans une cage trop étroite. Tout son être voulait se lever, traverser la cour, arracher le Coran des mains de Karim et le rendre à Yassine. Mais ses jambes ne bougeaient pas.\n\nLa peur, cette peur sourde et paralysante, le tenait cloué au sol. Et puis, se dit-il, ce n'est pas mon problème. Yassine n'est pas mon frère, pas mon ami — je le connais à peine. Si j'interviens, Karim va s'en prendre à moi aussi. Peut-être que je devrais aller chercher un professeur, oui, c'est plus raisonnable...\n\nIl se leva, posa son sandwich, et marcha vers la porte du bâtiment des professeurs. Mais avant qu'il ne l'atteigne, il s'arrêta. Les mots d'Umar résonnèrent dans sa tête comme un écho : « La vraie justice commence là où personne ne regarde — dans ton cœur, quand personne ne te juge. »\n\nEt là, tout de suite, personne ne le jugeait. Personne ne le regardait. C'était le moment de vérité. Et Souhayl comprit, avec une clarté soudaine et douloureuse, que chercher un professeur n'était pas un acte de justice — c'était un acte de lâcheté déguisée en prudence. Il ne cherchait pas de l'aide pour Yassine. Il cherchait une excuse pour ne pas agir lui-même.\n\nIl se retourna. Yassine était accroupi par terre, ramassant ses affaires éparses, ses petites mains tremblantes. Karim et ses amis s'étaient déjà éloignés, riant entre eux. Les autres élèves avaient détourné le regard, occupant leurs esprits avec des choses sans importance pour ne pas voir la souffrance de leur camarade.\n\nSouhayl sentit une honte brûlante lui monter aux joues. Cette honte, il la reconnaissait — c'était la même honte qu'il avait ressentie dans la bibliothèque quand Sidi Mu'adh lui avait dit que le savoir sans bon caractère est comme un arbre sans fruits. Il venait de voir un arbre sans fruits, et cet arbre, c'était lui.\n\nNon. Pas encore. Pas tant qu'il pouvait agir.\n\nSouhayl traversa la cour à grandes enjambées et s'agenouilla à côté de Yassine. Il commença à ramasser les affaires du petit garçon — les cahiers, les crayons, la gourde — avec des gestes rapides et précis. Yassine le regarda avec des yeux écarquillés de surprise.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Pardon, Yassine. J'aurais dû intervenir plus tôt. Ça ne se reproduira plus. Viens, on va ranger tes affaires ensemble.",
              emotion: 'sad',
            },
          ],
          choices: [],
          nextSceneId: 'st3c1s4a',
          background: 'classroom',
        },
      ],
      lessons: [],
    },

  ],
};
