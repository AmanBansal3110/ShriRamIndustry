import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaQuoteLeft, FaStar } from 'react-icons/fa';

const founders = [
  {
    name: 'Vivek Goyal',
    role: 'Founder & CEO',
    image: 'assets/founder.jpg',
    description: 'Visionary leader with a passion for innovative fashion.'
  },
  {
    name: 'Amit Sharma',
    role: 'Co-Founder & COO',
    image: 'assets/cofounder.jpg',
    description: 'Operations expert with a keen eye for market trends.'
  },
  {
    name: 'Vivek Goyal',
    role: 'Creative Director',
    image: 'assets/founder.jpg',
    description: 'Design maven bringing fresh ideas to every collection.'
  },
];

const milestones = [
  { year: '2015', event: 'LeeBony founded' },
  { year: '2017', event: 'Launched our first sustainable collection' },
  { year: '2019', event: 'Opened our 50th store' },
  { year: '2021', event: 'Achieved carbon neutrality in operations' },
  { year: '2023', event: 'Expanded to international markets' },
];

const testimonial = {
  text: "LeeBony's commitment to style and sustainability is unmatched. Their clothes make me feel confident and eco-conscious.",
  author: "Sarah J., Loyal Customer"
};

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Section */}
        <section className="mb-20">
          <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-6">About <span className="text-pink-500">LeeBony</span></h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            At LeeBony, we blend style with sustainability to create fashion that speaks to the modern consumer. 
            Our commitment to quality and innovation drives us to deliver trendsetting designs that not only look 
            good but feel good too.
          </p>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To revolutionize the fashion industry by offering sustainable, high-quality clothing that empowers 
              individuals to express their unique style while making a positive impact on the planet.
            </p>
          </div>
        </section>

        {/* Founders Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{founder.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{founder.role}</p>
                  <p className="text-gray-600">{founder.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>



        {/* Testimonial Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Our Customers Say</h2>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-600">{testimonial.text}</p>
            <p className="text-sm text-gray-500 mb-2">- {testimonial.author}</p>
          </div>
        </section>

        {/* Connect With Us Section */}
        <section>
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-6">Connect With Us</h2>
          <div className="flex space-x-4 justify-center">
            {[ 
              { icon: FaFacebookF, href: 'https://www.facebook.com', label: 'Facebook' },
              { icon: FaInstagram, href: 'https://www.instagram.com', label: 'Instagram' },
              { icon: FaLinkedinIn, href: 'https://www.linkedin.com', label: 'LinkedIn' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
