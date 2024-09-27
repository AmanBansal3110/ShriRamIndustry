import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import Carousel from '../components/Carousel';
import FeaturedProducts from '../components/FeaturedProducts';
import NewArrivals from '../components/NewArrivalsSection';
import MensCollection from '../components/MensCollectionSection';
import WomensCollection from '../components/WomensCollectionSection';
import VideoSection from '../components/VideoSection';
import NewsletterPopup from '../components/Newsletter';
import image1 from '/assets/slide15.png';
import image2 from '/assets/slide14.png';
import image3 from '/assets/slide13.jpeg';
import image4 from '/assets/slide12.jpeg';
import image5 from '/assets/slide5.png';
import image6 from '/assets/slide6.jpeg';
import image7 from '/assets/slide7.jpeg';
import image8 from '/assets/slide8.jpeg';
import image9 from '/assets/slide9.jpeg';
import CategoryName from '../components/CategoryName';

const ResponsiveContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
`;

const FullWidthContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; // One category per row
  gap: 1px;
  margin-top: 40px;
`;

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:3001/category');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const featuredProducts = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  return (
    <ResponsiveContainer>
      {/* Newsletter Pop-up */}
      <NewsletterPopup />

      <FullWidthContainer>
        <HeroSection />
        <Carousel categories={categories} />
        <FeaturedProducts products={featuredProducts} />
      </FullWidthContainer>

      <CategoryGrid>
        {categories.map((category) => (
          <CategoryName key={category._id} image={category.image} name={category.name} />
        ))}
      </CategoryGrid>

      <FullWidthContainer>
        <VideoSection />
      </FullWidthContainer>
    </ResponsiveContainer>
  );
};

export default HomePage;
