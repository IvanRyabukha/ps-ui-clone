export interface IMenuItem {
  title: string;
  slug: string;
}

export type TCategorySlug =
  | 'all'
  | 'racing'
  | 'roleplaying'
  | 'sports'
  | 'online'
  | 'shooter';
