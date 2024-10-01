import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const SkeletonPulse = styled.div`
  display: inline-block;
  height: ${props => props.height || '20px'};
  width: ${props => props.width || '100%'};
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-repeat: no-repeat;
  background-size: 800px 104px;
  animation: ${shimmer} 1.5s linear infinite;
`;

const SkeletonWrapper = styled.div`
  padding: 20px;
  background: white;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const ProductSkeleton = ({ count = 1 }) => {
  return Array(count).fill().map((_, i) => (
    <SkeletonWrapper key={i}>
      <SkeletonPulse height="200px" />
      <SkeletonPulse height="20px" width="80%" style={{ marginTop: '15px' }} />
      <SkeletonPulse height="15px" width="60%" style={{ marginTop: '10px' }} />
      <SkeletonPulse height="15px" width="40%" style={{ marginTop: '10px' }} />
    </SkeletonWrapper>
  ));
};

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

