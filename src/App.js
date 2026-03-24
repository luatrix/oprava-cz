import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './LandingPage';
import SeoServicePage from './pages/SeoServicePage';

const seoPages = {
  '/oprava-pracek-praha': {
    title: 'Oprava praček v Praze a okolí – rychlá a spolehlivá služba',
    lead: 'Oprava praček Praha',
    paragraphOne: 'U nás provádíme opravy praček všech značek přímo u vás doma v Praze.',
    paragraphTwo: 'Ve většině případů je spotřebič opraven ještě tentýž den. Výjezd po Praze zdarma, diagnostika zdarma při opravě.',
    details: [
      'U nás provádíme opravy praček všech značek přímo u vás doma.',
      'Ve většině případů je spotřebič opraven ještě tentýž den.',
      'Výjezd po Praze je vždy zdarma a diagnostika není účtována, pokud opravu provedeme.',
      'Rychlý servis do 24 hodin.',
      'Férové ceny bez skrytých poplatků.'
    ]
  },
  '/oprava-mycek-praha': {
    title: 'Oprava myček nádobí v Praze – rychlý a spolehlivý servis',
    lead: 'Oprava myček Praha',
    paragraphOne: 'U nás provádíme servis myček všech značek přímo u vás doma.',
    paragraphTwo: 'Rychle opravíme poruchu a zajistíme, aby vaše myčka fungovala co nejdříve.',
    details: [
      'U nás provádíme servis myček všech značek a opravíme poruchu přímo u vás doma.',
      'Výjezd zdarma po celé Praze a žádné skryté poplatky.',
      'Rychlá a spolehlivá služba.',
      'Opravy všech značek.',
      'Diagnostika zdarma při opravě.'
    ]
  },
  '/oprava-susicek-praha': {
    title: 'Oprava sušiček v Praze – profesionální a spolehlivá služba',
    lead: 'Oprava sušiček Praha',
    paragraphOne: 'U nás zajistíme rychlou a spolehlivou opravu sušiček přímo u vás doma.',
    paragraphTwo: 'Férové ceny a zkušenosti z více než 5 let. Výjezd po Praze zdarma, diagnostika zdarma při opravě.',
    details: [
      'U nás zajistíme rychlou a spolehlivou opravu sušiček přímo u vás doma.',
      'Férové ceny, zkušenosti z více než 5 let a výjezd po Praze vždy zdarma.',
      'Rychlý servis do 24 hodin.',
      'Opravy všech značek.',
      'Férové ceny bez skrytých poplatků.'
    ]
  }
};

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
        <Route path="/oprava-pracek-praha" element={<SeoServicePage {...seoPages['/oprava-pracek-praha']} />} />
        <Route path="/oprava-mycek-praha" element={<SeoServicePage {...seoPages['/oprava-mycek-praha']} />} />
        <Route path="/oprava-susicek-praha" element={<SeoServicePage {...seoPages['/oprava-susicek-praha']} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
