import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import SeoServicePage from './pages/SeoServicePage';
import NotFound from './pages/NotFound';
import { serviceList } from './seo/content';

// Shared route table used by both the client (BrowserRouter in App.js) and the
// build-time prerenderer (StaticRouter in scripts/ssr-entry.jsx).
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {serviceList.map((service) => (
        <Route key={service.slug} path={service.slug} element={<SeoServicePage service={service} />} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
