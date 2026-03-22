import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import SeoServicePage from './pages/SeoServicePage';

const seoPages = {
  '/oprava-pracek-praha': {
    title: 'Oprava praček v Praze – rychlá a spolehlivá služba',
    lead: 'Oprava praček Praha',
    paragraphOne: 'U nás provádíme opravy praček všech značek přímo u vás doma v Praze.',
    paragraphTwo: 'Ve většině případů je spotřebič opraven ještě tentýž den. Výjezd po Praze zdarma, diagnostika zdarma při opravě.'
  },
  '/oprava-mycek-praha': {
    title: 'Oprava myček nádobí v Praze – rychlý a spolehlivý servis',
    lead: 'Oprava myček Praha',
    paragraphOne: 'U nás provádíme servis myček všech značek přímo u vás doma.',
    paragraphTwo: 'Rychle opravíme poruchu a zajistíme, aby vaše myčka fungovala co nejdříve.'
  },
  '/oprava-susicek-praha': {
    title: 'Oprava sušiček v Praze – profesionální a spolehlivá služba',
    lead: 'Oprava sušiček Praha',
    paragraphOne: 'U nás zajistíme rychlou a spolehlivou opravu sušiček přímo u vás doma.',
    paragraphTwo: 'Férové ceny a zkušenosti z více než 5 let. Výjezd po Praze zdarma, diagnostika zdarma při opravě.'
  }
};

function App() {
  return (
    <BrowserRouter>
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
