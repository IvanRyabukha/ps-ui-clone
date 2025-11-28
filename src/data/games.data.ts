export const GAMES_DATA = [
  // --- PS STORE TILE ---
  {
    title:
      'PlayStation Store',
    slug: 'playstation-store',
    coverImage:
      '/images/covers/ps-store-cover.jpg',
    bgImage:
      '/images/backgrounds/ps-store-bg.jpg',
    platform: 'PS5',
  },

  // --- MAIN GAMES ---
  {
    title:
      'Final Fantasy VII Remake',
    slug: 'final-fantasy-vii-remake',
    coverImage:
      '/images/covers/ff-remake-cover.jpg',
    bgImage:
      '/images/backgrounds/final-fantasy-vii-remake.jpg',
    platform: 'PS5',
  },
  {
    title:
      'Ghost of Tsushima',
    slug: 'ghost-of-tsushima',
    coverImage:
      '/images/covers/ghost-of-tsushima-game.jpg',
    bgImage:
      '/images/backgrounds/ghost-of-tsushima-ce.jpg',
    platform: 'PS5',
  },
  {
    title:
      'Shadow of the Colossus',
    slug: 'shadow-of-the-colossus',
    coverImage:
      '/images/covers/shadow-colossus-cover.jpg',
    bgImage:
      '/images/backgrounds/shadow-of-the-colossus.jpg',
    platform: 'PS5',
  },
  {
    title: 'Bloodborne',
    slug: 'bloodborne',
    coverImage:
      '/images/covers/bloodborne-cover.jpg',
    bgImage:
      '/images/backgrounds/bloodborne-ps4-game.jpg',
    platform: 'PS4',
  },
  {
    title:
      'God of War Ragnarok',
    slug: 'god-of-war-ragnarok',
    coverImage:
      '/images/covers/god-of-war-ragnarok-2021.jpg',
    bgImage:
      '/images/backgrounds/god-of-war-ragnarok.jpg',
    platform: 'PS5',
  },
  {
    title:
      'The Last of Us Part II',
    slug: 'the-last-of-us-part-2',
    coverImage:
      '/images/covers/tlou-cover.jpg',
    bgImage:
      '/images/backgrounds/The-Last-of-Us-Part2-Wallpaper.jpg',
    platform: 'PS4',
  },
  {
    title:
      'Horizon Forbidden West',
    slug: 'horizon-forbidden-west',
    coverImage:
      '/images/covers/horizon-forbidden-west.jpg',
    bgImage:
      '/images/backgrounds/horizon-ii-forbidden-west.jpg',
    platform: 'PS5',
  },
  {
    title: 'Elden Ring',
    slug: 'elden-ring',
    coverImage:
      '/images/covers/elden-ring-cover.jpg',
    bgImage:
      '/images/backgrounds/elden-ring-bg.jpg',
    platform: 'PS5',
  },
  {
    title: 'Death Stranding',
    slug: 'death-stranding',
    coverImage:
      '/images/covers/death-standing-cover.jpg',
    bgImage:
      '/images/backgrounds/2020-death-stranding.jpg',
    platform: 'PS4',
  },
  {
    title:
      'Resident Evil 4 Remake',
    slug: 'resident-evil-4-remake',
    coverImage:
      '/images/covers/resident-evil-4.jpg',
    bgImage:
      '/images/backgrounds/2023-resident-evil-4.jpg',
    platform: 'PS5',
  },
];

export type TGame = typeof GAMES_DATA[number];
