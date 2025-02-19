import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';

const App = () => {

  return (
    <div>
      <Header />
      <HeroSection />
      <VideoSection />

      <Features />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
