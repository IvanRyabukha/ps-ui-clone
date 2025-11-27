import { useState } from "react";
import { GameCarusel } from "./components/game-carusel/GameCarusel";
import { TopMenu } from "./components/top-menu/TopMenu";
import type { TCategorySlug } from "./types/category";

function App() {
  const [activeCategory, setActiveCategory] = useState<TCategorySlug>('all');
  return (
    <div>
      <TopMenu
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <GameCarusel />
    </div>
  );
}

export default App;
