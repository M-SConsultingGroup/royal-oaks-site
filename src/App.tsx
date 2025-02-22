import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PackagesPage from './pages/PackagesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';

const App = () => {

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/packages" element={<PackagePageWrapper />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

const PackagePageWrapper = () => {
  const navigate = useNavigate();

  const handleSelectPackage = (title: string) => {
    navigate('/contact', { state: { preselectedPackage: title } });
  };

  return <PackagesPage onSelectPackage={handleSelectPackage} />;
};

export default App;
