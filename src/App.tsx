import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FullCatalogPage from './pages/FullCatalogPage';
import CarDetailPage from './pages/CarDetailPage';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<FullCatalogPage />} />
          <Route path="/car/:carId" element={<CarDetailPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
