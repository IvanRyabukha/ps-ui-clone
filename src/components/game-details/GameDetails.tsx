import { useGameStore } from '../../store/store';
import { GameHeader } from './GameHeader';
import { GameLauncher } from './GameLauncher';
import cn from 'clsx';

export function GameDetails({ levelFocus }: { levelFocus: string }) {
  const { getActiveGame } = useGameStore();
  return (
    <div
      className={cn(
        'items-center justify-between mx-28',
        levelFocus === 'details' ? 'flex' : 'hidden'
      )}
    >
      <GameHeader game={getActiveGame()} />
      <GameLauncher />
    </div>
  );
}
