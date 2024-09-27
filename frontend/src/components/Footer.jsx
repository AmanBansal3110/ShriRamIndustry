import React from 'react';
import '../css/Footer.css'; // Import your CSS file for styling

function Footer() {
  return (
    <footer className="footer bg-black text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="footer-logo mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Shri Ram Industries</h1>
        </div>
        
        <div className="footer-links flex space-x-4 mb-4 md:mb-0">
          <a href="/" className="hover:text-pink-400 transition-colors">Home</a>
          <a href="/about" className="hover:text-pink-400 transition-colors">About</a>
          <a href="/products" className="hover:text-pink-400 transition-colors">Products</a>
          <a href="/contact" className="hover:text-pink-400 transition-colors">Contact</a>
        </div>

        <div className="footer-social flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">Instagram</a>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-sm">© {new Date().getFullYear()} FashionFusion. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
