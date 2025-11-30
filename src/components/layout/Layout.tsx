import type { PropsWithChildren } from 'react';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { useGameStore } from '../../store/store';

export default function Layout({
  children,
}: PropsWithChildren<unknown>) {
  const { getActiveGame } = useGameStore();
  return (
    <div
      className="bg-cover
        bg-no-repeat bg-center
        h-screen relative overflow-hidden"
      style={{
        backgroundImage:
          `url(${getActiveGame()?.bgImage})`,
      }}
    >
      <div
        className="absolute
          inset-0
          pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 100%)',
        }}
      />
      <div className="relative h-full">
        <Header />

        {children}

        <Footer />
      </div>
    </div>
  );
}
