import React from 'react';
import '../css/About.css';
import founderImage from '../assets/founder.jpg'; // Replace with actual paths to images
import cofounderImage from '../assets/cofounder.jpg';
// Removed Footer import

function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <div className="about-container flex-grow p-8">
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Left Side: About the Company */}
          <div className="about-content md:w-1/2 md:pr-8 mb-8 md:mb-0 mt-20">
            <h1 className="text-4xl font-bold mb-4 text-left text-blue-400">Shree Ram Industries</h1>
            <section className="about-intro">
              <h2 className="text-3xl font-semibold mb-4 text-blue-300">About Our Company</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Shree Ram Industries, we're passionate about bringing you the latest trends and timeless classics in clothing and accessories.
                Our mission is to provide high-quality, sustainable fashion that empowers you to express your unique style while minimizing
                environmental impact.
              </p>
            </section>
          </div>

          {/* Right Side: Team Members */}
          <div className="team-cards md:w-1/2 space-y-6">
            <div className="team-card bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <img src={founderImage} alt="Founder" className="w-full h-48 rounded-t-lg object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-blue-400">Vivek Goyal</h3>
                <p className="text-gray-400">Founder</p>
              </div>
            </div>

            <div className="team-card bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <img src={cofounderImage} alt="Co-Founder" className="w-full h-48 rounded-t-lg object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-blue-400">Vivek Goyal</h3>
                <p className="text-gray-400">Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Removed Footer Component */}
    </div>
  );
}

export default About;
