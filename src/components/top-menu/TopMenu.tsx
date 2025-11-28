import { CATERGORIES } from '../../data/categories.data';
import type { TCategorySlug } from '../../types/category';
import cn from 'clsx';

interface Props {
  activeCategory: string;
  setActiveCategory: (
    value: TCategorySlug
  ) => void;
}

export function TopMenu({
  activeCategory,
  setActiveCategory,
}: Props) {
  return (
    <nav
      className="ml-28"
    >
      <ul
        className="flex
          items-center"
      >
        {CATERGORIES.map(
          (category) => (
            <li
              key={
                category.slug
              }
            >
              <button
                className={cn(
                  `border-2 rounded-full
                  py-0.5
                  px-5
                  font-semibold transition-all duration-200 ease-out`,
                  activeCategory ===
                    category.slug
                    ? 'border-[#1266b4]'
                    : 'border-transparent'
                )}
                onClick={() =>
                  setActiveCategory(
                    category.slug
                  )
                }
              >
                {category.title.toUpperCase()}
              </button>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
