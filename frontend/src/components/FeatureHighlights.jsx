import React from 'react';

const features = [
  { icon: '🚚', text: 'Free Shipping' },
  { icon: '👍', text: 'Quality Guaranteed' },
  { icon: '🕒', text: '24/7 Customer Support' },
];

const FeatureHighlights = () => {
  return (
    <div className="py-12 bg-gray-900">
      <h2 className="text-4xl text-center font-bold mb-8">Why Shop With Us?</h2>
      <div className="flex justify-center space-x-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center animate__animated animate__fadeIn">
            <div className="text-5xl">{feature.icon}</div>
            <h3 className="mt-4 text-xl">{feature.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureHighlights;
