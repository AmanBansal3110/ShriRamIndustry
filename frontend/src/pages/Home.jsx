import React from 'react';
import HeroSection from '../components/HeroSection';
import Carousel from '../components/Carousel';
import ProductGrid from '../components/ProductGrid';
import TestimonialSection from '../components/TestimonialSection';
import Newsletter from '../components/Newsletter';
import CTASection from '../components/CTASection';
import CategorySlider from '../components/CategorySlider';
import { featuredProducts } from '../data/featuredProductsData';


const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Carousel */}
      <Carousel />

      
      {/* Featured Products */}
      <div className="my-12">
        <ProductGrid products={featuredProducts} />
      </div>

      {/* Category Slider Section */}
      <CategorySlider />


      {/* Testimonial Section */}
      <div className="my-12">
        <TestimonialSection />
      </div>

      {/* Call to Action Section */}
      <div className="my-12">
        <CTASection />
      </div>

      {/* Newsletter Section */}
      <div className="">
        <Newsletter />
      </div>
    </div>
  );
};

export default HomePage;
