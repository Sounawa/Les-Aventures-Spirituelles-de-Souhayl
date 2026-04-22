import type { Tome } from '@/types/story';

export const tome5_souhayl: Tome = {
  id: 'souhayl_tome5',
  number: 5,
  title: 'Le Livre des Vivants',
  titleAr: 'كتاب الأحياء',
  subtitle: "La Sagesse de l'Héritage",
  description:
    "Dans ce tome final, Souhayl reçoit la plus grande révélation : sa propre grand-mère paternelle, Aïcha, fut autrefois gardienne de la bibliothèque. Sidi Mu'adh prépare sa succession. À travers une dernière rencontre avec le Prophète Muhammad ﷺ dans un rêve, Souhayl comprend que le savoir véritable est celui qui transforme le cœur. Il devient le nouveau gardien principal, prêt à transmettre le flambeau.",
  theme: "Al-Hikma — La Sagesse et l'Héritage",
  coverImage: '/images/souhayl-tome5-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — Le Secret de Grand-Mère (سر الجدة)
    // ============================================================
    {
      id: 'st5c1',
      tomeId: 'souhayl_tome5',
      number: 1,
      title: 'Le Secret de Grand-Mère',
      titleAr: 'سر الجدة',
      scenes: [
        // --- st5c1s1: Un appel grave ---
        {
          id: 'st5c1s1',
          chapterId: 'st5c1',
          title: 'Un appel grave',
          narration: `L'air de Fès ce matin-là portait une odeur inhabituelle — un mélange de pluie fraîche sur la terre sèche et d'encens de benjoin qui montait de quelque part dans la médina, comme si les habitants sentaient que quelque chose de grand allait se produire et que les cœurs devaient être préparés. Souhayl marchait seul dans les ruelles pavées, son cartable sur l'épaule, ses pas résonnant sur les galets noirs et blancs. Il avait grandi depuis sa première visite à la bibliothèque — ses épaules s'étaient élargies, sa démarche était plus assurée, et ses yeux, toujours aussi curieux, portaient désormais une profondeur que seuls les enfants qui ont vu l'invisible peuvent avoir.\n\nDepuis des mois, il fréquentait la bibliothèque souterraine régulièrement. Sidi Mu'adh lui avait enseigné l'histoire des grands savants de l'Islam — l'Imam Malik, Fatima Al-Fihri, Ibn Khaldoun, Al-Ghazali, Ibn Sina — et chaque leçon était comme un voyage dans le temps, une plongée dans un océan de sagesse dont les vagues ne cessaient jamais de se former. Souhayl avait appris à lire la calligraphie ancienne, à identifier les différents styles de reliure, à comprendre les chaînes de transmission des hadiths. Mais surtout, il avait appris que le savoir n'était pas seulement dans les livres — il était dans le cœur de celui qui les lisait avec sincérité.\n\nCe matin, cependant, quelque chose était différent. En passant devant la porte de fer forgé près du mur ouest de la Qarawiyyin, Souhayl sentit une vibration plus forte que d'habitude — non pas un murmure cette fois, mais un appel, clair et pressant, comme si les pierres elles-mêmes criaient son nom. La porte vibrait légèrement sous ses doigts, et l'escalier descendant brillait d'une lumière plus intense, presque dorée, comme si le soleil lui-même avait décidé de pénétrer sous terre pour illuminer ce qui allait se passer.\n\nSouhayl descendit les marches familières, son cœur battant un rythme qu'il ne reconnaissait pas — ni peur, ni excitation, mais quelque chose de plus profond, comme le sentiment qu'on éprouve la veille d'une grande fête sacrée, ce mélange de recueillement et d'anticipation qui fait trembler l'âme. Les lampes à huile sur les murs brillaient plus fort à son passage, chacune s'allumant comme une bougie qu'on allume pour un invité de marque.\n\nAu fond de la salle circulaire, Sidi Mu'adh l'attendait. Mais ce n'était pas le Sidi Mu'adh habituel, assis sereinement sur son tapis de prière, un livre ouvert sur les genoux. Le vieillard était debout, adossé à l'étagère centrale, et son visage portait une expression que Souhayl n'avait jamais vue — une gravité solennelle, tempérée par une tendresse infinie, comme celle d'un père qui doit annoncer à son enfant la nouvelle la plus importante de sa vie. Ses yeux verts, d'ordinaire si calmes, brillaient d'une lueur troublée, et ses mains, croisées devant lui, tremblaient légèrement.\n\n— Souhayl, dit-il d'une voix plus basse que d'habitude, assieds-toi. Ce que j'ai à te dire aujourd'hui est la chose la plus importante que tu entendras jamais dans cette bibliothèque. Peut-être la plus importante de toute ta vie.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Sidi Mu'adh, qu'est-ce qui se passe ? Vous avez l'air... différent ce matin. La bibliothèque aussi — elle vibre comme jamais auparavant.",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Parce que ce jour est annoncé depuis bien longtemps, mon enfant. La bibliothèque le sait. Les pierres le savent. Et moi, je l'attendais depuis le premier jour où tu as franchi cette porte. Assieds-toi et écoute avec ton cœur, pas seulement avec tes oreilles.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st5c1s2',
          background: 'inner_world',
        },

        // --- st5c1s2: Le portrait d'Aïcha ---
        {
          id: 'st5c1s2',
          chapterId: 'st5c1',
          title: "Le portrait d'Aïcha",
          narration: `Sidi Mu'adh marcha lentement vers le fond de la bibliothèque, vers une section que Souhayl n'avait jamais explorée — un alcôve caché derrière un rideau de soie bleu marine brodé de fils d'or en forme d'étoiles et de croissants. Le vieillard écarta le rideau de la main, et Souhayl découvrit un petit espace circulaire, éclairé par une seule lampe qui pendait du plafond comme une étoile captive, dont la lumière tombait sur un pupitre en bois de cèdre sculpté de motifs floraux d'une délicatesse infinie.\n\nSur le pupitre reposait un cadre en argent aux reflets ancien, dont les bords étaient ornés d'une calligraphie coufique si fine qu'elle ressemblait à de la dentelle de métal. À l'intérieur du cadre, un portrait — non pas une peinture, mais une image qui semblait vivante, animée d'une lumière intérieure, comme si quelqu'un avait capturé l'essence même de la personne représentée et l'avait enfermée dans ce cadre pour l'éternité.\n\nSouhayl s'approcha et son souffle se coupa. Le portrait représentait une femme d'âge mûr, aux cheveux blancs coiffés avec élégance sous un voile de soie verte, au visage ovale et aux traits réguliers qui dégageaient une autorité naturelle et une douceur immense. Mais ce qui saisit Souhayl au cœur, ce furent les yeux — des yeux d'un brun profond et chaud, des yeux qui souriaient même quand les lèvres étaient sérieuses, des yeux qu'il avait vus toute sa vie, chaque jour, dans le miroir de sa propre chambre, dans le reflet des fontaines de la médina, dans le regard de son propre père.\n\n— C'est... murmura-t-il, sa voix ne parvenant pas à sortir normalement de sa gorge.\n\n— Oui, dit Sidi Mu'adh doucement. C'est ta grand-mère paternelle. Aïcha Benali, née Aïcha Berrada. Ta grand-mère, Souhayl. Elle fut gardienne de cette bibliothèque pendant plus de quarante ans, bien avant que ton père ne naisse, bien avant que moi-même n'en devienne le protecteur. Elle fut l'une des plus grandes gardiennes que cette bibliothèque ait jamais connues.\n\nSouhayl sentit ses genoux trembler. Il posa sa main sur le bord du pupitre pour ne pas tomber, et ses yeux se remplirent de larmes qu'il ne chercha pas à retenir. Sa grand-mère Aïcha — il l'avait connue, bien sûr, il avait des souvenirs d'elle, une femme âgée au sourire doux qui lui donnait des dattes en lui racontant des histoires du temps jadis. Elle était morte quand il avait cinq ans, et il se souvenait de son odeur — l'encens et le jasmin — et de ses mains, douces et ridées, qui caressaient ses cheveux le soir avant qu'il ne s'endorme.\n\n— Mais... mais personne ne m'a jamais parlé de ça, dit Souhayl d'une voix étouffée. Même pas Baba. Comment est-ce possible ?\n\n— Ton père et ta mère le savaient, répondit Sidi Mu'adh. Ta mère le savait parce que ta grand-mère Aïcha le lui avait dit, et ton père le savait parce qu'il avait grandi dans cette vérité — sa propre mère était gardienne, et il avait vu les signes dès son enfance. Mais ils ont fait un choix, Souhayl. Un choix difficile mais sage. Ils ont décidé de ne rien te dire, de te laisser découvrir la bibliothèque par toi-même, de te laisser entendre l'appel du savoir avec ton propre cœur.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Lalla Aïcha... ma grand-mère était gardienne ? Mais pourquoi personne ne m'a jamais rien dit ? J'ai grandi sans savoir que le sang des gardiens coulait dans mes veines !",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Parce que le savoir qui est donné est oublié, mon enfant, mais le savoir qui est découvert est gravé dans le cœur pour toujours. Ta grand-mère Aïcha l'avait demandé elle-même avant de partir : « Ne dites rien à l'enfant. Laissez les pierres lui parler. Laissez le manuscrit le trouver. Laissez-le choisir le chemin avec son propre cœur. » C'était sa dernière volonté, Souhayl, et tes parents l'ont respectée avec une patience admirable.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Elle avait demandé ça ? Lalla Aïcha savait que je... qu'un jour...",
              emotion: 'sad',
            },
            {
              characterId: 'sidimuadh',
              text: "Elle le savait. Les gardiens voient loin, Souhayl — plus loin que le temps présent. Ta grand-mère voyait en toi, avant même ta naissance, le prochain gardien. Elle a prié pour toi toute sa vie, et ses prières accompagnent encore chacun de tes pas dans cette bibliothèque. Regarde — là, sur le pupitre, à côté du portrait.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st5c1s3',
          background: 'inner_world',
        },

        // --- st5c1s3: La confrontation ---
        {
          id: 'st5c1s3',
          chapterId: 'st5c1',
          title: 'La confrontation',
          narration: `Sur le pupitre, à côté du portrait d'Aïcha, reposait un petit carnet à la couverture de cuir brun, usé par le temps mais encore solide, dont les pages étaient remplies d'une écriture fine et régulière — l'écriture de sa grand-mère. Souhayl reconnut immédiatement les lettres inclinées et délicates, car sa mère conservait encore des lettres que Lalla Aïcha lui avait écrites, et Souhayl les avait regardées des dizaines de fois, fasciné par la beauté de chaque mot.\n\nIl ouvrit le carnet avec des mains tremblantes. La première page portait une date — il y a plus de cinquante ans — et une invocation : « Bismillah ar-Rahman ar-Rahim. Ô Allah, fais de moi une gardienne digne de ce dépôt sacré. Fais que ma main préserve ce que mon cœur a appris, et que ma vie soit un pont entre le passé et l'avenir du savoir. » En dessous, une ligne plus personnelle : « Un jour, mon petit-fils lira ces mots. Qu'Allah le guide sur le chemin de la sagesse. »\n\nSouhayl ferma le carnet contre sa poitrine et le serra si fort que ses jointures blanchirent. Les larmes coulaient librement sur ses joues maintenant, et il ne cherchait plus à les cacher. Des larmes de surprise, de gratitude, de tristesse — tristesse de n'avoir jamais su, de n'avoir jamais pu poser ces questions à sa grand-mère de son vivant, de n'avoir jamais pu lui dire qu'il comprenait maintenant pourquoi elle lui racontait ces histoires, pourquoi elle lui donnait des dattes avec une tendresse si particulière, pourquoi ses yeux brillaient d'une fierté indicible quand il apprenait à lire.\n\nSidi Mu'adh posa sa main sur l'épaule de Souhayl et resta silencieux un long moment, laissant le garçon vivre son émotion sans interruption. Les lampes de la bibliothèque oscillaient doucement, comme si elles aussi pleuraient avec lui, et un parfum de jasmin et de cèdre — l'odeur de Lalla Aïcha — emplit la salle comme un souvenir vivant.\n\n— Va trouver ton père ce soir, dit finalement Sidi Mu'adh. Pose-lui les questions que tu as sur le cœur. Il a porté ce secret pendant des années, Souhayl, et ce n'est pas un fardeau léger que de cacher à son propre fils l'héritage de sa lignée. Il mérite que tu lui parles avec le même amour que ta grand-mère aurait eu pour toi.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "« Un jour, mon petit-fils lira ces mots... » Elle savait. Elle savait tout. Et Baba... il a gardé ça pendant toutes ces années. Sidi Mu'adh, pourquoi n'ont-ils pas fini par me le dire ? J'aurais aimé connaître cette vérité plus tôt.",
              emotion: 'sad',
            },
            {
              characterId: 'sidimuadh',
              text: "Demande-leur ce soir, Souhayl. Ils ont leurs raisons, et ces raisons sont profondes, sincères et remplies d'amour. Va, mon enfant. Et souviens-toi : la confiance est la fondation de toute chose. Sans elle, même la plus belle des maisons s'effondre.",
              emotion: 'wise',
            },
          ],
          choices: [
            {
              id: 'st5c1s3_c1',
              text: "Retrouver son père avec douceur — la confiance demande de l'écoute",
              nextSceneId: 'st5c1s4a',
              badgeId: 'amana',
              isCorrect: true,
            },
            {
              id: 'st5c1s3_c2',
              text: "Demande des explications avec émotion — il a le droit de comprendre",
              nextSceneId: 'st5c1s4b',
            },
          ],
          background: 'inner_world',
        },

        // --- st5c1s4a: La confiance des parents ---
        {
          id: 'st5c1s4a',
          chapterId: 'st5c1',
          title: 'La confiance des parents',
          narration: `Souhayl rentra à la maison ce soir-là avec le carnet de sa grand-mère serré contre sa poitrine comme un trésor qu'il craignait de perdre. Le ciel au-dessus de Fès était d'un violet profond, traversé de nuages dorés par le soleil couchant, et le muezzin appelait à la prière du Maghrib avec une voix qui résonnait dans toute la médina comme un fil d'or tendu entre les minarets.\n\nEn franchissant le seuil de la maison, Souhayl trouva son père dans le salon, assis sur le tapis de prière, son chapelet entre les doigts, les yeux mi-clos. Mehdi Benali avait quarante-deux ans, une barbe poivre et sel soigneusement taillée, et des yeux — les mêmes yeux bruns et chaleureux que Souhayl avait vus dans le portrait de Lalla Aïcha — qui s'ouvrirent dès que son fils entra. Il n'avait pas besoin de parler. En voyant le carnet de cuir brun que Souhayl tenait dans ses mains tremblantes, il comprit tout. Son visage se décomposa un instant — une fraction de seconde où la surprise, la tristesse et la fierté se mêlèrent — puis il se reprit et sourit, un sourire qui ressemblait étrangement à celui de sa propre mère.\n\n— Tu as trouvé le carnet, dit-il doucement. Sidi Mu'adh t'a montré le portrait.\n\nSouhayl s'assit en face de son père, les jambes croisées, le carnet entre eux sur le tapis. Aziza apparut dans l'encadrement de la porte, un verre de thé à la menthe à la main, et son visage s'illumina d'un sourire triste et heureux à la fois — elle avait attendu ce moment pendant des années, et sa patience était sur le point d'être récompensée. Nawfel et Wassim, attirés par la gravité de l'atmosphère, s'approchèrent silencieusement et s'assirent près de leur mère, les yeux grands ouverts.\n\n— Baba, dit Souhayl d'une voix calme mais tremblante, pourquoi ne m'avez-vous jamais rien dit ? Je comprends que Lalla Aïcha ait demandé de me laisser découvrir la bibliothèque seul. Mais elle est partie depuis des années. Vous auriez pu me parler après. J'aurais aimé savoir que je portais en moi l'héritage d'une gardienne. J'aurais aimé savoir que mes racines plongent dans cette terre sacrée.\n\nMehdi posa son chapelet et prit le carnet entre ses mains. Il le feuilleta lentement, ses yeux s'arrêtant sur certaines pages, et Souhayl vit des larmes se former dans les yeux de son père — son père qui ne pleurait jamais, son père qui était fort comme les murailles de la médina, son père qui portait le monde sur ses épaules sans jamais se plaindre.\n\n— Mon fils, dit Mehdi d'une voix épaissie par l'émotion, ta grand-mère était la personne la plus sage que j'aie jamais connue. Quand elle m'a dit, sur son lit de mort, qu'elle avait été gardienne de la bibliothèque, qu'elle avait protégé les manuscrits pendant quarante ans, qu'elle avait prié pour que son petit-fils reprenne le flambeau — j'ai été submergé. Et quand elle m'a demandé de ne rien te dire, de te laisser trouver ton propre chemin vers le savoir, j'ai promis. Parce qu'une promesse faite à une mère mourante est un pacte sacré — un amana que seul Allah peut juger.\n\nAziza s'assit à côté de son mari et posa sa main sur la sienne.\n\n— Nous avons eu si peur, ajouta-t-elle. Peur de te trop influencer, peur que tu acceptes cette responsabilité par devoir envers nous plutôt que par amour du savoir. Chaque fois que tu partais explorer la médina, chaque fois que tu posais des questions sur la Qarawiyyin, mon cœur battait si fort... Mais nous avions foi en toi, Souhayl. Nous savions que le sang de ta grand-mère coulait dans tes veines et que, tôt ou tard, le chemin te mènerait là où tu devais aller.\n\nSouhayl regarda son père, sa mère, puis ses frères Nawfel et Wassim qui observaient la scène sans comprendre pleinement mais en sentant l'importance. Puis il regarda le carnet de Lalla Aïcha, ouvert sur la page où sa grand-mère avait écrit : « Un jour, mon petit-fils lira ces mots. »\n\n— Je vous pardonne, dit-il simplement. Et je vous remercie. Vous m'avez donné le plus beau cadeau — le cadeau de choisir par moi-même. C'est la plus grande forme de confiance qu'un parent puisse offrir à son enfant. Lalla Aïcha avait raison. Le savoir que j'ai découvert par moi-même est gravé dans mon cœur pour toujours. Et personne ne pourra jamais me l'enlever.`,
          dialogues: [
            {
              characterId: 'mehdi',
              text: "Ta grand-mère Aïcha était ma mère, Souhayl. Et ma mère, même malade, même affaiblie, était plus forte que n'importe qui. Elle m'a dit : « Ne dis rien à l'enfant. Laisse les pierres de Fès lui murmurer le secret. S'il est digne, il entendra. S'il entend, il viendra. Et s'il vient, il sera le gardien que j'ai prié pour qu'il devienne. » Comment aurais-je pu désobéir à ma mère, mon fils ? Comment aurais-je pu trahir la confiance — l'amana — qu'elle m'a accordée ?",
              emotion: 'sad',
            },
            {
              characterId: 'aziza',
              text: "C'était dur, Souhayl. Chaque nuit, je priais pour que tu trouves le chemin. Ton père et moi en parlions, tard le soir, à voix basse, et nous demandions à Allah de te guider. Et Il t'a guidé, mon fils. Regarde où tu es aujourd'hui. Regarde ce que tu es devenu. Ta grand-mère sourirait si elle te voyait.",
              emotion: 'happy',
            },
            {
              characterId: 'nawfel',
              text: "Lalla Aïcha... la gardienne ? Notre propre grand-mère ? C'est vrai ça ? C'est comme dans les histoires !",
              emotion: 'surprised',
            },
            {
              characterId: 'wassim',
              text: "Et moi ? Moi aussi j'ai le sang de Lalla Aïcha ? Je pourrais être gardien aussi un jour ?",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "Le sang de Lalla Aïcha coule dans nos veines, Wassim. Mais le plus important, ce n'est pas le sang — c'est le cœur. Un cœur sincère vaut plus que mille lignées. Et toi, tu as le plus beau des cœurs.",
              emotion: 'happy',
            },
          ],
          choices: [],
          background: 'home',
          isEnding: true,
          earnedBadgeId: 'amana',
          lesson: {
            title: "Al-Amana — Le dépôt sacré de la confiance",
            content:
              "Le mot arabe « amana » (أمانة) signifie le dépôt sacré, la confiance, la responsabilité qu'on reçoit et qu'on doit protéger. Dans ce chapitre, Souhayl découvre que ses parents ont porté le secret de sa grand-mère comme un amana — une confiance sacrée qu'ils n'ont pas trahie, même quand cela était difficile. Le Prophète ﷺ a dit que la confiance sera la première chose que les gens perdront le Jour du Jugement. La protéger est donc l'un des plus grands actes de foi. Souhayl apprend aussi que la confiance fonctionne dans les deux sens : ses parents lui ont fait confiance en le laissant découvrir le chemin par lui-même, et il leur rend cette confiance en pardonnant leur silence.",
            quote: 'إن الأمانة نادت من قعر بيتها...',
            source: 'Hadith — Musnad Ahmad',
          },
        },

        // --- st5c1s4b: Le droit de comprendre ---
        {
          id: 'st5c1s4b',
          chapterId: 'st5c1',
          title: 'Le droit de comprendre',
          narration: `Souhayl rentra à la maison ce soir-là avec le carnet de sa grand-mère serré contre sa poitrine, le cœur gonflé d'émotions contradictoires — de la fierté pour son héritage, de la gratitude pour sa grand-mère, mais aussi une pointe de frustration, un sentiment d'injustice qu'il essayait de maîtriser sans y parvenir complètement. Il avait neuf ans, bientôt dix, et il avait appris une chose importante au cours de ses aventures dans la bibliothèque : la vérité est un droit, et celui qui la retient, même avec les meilleures intentions du monde, prive l'autre de sa liberté.\n\nEn franchissant le seuil de la maison, il trouva son père dans le salon. Mehdi leva les yeux, vit le carnet, et son visage pâlit légèrement — un changement si subtil que seul un enfant qui connaît son père par cœur aurait pu le remarquer. Souhayl s'assit en face de lui et posa le carnet entre eux sans un mot.\n\n— Baba, dit-il, et sa voix tremblait malgré ses efforts pour rester calme. J'ai découvert la vérité aujourd'hui. Lalla Aïcha était gardienne de la bibliothèque. Et vous le saviez. Vous le saviez tous les deux. Vous avez gardé ce secret pendant des années — des années, Baba ! — pendant que moi, je cherchais, je découvrais, je me demandais pourquoi les pierres murmuraient mon nom. Et vous, vous saviez tout et vous ne me disiez rien.\n\nMehdi baissa la tête. Ses épaules, si larges et si solides, s'affaissèrent un instant sous le poids de la vérité révélée, et Souhayl vit son père — son héros, son modèle, l'homme le plus fort qu'il connaisse — vaciller comme un arbre sous un vent soudain.\n\n— Mon fils... commença Mehdi.\n\n— Non, Baba. Laisse-moi finir. Je ne suis pas en colère. Je suis... blessé. Blessé de ne pas avoir su. Blessé de n'avoir pas pu poser ces questions à Lalla Aïcha de son vivant. Blessé de realiser que chaque fois que vous me regardiez en silence, vous portiez un secret qui m'aurait rendu plus fort si je l'avais connu. Lalla Aïcha a peut-être eu ses raisons. Mais elle n'est plus là, Baba. Et vous, vous auriez pu me parler.\n\nUn silence lourd tomba sur la pièce. Aziza apparut dans l'encadrement de la porte, ses mains posées sur ses hanches, ses yeux brillants de larmes contenues. Nawfel et Wassim, sensibles à la tension, se blottirent contre leur mère.\n\n— Tu as raison, dit Mehdi finalement, et sa voix se brisa comme une branche sèche. Tu as raison, Souhayl. Nous aurions dû te le dire. Après le décès de ta grand-mère, j'ai hésité pendant des mois, et puis la peur a pris le dessus — peur de te décevoir, peur que le poids de cet héritage soit trop lourd pour tes épaules, peur de changer la manière dont tu me regardais. J'ai eu tort. Le secret n'a protégé personne — il a seulement retardé ce qui était inévitable. Ton cœur était prêt, et moi, j'étais trop lâche pour le voir.\n\nSouhayl regarda son père, et derrière les larmes qui brouillaient sa vue, il vit quelque chose qu'il n'avait jamais vu — la vulnérabilité d'un homme qui avoue sa faiblesse devant son enfant. Et dans cette vulnérabilité, Souhayl trouva quelque chose de plus précieux que n'importe quelle vérité : l'humilité. Son père, ce géant, ce pilier, s'abaissait devant lui non pas par faiblesse, mais par amour — l'amour d'un parent qui reconnaît son erreur et demande pardon à son enfant.\n\n— Je vous pardonne, Baba. Et toi aussi, maman. Personne n'est parfait, et vous avez fait de votre mieux. Mais promettez-moi une chose : à partir de maintenant, plus de secrets entre nous. L'amana — la confiance — va dans les deux sens.\n\nMehdi serra son fils dans ses bras, et les deux hommes pleurèrent ensemble, le père et le fils, reliés par le sang de Lalla Aïcha et par la promesse d'un avenir sans ombre entre eux.`,
          dialogues: [
            {
              characterId: 'mehdi',
              text: "Tu as raison, Souhayl. J'ai eu tort de garder le silence si longtemps. J'ai laissé la peur me dicter ma conduite au lieu de la confiance. Ta grand-mère me pardonne, j'espère. Et toi, mon fils, peux-tu pardonner à un vieux père qui a voulu te protéger mais a fini par te blesser ?",
              emotion: 'sad',
            },
            {
              characterId: 'souhayl',
              text: "Je vous pardonne, Baba. L'amana, la confiance, va dans les deux sens. Vous m'avez donné le droit de découvrir par moi-même, et je vous donne le droit de vous tromper. Nous sommes une famille, et les familles se pardonnent.",
              emotion: 'happy',
            },
            {
              characterId: 'aziza',
              text: "C'est la plus belle chose que j'aie entendue, Souhayl. Ta grand-mère serait si fière de toi. Elle disait toujours : « Le vrai savoir, c'est de savoir pardonner. » Tu as appris sa leçon mieux que n'importe quel livre ne pourrait l'enseigner.",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'st5c1s4a',
          background: 'home',
        },
      ],
      lessons: [],
    },

  ],
};
