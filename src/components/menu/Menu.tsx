import cn from 'clsx';
import type { IMenuItem } from '../../types/menu';

interface Props {
  items: IMenuItem[];
  activeValue: string | null;
  onSelect: (value: string) => void;
  containerClassName?: string;
  buttonClassName?: string;
  activeButtonClassName?: string;
}

export function Menu({
  items,
  activeValue,
  onSelect,
}: Props) {
  return (
    <nav>
      <ul className="flex items-center">
        {items.map((item) => (
          <li key={item.slug}>
            <button
              className={cn(
                `border-2 rounded-full py-0.5 px-5 font-semibold transition-all
                duration-200 ease-out`,
                activeValue === item.slug
                  ? 'border-[#1266b4]'
                  : 'border-transparent'
              )}
              onClick={() => onSelect(item.slug)}
            >
              {item.title.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
