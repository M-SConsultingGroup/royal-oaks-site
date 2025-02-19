import { useState, useEffect } from "react";
import { Menu } from "lucide-react"; // Mobile menu icon

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Adjust the threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${isScrolled ? "bg-button bg-opacity-90 backdrop-blur-lg shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative h-[7rem]">
        
        {/* Mobile Menu Button (Left Aligned in Mobile) */}
        <div className="md:hidden flex items-center flex-shrink-0">
          <button className="text-secondary hover:text-button transition" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu size={32} />
          </button>
        </div>

        {/* Logo (Left on Desktop, Center on Mobile) */}
        <div className="md:static absolute left-1/2 transform md:translate-x-0 -translate-x-1/2 flex">
          <img 
            src={isScrolled ? "darkLogo.png" : "logo.png"}
            alt="Royal Oaks Logo" 
            className="h-[5rem] md:h-[6rem] max-h-[7rem] object-contain shadow-none"
          />
        </div>

        {/* Desktop Navigation (Right Aligned) */}
        <nav className={`hidden md:flex space-x-10 text-lg font-serif uppercase tracking-wide 
          ${isScrolled ? "text-white" : "text-primary"}`}>
          <a href="#" className="hover:text-button transition-all duration-300">Home</a>
          <a href="#about" className="hover:text-button transition-all duration-300">About</a>
          <a href="#events" className="hover:text-button transition-all duration-300">Events</a>
          <a href="#contact" className="hover:text-button transition-all duration-300">Contact</a>
        </nav>

        {/* Empty Spacer (For Desktop Layout Alignment) */}
        <div className="hidden md:flex w-12"></div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary py-6 space-y-5 text-center text-secondary text-lg font-semibold uppercase tracking-wide shadow-lg">
          <a href="#" className="block hover:text-button transition-all duration-300">Home</a>
          <a href="#about" className="block hover:text-button transition-all duration-300">About</a>
          <a href="#events" className="block hover:text-button transition-all duration-300">Events</a>
          <a href="#contact" className="block hover:text-button transition-all duration-300">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;