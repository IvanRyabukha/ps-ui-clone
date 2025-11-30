import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react';
import { GAMES_DATA } from '../../data/games.data';
import { GameItem } from './game-item/GameItem';

import 'swiper/css';
import { useGameStore } from '../../store/store';
import type { RefObject } from 'react';
import cn from 'clsx';


interface Props {
  swiperRef: RefObject<SwiperRef | null>;
  isCarouselActive: boolean;
}

export function GameCarusel({ swiperRef, isCarouselActive }: Props) {
  const { setActiveGameSlug } = useGameStore();

  return (
    <div className={cn(`ml-32 transition-all duration-300`, !isCarouselActive ? 'carousel-disabled' : '')}>
      <Swiper
        ref={swiperRef}
        roundLengths
        loop
        slidesPerView={8}
        spaceBetween={18}
        initialSlide={1}
        slideToClickedSlide
        onSlideChange={(e) => {
          const gameSlug = GAMES_DATA[e.realIndex].slug;
          setActiveGameSlug(gameSlug);
        }}
      >
        {GAMES_DATA.map((game) => (
          <SwiperSlide key={game.slug}>
            <GameItem game={game} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
