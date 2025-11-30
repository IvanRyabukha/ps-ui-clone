// interface Props {
//   trophyProgress: number;
//   onStartGame: () => void;
// }

export function GameLauncher() {
  return (
    <div>
      <div className="space-y-2 mb-14">
        <div className="flex items-center justify-between">
          <span
            className="text-sm font-semibold uppercase tracking-wider
              text-slate-300"
          >
            Trophy Progress
          </span>
          <span className="text-2xl font-bold text-white">
            {23}%
          </span>
        </div>

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
          <div className="h-full rounded-full bg-blue-500 transition-all duration-500" style={{ width: `${23}%`}}/>
        </div>
      </div>

      <button
        onClick={() => {}}
        className="group relative w-full overflow-hidden rounded-lg border-2
          border-white bg-transparent py-6 transition-all duration-300
          hover:bg-white/10"
      >
        <div className="flex items-center justify-between px-6 gap-5">
          <span className="text-lg font-bold uppercase tracking-wide text-white">
            Start the Game
          </span>
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full
              border-2 border-white bg-transparent transition-transform
              duration-300 group-hover:scale-110"
          >
            <div className="h-3 w-3 rounded-full border-2 border-white" />
          </div>
        </div>
      </button>
    </div>
  );
}
