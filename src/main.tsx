import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Layout from './components/layout/Layout.tsx';
import { HotkeysProvider } from 'react-hotkeys-hook';

createRoot(
  document.getElementById(
    'root'
  )!
).render(
  <StrictMode>
    <HotkeysProvider>
      <Layout>
        <App />
      </Layout>
    </HotkeysProvider>
  </StrictMode>
);
