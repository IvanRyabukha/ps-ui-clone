import { useState } from 'react';
import type { TGame } from '../../data/games.data';
import { Menu } from '../menu/Menu';
import { StatBlock } from './StatBlock';
import { MENU } from '../../data/menu.data';

interface Props {
  game?: TGame;
}

export function GameHeader({ game }: Props) {
  const [activeItem, setActiveItem] = useState('play');
  return (
    <div>
      <Menu activeValue={activeItem} onSelect={setActiveItem} items={MENU}/>
      <div className="relative z-10 flex h-full flex-col justify-between mt-10">
        <div>
          <div className="mb-1">
            <img
              src={
                game?.platform === 'PS5'
                  ? '/images/ps-5-logo.png'
                  : '/images/ps-4-logo.png'
              }
              alt={game?.platform}
              width={50}
              className="filter brightness-0 invert
                duration-300 ease-in-out"
            />
          </div>
          <h2 className="text-4xl font-bold text-white mb-8">{game?.title}</h2>
        </div>
        <div className="grid grid-cols-4 gap-8">
          <StatBlock label="PLAYED FOR" value="23H 15M" />
          <StatBlock label="STORAGE" value="152GB" />
          <StatBlock label="ADDONS" value="6" />
          <StatBlock label="OWNED BY FRIENDS" value="12" />
        </div>
      </div>
    </div>
  );
}
