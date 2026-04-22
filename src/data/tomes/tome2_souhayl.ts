import type { Tome, Scene, Dialogue, Choice, Lesson } from '@/types/story';

export const tome2_souhayl: Tome = {
  id: 'souhayl_tome2',
  number: 2,
  title: 'Les Gardiens du Savoir',
  titleAr: 'حراس المعرفة',
  subtitle: "L'épreuve de la Vérité et de la Confiance",
  description:
    "Devenu gardien de la bibliothèque cachée sous la Qarawiyyin, Souhayl est initié aux histoires des plus grands savants de l'Islam à travers des rencontres extraordinaires. Dans ce second tome, il fait face à l'épreuve de la vérité et de la confiance : quand Al-Ghazali lui montre que le savoir sans sincérité est une prison dorée, quand Ibn Sina lui enseigne le prix de l'honnêteté intellectuelle, et quand Fatima Al-Fihri lui révèle que le savoir le plus précieux est celui qu'on transmet avec amour. Souhayl devra prouver qu'il est digne de la confiance que Sidi Mu'adh lui a accordée.",
  theme: 'As-Sidq wa al-Amana — La Vérité et la Confiance',
  coverImage: '/images/souhayl-tome2-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — Le Fantôme d'Al-Ghazali (شبح الغزالي)
    // ============================================================
    {
      id: 'st2c1',
      tomeId: 'souhayl_tome2',
      number: 1,
      title: "Le Fantôme d'Al-Ghazali",
      titleAr: 'شبح الغزالي',
      scenes: [
        // --- st2c1s1: Le manuscrit lumineux ---
        {
          id: 'st2c1s1',
          chapterId: 'st2c1',
          title: 'Le manuscrit lumineux',
          narration: `Deux semaines s'étaient écoulées depuis que Souhayl avait reçu le pendentif en forme de lampe du gardien, et depuis ce jour, sa vie avait pris une tournure extraordinaire. Chaque matin, avant de partir pour la madrasa, il passait ses doigts sur le pendentif d'argent et murmurait la prière que Sidi Mu'adh lui avait apprise : « Allahoumma ij'alni min ahli 'ilmik — Ô Allah, fais de moi un des gens de Ton savoir. » Et chaque soir, avant de s'endormir, il ouvrait un livre — n'importe lequel — et lisait au moins une page, suivant le conseil du sage : « Même une gorgée d'eau chaque jour remplit une rivière au fil du temps. »\n\nMais ce matin-là, quelque chose d'inhabituel se produisit. Souhayl était assis dans la bibliothèque souterraine, devant Sidi Mu'adh, comme à l'accoutumée, quand il remarqua que l'une des étagères — la plus haute, celle qui touchait presque le plafond voûté — émettait une lueur bleutée, comme si un manuscrit particulier brillait de l'intérieur. La lumière était douce, presque imperceptible, mais dans la pénombre relative de la bibliothèque, elle attire l'œil comme un phare dans la nuit.\n\nSouhayl pointa du doigt l'étagère. Sidi Mu'adh suivit son regard et ses yeux verts s'agrandirent légèrement — une expression que Souhayl n'avait jamais vue sur le visage imperturbable du sage.\n\n— Ah, murmura Sidi Mu'adh. Il est temps. C'est le Manuscrit des Gardiens. Il ne s'illumine que quand un nouveau gardien est prêt à recevoir sa première grande leçon.\n\nLe sage se leva, marcha vers l'étagère et, avec une agilité surprenante pour son âge, grimpa sur une échelle en bois et en retira un manuscrit d'une taille inhabituelle — plus grand que les autres, relié en cuir indigo profond incrusté de fils d'argent et d'or. Le manuscrit pulsait d'une lumière bleue, comme un cœur qui bat, et quand Sidi Mu'adh le posa sur la table devant Souhayl, la lumière envahit la salle entière, teintant les colonnes de marbre et les mosaïques du plafond de reflets célestes.\n\n— Ce manuscrit, dit Sidi Mu'adh d'une voix solennelle, est spécial. Il ne contient pas de texte — il contient des mémoires. Les mémoires des plus grands savants de l'Islam. Quand tu l'ouvriras, Souhayl, tu ne liras pas des mots — tu vivras des moments. Des moments de la vie de ces géants du savoir. Et le premier qui t'attend... est l'un des plus extraordinaires qui aient jamais marché sur cette terre.\n\nSouhayl regarda le manuscrit avec un mélange d'excitation et de crainte. Le cuir indigo était chaud sous ses doigts, et les fils d'argent et d'or pulsaient comme des veines remplies de lumière liquide.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: 'Qui est le premier savant, Sidi ? De qui vais-je voir la mémoire ?',
              emotion: 'neutral',
            },
            {
              characterId: 'sidimuadh',
              text: "Abu Hamid Al-Ghazali. L'homme que le monde musulman appelle Hujjat al-Islam — la Preuve de l'Islam. Il était à la fois un savant, un philosophe, un mystique et un réformateur. Mais surtout, Souhayl, il était un homme de vérité. Un homme qui a eu le courage de dire : « Je ne sais pas » quand tout le monde pensait qu'il savait tout. Et c'est ce courage-là que tu vas apprendre aujourd'hui.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st2c1s2',
          background: 'inner_world',
        },

        // --- st2c1s2: La rencontre avec Al-Ghazali ---
        {
          id: 'st2c1s2',
          chapterId: 'st2c1',
          title: 'La rencontre avec Al-Ghazali',
          narration: `Souhayl ouvrit le manuscrit, et le monde autour de lui disparut. La bibliothèque souterraine, les colonnes de marbre, les lampes dorées, Sidi Mu'adh — tout s'effaça comme un tableau qu'on efface d'un coup d'éponge, et Souhayl se retrouva debout dans un lieu qu'il ne reconnaissait pas.\n\nIl était dans une grande salle voûtée aux murs blancs, ornée de fenêtres en ogive par lesquelles filtrait une lumière dorée d'un automne perpétuel. Des étagères immenses, remplies de livres en arabe, en persan et en grec, montaient jusqu'au plafond, et au centre de la salle, un homme était assis à un bureau en bois d'olivier, entouré de parchemins éparpillés et de livres ouverts.\n\nL'homme portait une djellaba grise et un turban blanc. Il avait la barbe taillée court, les yeux d'un noir profond et perçant, et un visage qui portait les marques de l'intelligence et de l'angoisse mêlées — comme un homme qui a vu trop loin et qui sait que voir trop loin est aussi dangereux que de ne pas voir du tout. Il était en train d'écrire, son calame courant sur le parchemin avec une vitesse et une précision qui témoignaient d'une maîtrise absolue.\n\nPuis il leva les yeux et regarda Souhayl. Et Souhayl, malgré sa jeunesse et son inexpérience, reconnut ce regard — un regard qui voyait tout, qui comprenait tout, et qui portait en lui le poids du monde entier.\n\n— Tu es le nouveau gardien, dit l'homme sans se lever. Assieds-toi. Je suis Abu Hamid. Les gens m'appellent Al-Ghazali. Je suis mort il y a plus de neuf cents ans, mais mes mots, eux, sont plus vivants que jamais.\n\nSouhayl obéit, s'asseyant sur un coussin posé à côté du bureau. Ses yeux allaient du visage d'Al-Ghazali aux livres qui l'entouraient — des centaines, peut-être des milliers de livres, couvrant tous les sujets imaginables.\n\n— Ne sois pas impressionné par les livres, dit Al-Ghazali avec un demi-sourire. J'ai écrit plus de quatre-vingts ouvrages dans ma vie, et le seul qui compte vraiment, c'est celui que j'ai écrit quand j'ai eu le courage d'admettre que je ne savais rien.\n\nSouhayl fronça les sourcils. Quatre-vingts ouvrages, et le seul qui compte est celui d'un homme qui ne savait rien ? Cela n'avait aucun sens.\n\n— Laisse-moi t'expliquer, dit Al-Ghazali en posant son calame. Écoute bien, car cette histoire est peut-être la plus importante que tu entendras jamais.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Al-Ghazali était le plus grand savant de son époque. Il enseignait à la prestigieuse Nizamiyya de Bagdad, où des milliers d'étudiants venaient l'écouter. Tout le monde le considérait comme le savant le plus brillant du monde musulman. Mais à l'intérieur de lui, quelque chose s'est brisé.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "S'est brisé ? Quoi donc ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "La certitude, Souhayl. La certitude qu'il avait tout compris. Al-Ghazali a réalisé que tout son savoir — tous ses livres, toutes ses leçons, tous ses élèves — n'étaient que des mots si son cœur n'était pas sincère. Il a fait quelque chose d'incroyable : il a tout quitté. Son poste, sa réputation, sa maison. Il est parti pendant onze ans pour chercher la vérité.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st2c1s3',
          background: 'inner_world',
        },

        // --- st2c1s3: Le doute d'Al-Ghazali ---
        {
          id: 'st2c1s3',
          chapterId: 'st2c1',
          title: "Le doute d'Al-Ghazali",
          narration: `Al-Ghazali se leva de son bureau et marcha vers la fenêtre. La lumière dorée de l'automne éclairait son visage et, dans cette lumière, Souhayl put voir les rides profondes qui sillonnaient sa peau — des rides qui n'étaient pas seulement celles de l'âge, mais celles de l'angoisse, de la recherche, du questionnement perpétuel.\n\n— Écoute, Souhayl, dit-il en se tournant vers le garçon. Imagine que tu es le professeur le plus célèbre du monde. Tout le monde te vénère. Des centaines d'élèves assis à tes pieds, écrivant chaque mot que tu dis. Des rois qui te consultent. Des savants qui te citent. Tu as tout — la gloire, le respect, la richesse. Mais un soir, en rentrant chez toi, tu poses cette question : « Est-ce que je crois vraiment à ce que j'enseigne ? »\n\nSouhayl sentit un frisson le parcourir. La question était simple, mais sa portée était terrifiante.\n\n— C'est exactement ce qui m'est arrivé, continua Al-Ghazali. J'enseignais la théologie, la philosophie, le fiqh, la logique — j'étais considéré comme un maître dans tous ces domaines. Mais au fond de moi, je sentais un vide. Un trou noir qui engloutissait toute certitude. Mes paroles étaient parfaites, mais mon cœur était vide. Je parlais d'Allah avec l'éloquence d'un ange, mais quand je priais, je ne sentais rien. Quand je lisais le Coran, les mots glissaient sur mon esprit comme l'eau sur la pierre, sans le pénétrer.\n\nLe savant marqua une pause, et ses yeux s'assombrirent.\n\n— Pendant six mois, Souhayl, je suis resté paralysé. Physiquement, mentalement, spirituellement. Je ne pouvais plus parler, plus écrire, plus enseigner. J'étais comme un arbre dont on a coupé les racines — debout, mais mort de l'intérieur. Les médecins pensaient que c'était une maladie du corps. Mais c'était une maladie de l'âme. Le nom de cette maladie ? Le doute. Le doute sur la sincérité de ma propre foi.\n\nAl-Ghazali se tourna vers Souhayl avec une intensité qui força le garçon à se redresser.\n\n— Et voilà la leçon que je veux t'enseigner aujourd'hui, Souhayl. Le doute n'est pas un ennemi. Le doute est un ami déguisé. C'est le doute qui m'a poussé à chercher la vérité, et c'est en cherchant la vérité que j'ai trouvé la sincérité — le Sidq — la vérité du cœur. Sans le doute, je serais resté un savant vide. Avec le doute, je suis devenu un être humain complet.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Mais... douter de sa foi, ce n'est pas grave ? Les gens disent que le doute c'est mauvais...",
              emotion: 'scared',
            },
            {
              characterId: 'sidimuadh',
              text: "Ce que les gens disent et ce que la sagesse enseigne sont souvent deux choses différentes, Souhayl. Le grand savant Ibn Al-Qayyim a dit : « Le doute est le début de la certitude. » L'enfant qui ne pose jamais de questions ne grandit jamais. Le savant qui ne doute jamais de ses certitudes ne progresse jamais. Le doute sincère est une prière — une prière que le cœur adresse à Allah en disant : « Seigneur, montre-moi la vérité. »",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st2c1s4',
          background: 'inner_world',
        },

        // --- st2c1s4: Le choix de la vérité ---
        {
          id: 'st2c1s4',
          chapterId: 'st2c1',
          title: 'Le choix de la vérité',
          narration: `Al-Ghazali reprit son récit, et Souhayl sentit que l'histoire approchait de son point culminant — ce moment précis où un homme doit choisir entre le confort du mensonge et la difficulté de la vérité.\n\n— Après six mois de paralysie, dit Al-Ghazali, j'ai pris une décision. J'ai tout quitté. J'ai quitté Bagdad, mon poste à la Nizamiyya, ma maison, mes élèves, ma réputation — tout. J'ai distribué mes biens aux pauvres et je suis parti en voyage. Pendant onze ans, j'ai voyagé à travers le monde musulman — Damas, Jérusalem, La Mecque, Médine, Le Caire — à la recherche de la certitude. J'ai rencontré des soufis, des philosophes, des savants de toutes écoles. J'ai prié, médité, jeûné, pleuré. Et au bout de ces onze années, j'ai compris quelque chose de fondamental.\n\nIl se tourna vers Souhayl, et ses yeux noirs brillaient d'une lumière qui n'avait rien de terrestre.\n\n— J'ai compris que la certitude ne se trouve pas dans les livres, Souhayl. Elle se trouve dans le cœur. On peut lire mille livres sur l'amour sans jamais savoir ce qu'est aimer. On peut étudier mille traités de théologie sans jamais sentir la présence d'Allah. Le savoir de la tête et le savoir du cœur sont deux choses différentes. Et la plus importante, c'est le savoir du cœur — la certitude spirituelle qu'on appelle Yaqin.\n\nAl-Ghazali posa sa main sur l'épaule de Souhayl avec une tendresse qui contrastait avec la sévérité de son visage.\n\n— Voilà ce que je veux que tu retiennes, Souhayl. Le savoir sans sincérité est comme un bel habit porté sur un cadavre — il donne l'illusion de la vie, mais il n'y a rien dessous. La sincérité — le Sidq — est le souffle qui donne vie au savoir. Sans elle, les plus beaux mots ne sont que du vent. Avec elle, les mots les plus simples deviennent des lanternes qui éclairent le monde.\n\nMais Al-Ghazali n'avait pas encore fini. Il fixa Souhayl avec une gravité qui compressa l'air dans la salle.\n\n— Cependant, Souhayl, il y a un danger plus grand encore que le savoir sans sincérité. C'est le savoir utilisé pour tromper. La connaissance, entre les mains de quelqu'un qui ment, est une arme plus dangereuse qu'une épée. Celui qui sait et qui ment est pire que celui qui ignore et qui se trompe, car le premier ment avec la pleine connaissance de son mensonge.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Celui qui sait et qui ment... Sidi, c'est arrivé ? Des savants qui ont menti ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Hélas oui, Souhayl. Tout au long de l'histoire, certains savants ont utilisé leur connaissance pour tromper, pour manipuler, pour servir des intérêts mondains. C'est pour cela que le Prophète ﷺ a dit : « Quiconque ment sur moi délibérément, qu'il prépare sa place en Enfer. » Le mensonge dans le savoir est le péché le plus grave, car il corrompt la source même de la guidance.",
              emotion: 'wise',
            },
          ],
          choices: [
            {
              id: 'st2c1s4_c1',
              text: "Promettre de toujours dire la vérité, même quand c'est difficile",
              nextSceneId: 'st2c1s5a',
              badgeId: 'sidq',
              isCorrect: true,
            },
            {
              id: 'st2c1s4_c2',
              text: "Demander à Al-Ghazali comment distinguer la vérité du mensonge",
              nextSceneId: 'st2c1s5b',
            },
          ],
          background: 'inner_world',
        },

        // --- st2c1s5a: La promesse de Sidq ---
        {
          id: 'st2c1s5a',
          chapterId: 'st2c1',
          title: 'La promesse de Sidq',
          narration: `Souhayl se leva, le cœur battant, et regarda Al-Ghazali droit dans les yeux — un geste d'une audace que même lui ne s'attendait pas à avoir. Mais les mots d'Al-Ghazali l'avaient touché au plus profond de son être, comme une flèche qui traverse les couches de l'ego pour atteindre l'âme.\n\n— Je promets, dit-il d'une voix tremblante mais ferme. Je promets de toujours dire la vérité dans le savoir. De ne jamais utiliser ce que j'apprends pour tromper ou mentir. De vérifier avant de parler, de reconnaître quand je ne sais pas, et de ne jamais laisser mon ego utiliser le savoir comme un outil de pouvoir.\n\nAl-Ghazali sourit — un sourire triste et beau, le sourire d'un homme qui a traversé les ténèbres et qui sait combien la lumière est précieuse.\n\n— C'est une belle promesse, Souhayl. Mais les promesses sont faciles à faire et difficiles à tenir. Le vrai test de la vérité ne vient pas quand il est facile d'être honnête — il vient quand il est difficile, quand être honnête coûte quelque chose : de la fierté, de l'amitié, de la sécurité, de l'amour. C'est dans ces moments-là que tu sauras si ta promesse est sincère.\n\nL'image d'Al-Ghazali commença à s'effacer, comme un portrait peint à l'eau sous la pluie. Les murs de la salle se fondirent, les étagères de livres disparurent, et Souhayl se retrouva de retour dans la bibliothèque souterraine, assis devant Sidi Mu'adh, le manuscrit indigo ouvert sur ses genoux.\n\nLa lumière bleue du manuscrit s'était intensifiée, et sur la page ouverte, une nouvelle inscription brillait en lettres d'argent :\n\n« الصدق منجاة — La vérité est le salut. »\n\nSidi Mu'adh posa sa main sur celle de Souhayl.\n\n— Tu viens de recevoir la première des trois leçons des Gardiens du Savoir, Souhayl. La leçon d'Al-Ghazali : le Sidq — la véracité. La prochaine fois, tu rencontreras un autre géant, et tu apprendras la deuxième leçon : l'Amana — la confiance.\n\nSouhayl serra le pendentif en argent contre sa poitrine. Il sentait la lampe briller plus fort qu'avant, comme si elle approuvait la promesse qu'il venait de faire. Les paroles d'Al-Ghazali résonnaient encore dans son esprit comme un écho dans une caverne de cristal : « Le savoir sans sincérité est comme un bel habit porté sur un cadavre. » Il ne l'oublierait jamais.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Al-Ghazali a écrit : « La sincérité est d'être le même à l'intérieur et à l'extérieur. » C'est-à-dire que ce que tu montres au monde correspond à ce que tu ressens dans ton cœur. Si tu ressens de la gratitude, montre-la. Si tu ressens du doute, avoue-le. Si tu ne sais pas, dis « je ne sais pas. » C'est cela, le Sidq — la vérité totale, sans masque, sans faux-semblant.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st2c1s6',
          background: 'inner_world',
          earnedBadgeId: 'sidq',
          lesson: {
            title: 'As-Sidq — La véracité et la sincérité',
            content:
              "Al-Ghazali, le plus grand savant de son temps, a tout quitté — sa position, sa réputation, ses biens — pour chercher la sincérité dans sa foi. Il a enseigné que le savoir sans sincérité est comme un bel habit porté sur un cadavre. Le Sidq (الصدق) est la véracité totale : être le même à l'intérieur et à l'extérieur. Le Prophète ﷺ a dit : « Soyez sincères, car la sincérité mène à la bienfaisance, et la bienfaisance mène au Paradis. »",
            quote: 'عليكم بالصدق فإن الصدق يهدي إلى البر',
            source: 'Hadith — Sahih al-Bukhari et Muslim',
          },
        },

        // --- st2c1s5b: La recherche de la vérité ---
        {
          id: 'st2c1s5b',
          chapterId: 'st2c1',
          title: 'La recherche de la vérité',
          narration: `Souhayl posa sa question avec l'honnêteté d'un enfant qui ne comprend pas encore que certaines questions sont embarrassantes : « Mais Sidi, comment fait-on pour savoir si ce qu'on dit est vrai ou faux ? Parfois, je crois dire la vérité, mais je me trompe. C'est quand même un mensonge ? »\n\nAl-Ghazali éclata de rire — un rire franc, chaleureux, qui fit trembler les parchemins sur le bureau et danser la poussière dans les rayons du soleil.\n\n— Ah ! Quelle question ! s'exclama-t-il en tapotant le genou de Souhayl avec affection. C'est LA question, Souhayl ! La question que tous les savants devraient se poser chaque jour de leur vie. Et voici la réponse que onze années de voyage m'ont apprise : il y a trois niveaux de vérité.\n\nAl-Ghazali leva trois doigts.\n\n— Premier niveau : la vérité des faits. Ce que tu dis correspond-il à la réalité ? Si tu dis « il pleut », est-ce qu'il pleut vraiment ? C'est le niveau le plus bas de la vérité — il est nécessaire, mais insuffisant.\n\nDeuxième doigt.\n\n— Deuxième niveau : la vérité de l'intention. Pourquoi dis-tu ce que tu dis ? Si tu dis la vérité pour impressionner, pour manipuler, pour blesser, ce n'est pas le Sidq — c'est l'utilisation de la vérité comme arme.\n\nTroisième doigt.\n\n— Troisième niveau : la vérité du cœur. Est-ce que tu crois vraiment à ce que tu dis ? Si tu enseignes quelque chose que tu as vérifié avec ta tête mais pas avec ton cœur, il te manque l'essentiel. La vraie vérité, Souhayl, est celle qui unit la tête et le cœur, l'intelligence et la foi, le savoir et la sagesse.\n\nSouhayl écoutait, fasciné. Chaque mot d'Al-Ghazali était comme une brique supplémentaire dans l'édifice de sa compréhension, et il sentait que cette construction, même si elle était encore fragile, avait des fondations solides.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Donc la vérité, ce n'est pas juste dire les choses comme elles sont ? C'est aussi les dire avec le bon cœur ?",
              emotion: 'neutral',
            },
            {
              characterId: 'sidimuadh',
              text: "Exactement, Souhayl. Le Prophète ﷺ a dit : « Voulez-vous que je vous indique la porte du bien ? Le jeûne est un bouclier, et la sincérité est la clé. » La sincérité — le Sidq — est la clé de tout bien. Elle ouvre les portes du savoir, de la prière, de l'amitié, de toutes les bonnes choses. Sans elle, même la vérité factuelle peut devenir un mensonge spirituel.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st2c1s6',
          background: 'inner_world',
        },

        // --- st2c1s6: Le premier mensonge ---
        {
          id: 'st2c1s6',
          chapterId: 'st2c1',
          title: 'Le premier mensonge',
          narration: `Le lendemain, à la madrasa, Souhayl fut confronté à la première véritable épreuve de sa promesse. L'enseignant de calligraphie, M. Hadj, avait organisé un concours : chaque élève devait calligraphier le même verset du Coran — la sourate Al-Ikhlas — et les trois meilleurs travaux seraient affichés au mur de la classe pour tout le mois.\n\nSouhayl adorait la calligraphie. C'était son domaine de prédilection, son jardin secret, l'endroit où son âme trouvait son expression la plus pure. Il avait pratiqué pendant des heures à la maison, sous la direction patiente de son père, et son travail était, il le savait, remarquable.\n\nMais le jour du concours, un événement inattendu se produisit. Au moment de tendre sa feuille à M. Hadj, Souhayl remarqua qu'il avait fait une erreur — minuscule, presque invisible — dans le mot « Al-Ahad ». Le « dal » (د) était légèrement trop court, et sa hampe ne s'arrondissait pas avec la grâce habituelle de son trait. Personne d'autre ne remarquerait cette erreur — pas M. Hadj, pas ses camarades, personne. Mais Souhayl la voyait, et elle lui brûlait les yeux comme un grain de sable sous une paupière.\n\nIl devait prendre une décision rapide. S'il tendait la feuille telle quelle, il gagnerait probablement le concours — l'erreur était invisible à l'œil nu. S'il demandait une nouvelle feuille et recommençait, il perdrait du temps et peut-être sa chance.\n\nEt puis, les mots d'Al-Ghazali résonnèrent dans sa tête : « La sincérité est d'être le même à l'intérieur et à l'extérieur. »\n\nSouhayl regarda sa feuille, puis regarda M. Hadj, puis regarda ses camarades qui terminaient leurs travaux les uns après les autres. Son cœur battait si fort qu'il l'entendait dans ses tempes. L'erreur minuscule le fixait, comme un œil invisible qui ne clignait jamais.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Si je tends cette feuille, personne ne verra l'erreur. Mais moi, je la vois. Et si je la vois, Allah la voit aussi. Le Sidq commence par moi-même.",
              emotion: 'determined',
            },
          ],
          choices: [
            {
              id: 'st2c1s6_c1',
              text: "Sincérité : demander une nouvelle feuille et recommencer",
              nextSceneId: 'st2c1s7a',
              badgeId: 'amana',
              isCorrect: true,
            },
            {
              id: 'st2c1s6_c2',
              text: "Tendre la feuille — personne ne verra l'erreur",
              nextSceneId: 'st2c1s7b',
            },
          ],
          background: 'classroom',
        },

        // --- st2c1s7a: La calligraphie de la vérité ---
        {
          id: 'st2c1s7a',
          chapterId: 'st2c1',
          title: 'La calligraphie de la vérité',
          narration: `Souhayl leva la main.\n\n— Monsieur Hadj, dit-il d'une voix que les autres élèves entendirent à peine, j'ai fait une erreur dans mon travail. Est-ce que je peux avoir une nouvelle feuille ?\n\nUn murmure traversa la classe. Karim, le meilleur élève en mathématiques, regarda Souhayl comme s'il était fou. Laila, la fille du boulanger du quartier, écarquilla ses yeux. M. Hadj, lui, arrêta de ramasser les feuilles et regarda Souhayl avec une attention soudaine et pénétrante.\n\n— Une erreur, Souhayl ? Où ça ? Laisse-moi voir.\n\nSouhayl tendit sa feuille. M. Hadj la regarda attentivement, inclinant la tête, plissant les yeux, cherchant l'erreur que Souhayl avait mentionnée. Après plusieurs secondes, il la trouva — le « dal » légèrement trop court.\n\n— Tu es le seul à avoir vu ça, dit M. Hadj avec un sourire qui en disait long. Personne d'autre n'aurait remarqué. Mais toi, tu as vu, et tu as dit la vérité. Souhayl, tu viens de gagner quelque chose de plus précieux que le premier prix du concours.\n\nM. Hadj lui donna une nouvelle feuille. Souhayl la prit, s'assit, et avec une concentration absolue — une concentration que seul le cœur sincère peut produire — il calligraphia la sourate Al-Ikhlas une deuxième fois. Et cette fois-ci, chaque lettre était parfaite, chaque trait était pur, chaque mot respirait la beauté de la sincérité.\n\nQuand les résultats furent proclamés, Souhayl n'eut pas le premier prix — il eut le deuxième. Mais quand M. Hadj afficha les travaux au mur, il épingla une petite note sous celui de Souhayl : « Ce travail est le deuxième du concours, mais le premier de la sincérité. »\n\nEn rentrant chez lui, Souhayl pressa le pendentif contre sa poitrine et sentit la lampe briller — plus forte qu'elle n'avait jamais brillé auparavant. Chaque promesse tenue, chaque vérité dite, chaque moment de sincérité alimentait sa lumière. Et Souhayl comprit que le vrai prix du savoir n'était pas un diplôme, ni une médaille, ni la reconnaissance des autres — c'était la paix du cœur qui vient de savoir qu'on a fait ce qui est juste, même quand personne ne regardait.`,
          dialogues: [
            {
              characterId: 'mehdi',
              text: "Ton professeur m'a raconté ce qui s'est passé, Souhayl. Je suis fier de toi. Non pas parce que tu as bien calligraphié — ça je le savais déjà — mais parce que tu as eu le courage de dire la vérité quand c'était difficile. C'est cela, le vrai savoir : savoir quand admettre ses erreurs. Ton grand-père disait toujours : « L'erreur est humaine. La reconnaître est divin. »",
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: "Souhayl, moi aussi j'ai construit un super château avec mes cubes à l'école aujourd'hui ! Je l'ai montré à la maîtresse ! Elle a dit que c'était le plus beau !",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "C'est génial, Wassim ! Montre-moi ce soir. Et devine quoi ? Je vais t'apprendre à écrire ton prénom en calligraphie arabe. وسيم — Wassim. C'est un très beau nom, tu sais.",
              emotion: 'happy',
            },
            {
              characterId: 'nawfel',
              text: "Moi aussi, je veux apprendre la calligraphie ! Souhayl, tu m'apprendras aussi, hein ?",
              emotion: 'happy',
            },
          ],
          choices: [],
          background: 'home',
          isEnding: true,
          earnedBadgeId: 'amana',
          lesson: {
            title: 'As-Sidq fi al-Amal — La sincérité dans les actes',
            content:
              "Souhayl a prouvé sa sincérité en admettant son erreur de calligraphie, même quand personne d'autre ne la voyait. C'est cela, le vrai test du Sidq : être honnête quand personne ne regarde. Le Prophète ﷺ a dit : « Adore Allah comme si tu Le voyais, car si tu ne Le vois pas, Lui te voit. » La sincérité dans les petits actes est le fondement de la sincérité dans les grandes œuvres.",
            quote: 'اعبد الله كأنك تراه فإن لم تكن تراه فإنه يراك',
            source: 'Hadith — Sahih Muslim',
          },
        },

        // --- st2c1s7b: Le poids du mensonge ---
        {
          id: 'st2c1s7b',
          chapterId: 'st2c1',
          title: 'Le poids du mensonge',
          narration: `Souhayl tendit sa feuille à M. Hadj. L'enseignant la regarda, sourit, et la classa parmi les meilleures. Souhayl gagna le premier prix — son travail fut affiché au mur avec une grande étoile dorée, et ses camarades le félicitèrent avec des applaudissements sincères.\n\nMais le soir, seul dans sa chambre, Souhayl regarda la feuille affichée dans son imagination et sentit quelque chose de désagréable dans sa poitrine — un poids, une lourdeur, comme s'il avait avalé une pierre. L'erreur était là, invisible aux autres mais flagrante à ses yeux, et chaque fois qu'il pensait à ce « dal » trop court, la pierre dans sa poitrine semblait grandir.\n\nIl se leva, marcha vers la bibliothèque et en retira un Coran. Il l'ouvrit au hasard et ses yeux tombèrent sur ce verset :\n\n« ويل للمصلين الذين هم عن صلاتهم ساهون — Malheur à ceux qui prient avec négligence. »\n\nSouhayl ferma le Coran et le rouvrit. Cette fois, un autre verset apparut :\n\n« إن الله لا يغير ما بقوم حتى يغيروا ما بأنفسهم — Allah ne change pas l'état d'un peuple tant que ce peuple ne change pas ce qu'il y a en lui-même. »\n\nSouhayl comprit. Le mensonge n'était pas dans le « dal » trop court — le mensonge était dans sa décision de le cacher. Le mensonge était dans le silence qui suivit l'erreur. Et ce silence, ce mensonge par omission, était un poison lent qui corrodaient sa certitude.\n\nLe lendemain matin, avant les cours, Souhayl alla voir M. Hadj et lui dit la vérité. L'enseignant le regarda longuement, sans dire un mot, puis sourit.\n\n— Souhayl, tu aurais pu garder le premier prix et personne n'aurait su. Mais tu es venu me voir. Tu sais ce que ça prouve ? Que la conscience ne dort jamais. Et que celui qui l'écoute est plus fort que celui qui l'ignore.\n\nLe pendentif de Souhayl pulsa doucement contre sa poitrine. La lampe brillait à nouveau, timidement, comme une flamme qui se rallume après avoir failli s'éteindre. Souhayl avait compris : le Sidq n'est pas une destination — c'est un chemin. Et sur ce chemin, il y a des chutes, des erreurs, des moments de faiblesse. Mais ce qui compte, c'est de se relever.`,
          dialogues: [
            {
              characterId: 'mehdi',
              text: "L'Imam Ali a dit : « La valeur de chaque homme est dans ce qu'il sait bien faire. » Et j'ajouterai : la valeur de chaque homme est aussi dans sa capacité à reconnaître ses erreurs. Tu as eu tort de cacher l'erreur hier, Souhayl. Mais tu as eu raison de la révéler aujourd'hui. Et le fait de corriger une erreur est plus méritoire que de ne pas en faire du tout.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st2c1s7a',
          background: 'home',
        },
      ],
      lessons: [],
    },

  ],
};
