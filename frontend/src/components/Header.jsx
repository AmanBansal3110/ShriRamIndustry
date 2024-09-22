function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-blue-400">Home</a></li>
          <li><a href="/about" className="hover:text-blue-400">About</a></li>
          <li><a href="/products" className="hover:text-blue-400">Products</a></li>
          <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
