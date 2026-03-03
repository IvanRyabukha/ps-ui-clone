# PS UI Clone

A PlayStation home screen UI clone built with React + TypeScript + Vite.
The project focuses on visuals, animations, and keyboard navigation.

## Features

- Screen navigation with arrow keys (`top-menu` -> `game-carusel` -> `details`).
- Game carousel powered by `swiper` with active slide state and dynamic background updates.
- Selected game details panel (menu, title, static stats, launch button).
- Focus-level transitions animated with `framer-motion`.
- Global state management with `zustand` (active game and current focus level).

## Tech Stack

- `React 19`
- `TypeScript`
- `Vite`
- `Tailwind CSS 4`
- `Swiper`
- `Framer Motion`
- `Zustand`
- `react-hotkeys-hook`
- `ESLint + Prettier`

## Quick Start

### Requirements

- `Node.js` 20+
- `npm` 10+

### Install and Run

```bash
npm install
npm run dev
```

The app starts with Vite (typically at `http://localhost:5173`).

## Scripts

```bash
npm run dev      # local development
npm run build    # type-check + production build
npm run preview  # preview production build locally
npm run lint     # lint codebase
```

## Controls

Main hotkeys (also displayed in the footer):

- `ArrowUp` - move focus one level up.
- `ArrowDown` - move focus one level down.
- `ArrowLeft` - previous category/game/menu item (depends on current focus).
- `ArrowRight` - next category/game/menu item (depends on current focus).

Focus levels are defined in `src/store/store.ts`:

- `top-menu`
- `game-carusel`
- `details`

## Project Structure

```text
src/
  components/
    game-carusel/      # carousel and game tile
    game-details/      # selected game details panel
    layout/            # global layout + header/footer
    menu/              # reusable menu component
    ui/                # small UI primitives
  config/
    hotkeys.config.ts
  data/
    games.data.ts      # game list and image paths
    menu.data.ts       # menu/category items
    hotkeys.data.tsx   # footer hotkey hint data
  store/
    store.ts           # zustand stores
  App.tsx
  main.tsx
```

## Data and Assets

- Games are defined in `src/data/games.data.ts`.
- Backgrounds and covers are stored in `public/images/backgrounds` and `public/images/covers`.
- Icons/profile images are in `public/icons` and `public/images`.

To add a new game:

1. Add images to `public/images/backgrounds` and `public/images/covers`.
2. Add a new object to `GAMES_DATA` in `src/data/games.data.ts`.
3. Make sure `slug` is unique and file paths are correct.

## Current State

- The project is a UI demo without backend/API.
- Top menu categories are switchable, but they do not filter the game list yet (visual flow only for now).
- Detail stats (`PLAYED FOR`, `STORAGE`, etc.) are currently static.

## Roadmap Ideas

- Add real carousel filtering by category.
- Move static detail stats into `GAMES_DATA`.
- Add e2e tests for keyboard navigation.
