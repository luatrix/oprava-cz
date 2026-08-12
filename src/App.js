import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      try {
        window.scrollTo(0, 0);
      } catch (e) {
        // jsdom in tests does not implement scrollTo
      }
      return;
    }

    const id = location.hash.replace('#', '');
    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollManager />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
