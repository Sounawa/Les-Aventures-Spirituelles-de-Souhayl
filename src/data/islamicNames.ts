// Islamic Names Data — Les Plus Beaux Noms
// 25+ Islamic names with meanings in French

export interface IslamicName {
  id: string;
  name: string;          // Arabic name
  nameAr: string;        // Arabic script
  nameFr: string;        // French transliteration
  meaning: string;       // Meaning in French
  origin: string;        // Origin / region
  gender: 'garcon' | 'fille';
  popularity: number;    // 1-5 stars
}

export const islamicNames: IslamicName[] = [
  {
    id: 'muhammad',
    name: 'محمد',
    nameAr: 'محمد',
    nameFr: 'Mohamed',
    meaning: 'Celui qui est digne de louanges — le nom du Prophète ﷺ, le plus utilisé dans le monde musulman.',
    origin: 'Arabe',
    gender: 'garcon',
    popularity: 5,
  },
  {
    id: 'souhayl',
    name: 'سهيل',
    nameAr: 'سهيل',
    nameFr: 'Souhayl',
    meaning: 'L\'étoile Canopus — une des plus brillantes étoiles du ciel, symbole de lumière et de guidance.',
    origin: 'Arabe',
    gender: 'garcon',
    popularity: 4,
  },
  {
    id: 'wassim',
    name: 'وسيم',
    nameAr: 'وسيم',
    nameFr: 'Wassim',
    meaning: 'Beau, gracieux — celui qui possède une belle apparence et un beau caractère.',
    origin: 'Arabe',
    gender: 'garcon',
    popularity: 4,
  },
  {
    id: 'nawfel',
    name: 'نوفل',
    nameAr: 'نوفل',
    nameFr: 'Nawfel',
    meaning: 'Généreux, noble — celui qui donne avec largesse et possède un grand cœur.',
    origin: 'Arabe',
    gender: 'garcon',
    popularity: 3,
  },
  {
    id: 'fatima',
    name: 'فاطمة',
    nameAr: 'فاطمة',
    nameFr: 'Fatima',
    meaning: 'Celle qui se sevre — la fille bien-aimée du Prophète ﷺ, surnommée « al-Zahra » (la resplendissante).',
    origin: 'Arabe',
    gender: 'fille',
    popularity: 5,
  },
  {
    id: 'khadija',
    name: 'خديجة',
    nameAr: 'خديجة',
    nameFr: 'Khadija',
    meaning: 'Née prématurément — la première épouse du Prophète ﷺ, mère des croyants, femme d\'affaires exemplaire.',
    origin: 'Arabe',
    gender: 'fille',
    popularity: 5,
  },
  {
    id: 'aisha',
    name: 'عائشة',
    nameAr: 'عائشة',
    nameFr: 'Aïcha',
    meaning: 'Celle qui vit — épouse du Prophète ﷺ, grande savante et mémorisatrice du hadith.',
    origin: 'Arabe',
    gender: 'fille',
    popularity: 5,
  },
  {
    id: 'ibrahim',
    name: 'إبراهيم',
    nameAr: 'إبراهيم',
    nameFr: 'Ibrahim',
    meaning: 'Père de nombreuses nations — le prophète Abraham, ami intime d\'Allah (Khalil Allah), bâtisseur de la Kaaba.',
    origin: 'Hébreu/Arabe',
    gender: 'garcon',
    popularity: 5,
  },
  {
    id: 'musa',
    name: 'موسى',
    nameAr: 'موسى',
    nameFr: 'Moussa',
    meaning: 'Tiré des eaux — le prophète Moïse, le plus cité dans le Coran, celui qui a parlé avec Allah.',
    origin: 'Hébreu/Arabe',
    gender: 'garcon',
    popularity: 5,
  },
  {
    id: 'isa',
    name: 'عيسى',
    nameAr: 'عيسى',
    nameFr: 'Îssa',
    meaning: 'Jésus — le prophète Issa, miraculeusement né sans père, esprit venant d\'Allah (Rouh Allah).',
    origin: 'Hébreu/Arabe',
    gender: 'garcon',
    popularity: 4,
  },
  {
    id: 'yusuf',
    name: 'يوسف',
    nameAr: 'يوسف',
    nameFr: 'Youssouf',
    meaning: 'Que Dieu augmente — le prophète Joseph, connu pour sa beauté et sa patience extraordinaires.',
    origin: 'Hébreu/Arabe',
    gender: 'garcon',
    popularity: 5,
  },
  {
    id: 'amin',
    name: 'أمين',
    nameAr: 'أمين',
    nameFr: 'Amine',
    meaning: 'Digne de confiance, loyal — l\'un des surnoms du Prophète ﷺ, « Al-Amin » le digne de confiance.',
    origin: 'Arabe',
    gender: 'garcon',
    popularity: 4,
  },
  {
    id: 'salma',
    name: 'سلمى',
    nameAr: 'سلمى',
    nameFr: 'Salma',
    meaning: 'Pacifique, en sécurité — celle qui apporte la paix et la sérénité autour d\'elle.',
    origin: 'Arabe',
    gender: 'fille',
    popularity: 4,
  },
  {
    id: 'hamza',
    name: 'حمزة',
    nameAr: 'حمزة',
    nameFr: 'Hamza',
    meaning: 'Le lion — oncle du Prophète ﷺ, héros et martyr de la bataille d\'Uhud, « le lion d\'Allah ».',
    origin: 'Arabe',
    gender: 'garcon',
    popularity: 5,
  },
  {
    id: 'omar',
    name: 'عمر',
    nameAr: 'عمر',
    nameFr: 'Omar',
    meaning: 'Longévité, vie prospère — le deuxième calife, grand juste, surnommé « Al-Farouq ».',
    origin: 'Arabe',
    gender: 'garcon',
    popularity: 5,
  },
  {
    id: 'ali',
    name: 'علي',
    nameAr: 'علي',
    nameFr: 'Ali',
    meaning: 'Le plus élevé, le noble — cousin et gendre du Prophète ﷺ, lion d\'Allah, savant éminent.',
    origin: 'Arabe',
    gender: 'garcon',
    popularity: 5,
  },
  {
    id: 'hassan',
    name: 'حسن',
    nameAr: 'حسن',
    nameFr: 'Hassan',
    meaning: 'Beau, excellent — petit-fils du Prophète ﷺ, « le maître de la jeunesse du Paradis ».',
    origin: 'Arabe',
    gender: 'garcon',
    popularity: 5,
  },
  {
    id: 'hussein',
    name: 'حسين',
    nameAr: 'حسين',
    nameFr: 'Hussein',
    meaning: 'Petit beau, très bon — petit-fils du Prophète ﷺ, héros de Kerbala, symbole de courage.',
    origin: 'Arabe',
    gender: 'garcon',
    popularity: 5,
  },
  {
    id: 'layla',
    name: 'ليلى',
    nameAr: 'ليلى',
    nameFr: 'Leïla',
    meaning: 'La nuit — nom poétique, évoque la beauté de la nuit étoilée et la douceur du soir.',
    origin: 'Arabe',
    gender: 'fille',
    popularity: 4,
  },
  {
    id: 'maryam',
    name: 'مريم',
    nameAr: 'مريم',
    nameFr: 'Maryam',
    meaning: 'Marie — la mère du prophète Îssa, seule femme nommée dans le Coran, « Sidrat al-Muntaha ».',
    origin: 'Hébreu/Arabe',
    gender: 'fille',
    popularity: 5,
  },
  {
    id: 'zayd',
    name: 'زيد',
    nameAr: 'زيد',
    nameFr: 'Zayd',
    meaning: 'Celui qui grandit, qui prospère — le fils adoptif du Prophète ﷺ, premier commandant musulman.',
    origin: 'Arabe',
    gender: 'garcon',
    popularity: 3,
  },
  {
    id: 'bilal',
    name: 'بلال',
    nameAr: 'بلال',
    nameFr: 'Bilal',
    meaning: 'Rafraîchissement — le premier muezzin de l\'Islam, symbole d\'égalité et de constance.',
    origin: 'Arabe/Éthiopien',
    gender: 'garcon',
    popularity: 4,
  },
  {
    id: 'noor',
    name: 'نور',
    nameAr: 'نور',
    nameFr: 'Nour',
    meaning: 'Lumière — la lumière divine qui guide les cœurs, « Allah est la lumière des cieux et de la terre ».',
    origin: 'Arabe',
    gender: 'fille',
    popularity: 5,
  },
  {
    id: 'zakariyya',
    name: 'زكريا',
    nameAr: 'زكريا',
    nameFr: 'Zakaria',
    meaning: 'Celui dont Dieu se souvient — père du prophète Yahya, homme de prière et de dévotion.',
    origin: 'Hébreu/Arabe',
    gender: 'garcon',
    popularity: 3,
  },
  {
    id: 'amina',
    name: 'آمنة',
    nameAr: 'آمنة',
    nameFr: 'Amina',
    meaning: 'Digne de confiance, en sécurité — la mère du Prophète ﷺ, femme pure et vertueuse.',
    origin: 'Arabe',
    gender: 'fille',
    popularity: 4,
  },
  {
    id: 'umar',
    name: 'عثمان',
    nameAr: 'عثمان',
    nameFr: 'Othman',
    meaning: 'Le jeune serpent — le troisième caliph, « Dhun-Nurayn » (celui aux deux lumières), généreux.',
    origin: 'Arabe',
    gender: 'garcon',
    popularity: 4,
  },
  {
    id: 'ruqayya',
    name: 'رقية',
    nameAr: 'رقية',
    nameFr: 'Roukaya',
    meaning: 'L\'élévation, le lever — fille du Prophète ﷺ, femme de Othman, douce et pieuse.',
    origin: 'Arabe',
    gender: 'fille',
    popularity: 3,
  },
  {
    id: 'idris',
    name: 'إدريس',
    nameAr: 'إدريس',
    nameFr: 'Idriss',
    meaning: 'Le studieux — le prophète Hénoch, premier à avoir écrit avec le calame.',
    origin: 'Arabe',
    gender: 'garcon',
    popularity: 3,
  },
];

/**
 * Get all Islamic names
 */
export function getIslamicNames(): IslamicName[] {
  return islamicNames;
}

/**
 * Filter names by search query (matches on name, nameFr, nameAr, meaning)
 */
export function filterByName(query: string, names: IslamicName[] = islamicNames): IslamicName[] {
  const q = query.toLowerCase().trim();
  if (!q) return names;
  return names.filter(
    (n) =>
      n.nameFr.toLowerCase().includes(q) ||
      n.name.toLowerCase().includes(q) ||
      n.nameAr.includes(q) ||
      n.meaning.toLowerCase().includes(q)
  );
}
