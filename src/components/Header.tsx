import { useState, useEffect } from "react";
import { Menu } from "lucide-react"; 
import { useNavigation } from "../context/NavigationContext"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { navigateToHome, navigateToAbout, navigateToPackages, navigateToContact } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${isScrolled ? "bg-button bg-opacity-90 backdrop-blur-lg shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative h-[7rem]">

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center flex-shrink-0">
          <button
            className="text-secondary hover:text-button transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={32} />
          </button>
        </div>

        {/* Logo */}
        <div className="md:static absolute left-1/2 transform md:translate-x-0 -translate-x-1/2 flex">
          <button onClick={navigateToHome}>
            <img
              src={isScrolled ? "darkLogo.png" : "logo.png"}
              alt="Royal Oaks Logo"
              className="h-[5rem] md:h-[6rem] max-h-[7rem] object-contain shadow-none"
            />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex space-x-10 text-lg font-serif uppercase tracking-wide 
          ${isScrolled ? "text-white" : "text-primary"} scroll-smooth`}>
          <button
            onClick={navigateToAbout}
            className={`hover:${isScrolled ? "text-primary" : "text-button"} transition-all duration-300`}
          >
            About
          </button>
          <button
            onClick={() => handleSmoothScroll("events")}
            className={`hover:${isScrolled ? "text-primary" : "text-button"} transition-all duration-300`}
          >
            Events
          </button>
          <button
            onClick={navigateToPackages}
            className={`hover:${isScrolled ? "text-primary" : "text-button"} transition-all duration-300`}
          >
            Package Deals
          </button>
          <button
            onClick={navigateToContact}
            className={`hover:${isScrolled ? "text-primary" : "text-button"} transition-all duration-300`}
          >
            Contact
          </button>
        </nav>

        {/* Empty Spacer */}
        <div className="hidden md:flex w-12"></div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary py-6 space-y-5 text-center text-secondary text-lg font-semibold uppercase tracking-wide shadow-lg scroll-smooth">
          <button
            onClick={navigateToHome}
            className={`block hover:${isScrolled ? "text-primary" : "text-button"} transition-all duration-300`}
          >
            Home
          </button>
          <button
            onClick={navigateToAbout}
            className={`block hover:${isScrolled ? "text-primary" : "text-button"} transition-all duration-300`}
          >
            About
          </button>
          <button
            onClick={() => handleSmoothScroll("events")}
            className={`block hover:${isScrolled ? "text-primary" : "text-button"} transition-all duration-300`}
          >
            Events
          </button>
          <button
            onClick={navigateToContact}
            className={`block hover:${isScrolled ? "text-primary" : "text-button"} transition-all duration-300`}
          >
            Contact
          </button>
          <button
            onClick={navigateToPackages}
            className={`block hover:${isScrolled ? "text-primary" : "text-button"} transition-all duration-300`}
          >
            Package Deals
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;