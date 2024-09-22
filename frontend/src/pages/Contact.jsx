import React from 'react';
import Footer from '../components/Footer';
import '../css/Contact.css'; // Create this CSS file for custom styles

function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="contact-container flex-grow flex flex-col md:flex-row items-start justify-between p-8">
        {/* Left Side: Contact Information */}
        <div className="contact-content mt-10 md:w-1/2 md:pr-8 flex flex-col">
          <h1 className="text-4xl font-bold mb-4 text-left">Get in Touch</h1>
          
          <div className="contact-section mb-8">
            <h2 className="text-3xl font-semibold mb-4">Phone</h2>
            <p className="text-lg text-gray-700">+1 (123) 456-7890</p>
          </div>

          <div className="contact-section mb-8">
            <h2 className="text-3xl font-semibold mb-4">Email</h2>
            <p className="text-lg text-gray-700">contact@fashionfusion.com</p>
          </div>

          <div className="contact-section mb-8">
            <h2 className="text-3xl font-semibold mb-4">Address</h2>
            <p className="text-lg text-gray-700">123 Fashion St, New York, NY 10001</p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-px bg-gray-300 mx-8 md:mx-0 md:h-auto"></div>

        {/* Right Side: Contact Form (optional) */}
        <div className="contact-form md:w-1/2 mt-10">
          <h2 className="text-3xl font-semibold mb-4">Send Us a Message</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input type="text" className="border rounded w-full py-2 px-3" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea className="border rounded w-full py-2 px-3" rows="5" required></textarea>
            </div>
            <button type="submit" className="bg-orange-500 text-white rounded px-4 py-2 hover:bg-pink-400 transition-colors duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
