import { useState } from 'react';
import { GameCarusel } from './components/game-carusel/GameCarusel';
import { Menu } from './components/menu/Menu';
import { useRef } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { KeyEnum } from './config/hotkeys.config';
import { type SwiperRef } from 'swiper/react';
import { CATERGORIES } from './data/menu.data';
import { GameDetails } from './components/game-details/GameDetails';
import cn from 'clsx';

type TLevelFocus = 'top-menu' | 'game-carusel' | 'details';

function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [levelFocus, setLevelFocus] = useState<TLevelFocus>('game-carusel');

  const swiperRef = useRef<SwiperRef>(null);

  useHotkeys(KeyEnum.ArrowUp, () => {
    if (levelFocus === 'game-carusel') {
      setLevelFocus('top-menu');
    } else if (levelFocus === 'details') {
      setLevelFocus('game-carusel');
    }
  });

  useHotkeys(KeyEnum.ArrowDown, () => {
    if (levelFocus === 'top-menu') {
      setLevelFocus('game-carusel');
    } else if (levelFocus === 'game-carusel') {
      setLevelFocus('details');
    }
  });

  useHotkeys(KeyEnum.ArrowRight, () => {
    if (levelFocus === 'top-menu') {
      const nextCategory =
        CATERGORIES.findIndex((c) => c.slug === activeCategory) + 1;
      if (nextCategory < CATERGORIES.length) {
        setActiveCategory(CATERGORIES[nextCategory].slug);
      }
    } else if (levelFocus === 'game-carusel') {
      swiperRef.current?.swiper.slideNext();
    }
  });

  useHotkeys(KeyEnum.ArrowLeft, () => {
    if (levelFocus === 'top-menu') {
      const prevCategory =
        CATERGORIES.findIndex((c) => c.slug === activeCategory) - 1;
      if (prevCategory >= 0) {
        setActiveCategory(CATERGORIES[prevCategory].slug);
      }
    } else if (levelFocus === 'game-carusel') {
      swiperRef.current?.swiper.slidePrev();
    }
  });

  return (
    <div
      className="flex flex-col justify-between"
      style={{
        height: '80%',
      }}
    >
      <div
        className={cn(
          'ml-28 mt-5',
          levelFocus === 'details' ? 'hidden' : 'block'
        )}
      >
        <Menu
          activeValue={activeCategory}
          onSelect={setActiveCategory}
          items={CATERGORIES}
        />
      </div>

      <div className={cn(levelFocus === 'details' ? 'hidden' : 'block')}>
        <GameCarusel
          swiperRef={swiperRef}
          isCarouselActive={levelFocus === 'game-carusel'}
        />
      </div>

      <GameDetails levelFocus={levelFocus} />
    </div>
  );
}

export default App;
