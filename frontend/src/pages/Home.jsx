import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import Carousel from '../components/Carousel';
import FeaturedProducts from '../components/FeaturedProducts';
import VideoSection from '../components/VideoSection';
import NewsletterPopup from '../components/Newsletter';
import CategoryName from '../components/CategoryName';
import { Link } from 'react-router-dom'; // Add this import

const ResponsiveContainer = styled.div`
  width: 100%;
  max-width: 100%; /* Changed from 1200px to 100% */
  margin: 0;
  padding: 0;

  @media (max-width: 1200px) {
    max-width: 100%; /* Changed from 90% to 100% */
  }

  @media (max-width: 768px) {
    max-width: 100%; /* Changed from 95% to 100% */
  }

  @media (max-width: 576px) {
    max-width: 100%;
    padding: 0;
  }
`;

const FullWidthContainer = styled.div`
  width: 100%;
  max-width: 100%; /* Changed from 1200px to 100% */
  margin: 0;
  overflow-x: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 1200px) {
    max-width: 100%; /* Changed from 90% to 100% */
  }

  @media (max-width: 768px) {
    max-width: 100%; /* Changed from 95% to 100% */
  }

  @media (max-width: 576px) {
    max-width: 100%;
    padding: 0;
  }

  /* Add this new style for gap between components */
  & > * {
    // margin-bottom: 1px;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const PrevButton = styled(SlideButton)`
  left: 10px;
`;

const NextButton = styled(SlideButton)`
  right: 10px;
`;

const CategoryGrid = styled.div`
  display: flex;
  width: ${(props) => 100 * props.visibleCount}%; /* Adjust grid width based on visible count */
  transform: translateX(${(props) => props.translateX}%);
  transition: transform 0.5s ease-in-out;
  gap: 1px;
`;

const CategoryItem = styled(Link)`
  flex: 0 0 ${(props) => 100 / props.visibleCount}%;
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: inherit;
`;

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [startIndex, setStartIndex] = useState(0); // Index for current visible categories
  const [isSliding, setIsSliding] = useState(false); // Flag to prevent rapid clicks during sliding
  const [visibleCount, setVisibleCount] = useState(3); // Dynamic visible count

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:3001/category', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [categories]);

  // Function to dynamically set visibleCount based on window size
  const updateVisibleCount = () => {
    const width = window.innerWidth;
    if (width > 1024) {
      setVisibleCount(3);
    } else if (width > 768) {
      setVisibleCount(2);
    } else {
      setVisibleCount(1);
    }
  };

  useEffect(() => {
    // Set visibleCount on component mount
    updateVisibleCount();

    // Listen for window resize and update visibleCount
    window.addEventListener('resize', updateVisibleCount);

    return () => {
      window.removeEventListener('resize', updateVisibleCount); // Cleanup on unmount
    };
  }, []);

  const slideLeft = () => {
    if (startIndex > 0 && !isSliding) {
      setIsSliding(true);
      setStartIndex(startIndex - 1);
      setTimeout(() => setIsSliding(false), 500); // Wait for transition to complete
    }
  };

  const slideRight = () => {
    if (startIndex + visibleCount < categories.length && !isSliding) {
      setIsSliding(true);
      setStartIndex(startIndex + 1);
      setTimeout(() => setIsSliding(false), 500); // Wait for transition to complete
    }
  };

  const getTranslateX = () => {
    return -(startIndex * 100) / visibleCount;
  };

  return (
    <ResponsiveContainer>
      <NewsletterPopup />

      <FullWidthContainer>
        <HeroSection />
        <Carousel categories={categories} />
        <FeaturedProducts 
          products={[
            {
              id: 1,
              name: "Sample Product",
              price: 4999,
              image: "assets/slide15.png"
            },
            {
              id: 1,
              name: "Sample Product",
              price: 3999,
              image: "assets/slide15.png"
            },
            {
              id: 1,
              name: "Sample Product",
              price: 2999,
              image: "assets/slide15.png"
            }
            // Add more sample products as needed
          ]}
        />

        <SliderContainer>
          <PrevButton onClick={slideLeft} disabled={startIndex === 0}>‹</PrevButton>
          <CategoryGrid translateX={getTranslateX()} visibleCount={visibleCount}>
            {categories.map((category) => (
              <CategoryItem 
                to={`/category/${category._id}/products`} 
                key={category._id} 
                visibleCount={visibleCount}
              >
                <CategoryName 
                  id={category._id}
                  image={category.image} 
                  name={category.name} 
                />
              </CategoryItem>
            ))}
          </CategoryGrid>
          <NextButton onClick={slideRight} disabled={startIndex + visibleCount >= categories.length}>›</NextButton>
        </SliderContainer>

        <VideoSection />
      </FullWidthContainer>
    </ResponsiveContainer>
  );
};

export default HomePage;
