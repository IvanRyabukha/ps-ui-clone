import {
  Bell,
  Gamepad2,
  ShoppingBag,
  Sticker,
  Trophy,
  Wifi,
} from "lucide-react";

const currentTime = new Date().toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export function Header() {
  return (
    <header className="p-8 grid grid-cols-[2fr_5fr_2fr]">
      <div className="flex items-center gap-20">
        <div className="flex items-center gap-3">
          <time className="font-semibold">{currentTime}</time>
          <Wifi className="size-4" />
        </div>

        <div className="text-xs flex items-center gap-1">
          <span className="flex items-center gap-1">
            <ShoppingBag className="size-5" />
            <span>3</span>
          </span>
          <span>|</span>
          <span>$39,99</span>
        </div>
      </div>

      <div className="text-xs font-semibold flex items-center justify-center gap-3">
        <div className="flex flex-col items-center">
          <Gamepad2 />
          <div className="-mt-1.5">1</div>
        </div>
        <div className="flex flex-col items-center">
          <Gamepad2 />
          <div className="-mt-1.5">2</div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-6 text-sm font-semibold">
        <div className="flex items-center gap-1.5">
          <Bell />
          <span>12</span>
        </div>
        
        <div className="flex items-center gap-1.5">
          <Sticker />
          <span>9</span>
        </div>

        <div className="flex items-center gap-3">
          <img
            src="/icons/ps-plus-logo.svg"
            alt="PS Plus"
            width={24}
            height={24}
          />
          <div className="flex items-center gap-3">
            <img
              src="/images/avatar.png"
              alt="ProfileName"
              width={45}
              height={45}
            />
            <div>
              <div className="mb-1">ProfileName</div>
              <div className="flex items-center gap-1 text-xs">
                <Trophy size={16}/>
                <span>14</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
