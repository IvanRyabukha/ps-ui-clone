import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import { GAMES_DATA } from '../../data/games.data';
import { GameItem } from './game-item/GameItem';

import 'swiper/css';

export function GameCarusel() {
  return (
    <div className="ml-32">
      <Swiper
        loop
        roundLengths
        slidesPerView={8}
        spaceBetween={18}
        initialSlide={1}
        slideToClickedSlide
      >
        {GAMES_DATA.map(
          (game) => (
            <SwiperSlide
              key={game.slug}
            >
              <GameItem
                game={game}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}
