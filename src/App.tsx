import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationContextProvider, useNavigation } from './context/NavigationContext';
import HomePage from './pages/HomePage';
import PackagesPage from './pages/PackagesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';

const App = () => {

  return (
    <Router>
      <NavigationContextProvider>
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
      </NavigationContextProvider>
    </Router>
  );
};

const PackagePageWrapper = () => {
  const { navigateToContact } = useNavigation();

  const handleSelectPackage = (title: string) => {
    navigateToContact({ state: { preselectedPackage: title } });
  };

  return <PackagesPage onSelectPackage={handleSelectPackage} />;
};

export default App;
