import {
  // ArrowBigDown,
  // ArrowBigLeft,
  // ArrowBigRight,
  // ArrowBigUp,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

export const hotkeysData = [
  {
    icon: (
      <>
        <ArrowUp />
      </>
    ),
    label: 'TOP MENU',
    hotkey: 'ArrowUp',
  },
  {
    icon: (
      <>
        <ArrowDown />
      </>
    ),
    label: 'DETAILS',
    hotkey: 'ArrowDown',
  },
  {
    icon: (
      <>
        <ArrowLeft />
      </>
    ),
    label: 'PREV GAME',
    hotkey: 'ArrowLeft',
  },
  {
    icon: (
      <>
        <ArrowRight />
      </>
    ),
    label: 'NEXT GAME',
    hotkey: 'ArrowRight',
  },
];

export type THotkeyKey =
  (typeof hotkeysData)[number];
