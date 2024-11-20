
const Header = () => {
  return (
    <header className="bg-gray-900 text-white fixed w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold uppercase">Event Center</div>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#features" className="hover:text-blue-400">Features</a></li>
            <li><a href="#gallery" className="hover:text-blue-400">Gallery</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
