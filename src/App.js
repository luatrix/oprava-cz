import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './LandingPage';
import SeoServicePage from './pages/SeoServicePage';
import NotFound from './pages/NotFound';
import { serviceList } from './seo/content';

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
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {serviceList.map((service) => (
          <Route key={service.slug} path={service.slug} element={<SeoServicePage service={service} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
