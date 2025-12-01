import { useGameStore } from '../../store/store';
import { GameHeader } from './GameHeader';
import { GameLauncher } from './GameLauncher';

export function GameDetails() {
  const { getActiveGame } = useGameStore();
  return (
    <div
      className={'flex items-center justify-between mx-28'}
    >
      <GameHeader game={getActiveGame()} />
      <GameLauncher />
    </div>
  );
}
