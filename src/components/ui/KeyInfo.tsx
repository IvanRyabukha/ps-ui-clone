import type { THotkeyKey } from '../../data/hotkeys.data';

interface Props {
  keyDetails: THotkeyKey;
}

export function KeyInfo({
  keyDetails,
}: Props) {
  return (
    <div className='flex items-center gap-2'>
      <div
        className="bg-white
          rounded-full size-5
          text-[#353841]
          shadow flex items-center justify-center p-0.5"
      >
        {keyDetails.icon}
      </div>
      <div>
        {keyDetails.label}
      </div>
    </div>
  );
}
