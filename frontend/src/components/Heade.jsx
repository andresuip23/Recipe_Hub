function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        {/* Logo */}
        <img src="https://cdn-icons-png.flaticon.com/512/1869/1869042.png" alt="Logo" className="h-10 w-auto" />
      </div>
      <nav className="flex space-x-4">
        <a href="#home" className="hover:text-gray-300">
          Home
        </a>
        <a href="#recipes" className="hover:text-gray-300">
          Recipes
        </a>
        <a href="#about" className="hover:text-gray-300">
          About Us
        </a>
        <a href="#login" className="hover:text-gray-300">
          Log in
        </a>
      </nav>
    </header>
  );
}

export default Header;
