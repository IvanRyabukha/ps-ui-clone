import { create } from 'zustand'
import { GAMES_DATA, type TGame } from '../data/games.data';

interface IStore {
  activeGameSlug: string;
  setActiveGameSlug: (slug: string) => void;
  getActiveGame: () => TGame | undefined; 
}

export const useGameStore = create<IStore>((set) => ({
  activeGameSlug: 'final-fantasy-vii-remake',
  setActiveGameSlug: (slug: string) => set({ activeGameSlug: slug }),
  getActiveGame: (): TGame | undefined => {
    const state = useGameStore.getState();
    const game = GAMES_DATA.find(g => g.slug === state.activeGameSlug);

    return game;
  }
}));

type TLevelFocus = 'top-menu' | 'game-carusel' | 'details';

interface ILevelFocus {
  levelFocus: TLevelFocus;
  setLevelFocus: (slug: TLevelFocus) => void;
  getLevelFocus: () => TLevelFocus;
};

export const useLevelFocusStore = create<ILevelFocus>((set) => ({
  levelFocus: 'game-carusel',
  setLevelFocus: (slug: TLevelFocus) => set({ levelFocus: slug}),
  getLevelFocus: (): TLevelFocus => useLevelFocusStore.getState().levelFocus,
}));