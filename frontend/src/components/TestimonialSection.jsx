import React from 'react';
import { motion } from 'framer-motion';
import customer1 from '../assets/founder.jpg';
import customer2 from '../assets/founder.jpg';
import customer3 from '../assets/founder.jpg';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    review: 'Amazing quality! I love the designs, and the customer service was top-notch.',
    avatar: customer1
  },
  {
    id: 2,
    name: 'Jane Smith',
    review: 'Fantastic experience. The products exceeded my expectations.',
    avatar: customer2
  },
  {
    id: 3,
    name: 'Mark Johnson',
    review: 'I’m extremely satisfied with my purchase. Will definitely shop again!',
    avatar: customer3
  }
];

const TestimonialSection = () => {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <motion.div
          key={testimonial.id}
          className="p-6 bg-white shadow-lg rounded-lg text-center transition-transform duration-300 hover:scale-105"
        >
          <img
            className="w-16 h-16 rounded-full mx-auto mb-4"
            src={testimonial.avatar}
            alt={testimonial.name}
          />
          <p className="text-gray-600 italic">"{testimonial.review}"</p>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">{testimonial.name}</h3>
        </motion.div>
      ))}
    </div>
  );
};

export default TestimonialSection;
