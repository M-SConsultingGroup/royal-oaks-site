
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import CalendarSection from './components/CalendarSection';
import { useState } from 'react';
import VideoSection from './components/VideoSection';

const App = () => {

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <VideoSection />
      <Gallery />
      <CalendarSection onDateSelect={setSelectedDate} />
      <ContactForm selectedDate={selectedDate} />
    </div>
  );
};

export default App;
