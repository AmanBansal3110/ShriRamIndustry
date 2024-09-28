import React from 'react';
import styled from 'styled-components';

// Styled Components
const FeaturedContainer = styled.section`
background-image: url('/assets/spotlight2.jpeg');
  width: 100%;
  padding: 40px 20px;
  background-color: #f0f0f0; // Changed from white to light gray
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
  margin-bottom: 30px;
`;

const ProductsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: 1200px) {
    justify-content: space-around;
  }

  @media (max-width: 768px) {
    justify-content: space-around;
  }

  @media (max-width: 576px) {
    justify-content: center;
  }
`;

const ProductCard = styled.div`
  flex: 0 1 calc(25% - 20px);
  border: 2px solid black;
  padding: 20px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;  
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

    &:before {
      opacity: 1;
    }
  }

  @media (max-width: 1200px) {
    flex: 0 1 calc(33.333% - 20px);
  }

  @media (max-width: 768px) {
    flex: 0 1 calc(50% - 20px);
  }

  @media (max-width: 576px) {
    flex: 0 1 100%;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-bottom: 2px solid black;
  margin-bottom: 20px;
`;

const ProductName = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: gray;
`;

const FeaturedProducts = ({ products }) => {
  return (
    <FeaturedContainer>
      <SectionTitle style={{ color: 'white' }}>Featured Products</SectionTitle>
      <ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>Rs.{product.price.toFixed(2)}</ProductPrice>
          </ProductCard>
        ))}
      </ProductsGrid>
    </FeaturedContainer>
  );
};

export default FeaturedProducts;
