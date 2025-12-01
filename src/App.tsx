import { useState } from 'react';
import { GameCarusel } from './components/game-carusel/GameCarusel';
import { Menu } from './components/menu/Menu';
import { useRef } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { KeyEnum } from './config/hotkeys.config';
import { type SwiperRef } from 'swiper/react';
import { CATERGORIES } from './data/menu.data';
import { GameDetails } from './components/game-details/GameDetails';
import { motion } from 'framer-motion';
import { useLevelFocusStore } from './store/store';



function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { levelFocus, setLevelFocus } = useLevelFocusStore();

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
    >
      <motion.div
        className="ml-28 mt-5"
        animate={
          levelFocus === 'details'
            ? { opacity: 0, y: -30, pointerEvents: 'none' }
            : { opacity: 1, y: 0, pointerEvents: 'auto' }
        }
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <Menu
          activeValue={activeCategory}
          onSelect={setActiveCategory}
          items={CATERGORIES}
        />
      </motion.div>

      <motion.div
        animate={
          levelFocus === 'details'
            ? { opacity: 0, y: -40, pointerEvents: 'none' }
            : { opacity: 1, y: '150%', pointerEvents: 'auto' }
        }
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <GameCarusel
          swiperRef={swiperRef}
          isCarouselActive={levelFocus === 'game-carusel'}
        />
      </motion.div>

      <motion.div
        animate={
          levelFocus === 'details'
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 40 }
        }
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <GameDetails />
      </motion.div>
    </div>
  );
}

export default App;
