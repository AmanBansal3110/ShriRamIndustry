import React, { useState, useEffect } from 'react';

const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already dismissed the newsletter
    const hasDismissed = localStorage.getItem('newsletterDismissed');
    if (!hasDismissed) {
      // Show the pop-up after a delay (2 seconds, for example)
      setTimeout(() => {
        setIsVisible(true);
      }, 2000);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Store in localStorage to not show the pop-up again
    localStorage.setItem('newsletterDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={handleClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <p className="mb-4">Get the latest updates on new products and upcoming sales.</p>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
          />
          <button
            type="submit"
            className="w-full bg-black text-white px-4 py-2 rounded-md"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterPopup;
