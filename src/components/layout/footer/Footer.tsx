import { hotkeysData } from '../../../data/hotkeys.data';
import { KeyInfo } from '../../ui/KeyInfo';

export function Footer() {
  return (
    <footer className='flex gap-5 absolute bottom-5 right-8 text-sm '>
      {hotkeysData.map(
        (hotkey) => (
          <KeyInfo
            key={hotkey.label}
            keyDetails={hotkey}
          />
        )
      )}
    </footer>
  );
}
