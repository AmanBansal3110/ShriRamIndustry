import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const TitleContainer = styled.div`
  background-color: #f8f8f8;
  padding: 40px 0;
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: #333;
  margin: 0;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background-color: #333;
    margin: 10px auto 0;
  }
`;

const MainSlogan = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const SubSlogan = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const IntroSection = styled.section`
  text-align: center;
  margin-bottom: 60px;
`;

const ContentSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 60px;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px;

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 20px;
    line-height: 1.8;
  }

  button {
    background-color: black;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    transition: 0.3s;

    &:hover {
      background-color: #555;
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const founders = [
  {
    name: 'Vivek Goyal',
    role: 'Founder & CEO',
    image: 'assets/founder.jpg',
  },
  {
    name: 'Amit Sharma',
    role: 'Co-Founder & COO',
    image: 'assets/cofounder.jpg',
  },
  {
    name: 'Vivek Goyal',
    role: 'Creative Director',
    image: 'assets/founder.jpg',
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

const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  margin-bottom: 40px;
`;

const TitleCard = styled(Card)`
  text-align: center;
  background: linear-gradient(135deg, #f6f8fa 0%, #e9eef2 100%);
  border: 1px solid #e1e4e8;
`;

const FoundersGrid = styled.div`
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

const FounderCard = styled.div`
  flex: 0 1 calc(33.333% - 20px);
  border: 2px solid black;
  padding: 20px;
  // transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;  
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  // &:before {
  //   content: '';
  //   position: absolute;
  //   top: -50%;
  //   left: -50%;
  //   width: 200%;
  //   height: 200%;
  //   background: radial-gradient(
  //     circle,
  //     rgba(255, 255, 255, 0.8) 0%,
  //     rgba(255, 255, 255, 0) 70%
  //   );
  //   opacity: 0;
  //   transition: opacity 0.3s ease-in-out;
  // }

  // &:hover {
  //   transform: translateY(-10px);
  //   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  //   &:before {
  //     opacity: 1;
  //   }
  // }

  @media (max-width: 1200px) {
    flex: 0 1 calc(50% - 20px);
  }

  @media (max-width: 768px) {
    flex: 0 1 calc(50% - 20px);
  }

  @media (max-width: 576px) {
    flex: 0 1 100%;
  }
`;

const FounderImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-bottom: 2px solid black;
  margin-bottom: 20px;
`;

const FounderName = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`;

const FounderRole = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: gray;
`;

const About = () => {
  return (
    <Container>
      <TitleCard>
        <Title>About Us</Title>
      </TitleCard>

      <IntroSection>
        <MainSlogan>Your Gateway to Exclusive Fashion</MainSlogan>
        <SubSlogan>
          Catering to the discerning tastes of fashion-forward individuals who crave the latest trends and premium quality.
        </SubSlogan>
      </IntroSection>

      {/* Introduction Section */}
      <ContentSection>
        <ImageContainer>
          <img src="assets/branding.jpeg" alt="LeeBony Fashion" />
        </ImageContainer>
        <TextContainer>
          <h2>Discover the LeeBony Experience</h2>
          <p>
            LeeBony blends fashion with sustainability to bring you the latest trends while being mindful of the environment.
            From high-street fashion to bespoke styles, our collections cater to individuals who want to look good and feel good.
          </p>
          <button>View Our Collection</button>
        </TextContainer>
      </ContentSection>

      {/* LeeBony Products Section */}
      <ContentSection>
        <ImageContainer>
          <img src="assets/factory.jpeg" alt="LeeBony Products" />
        </ImageContainer>
        <TextContainer>
          <h2>Craftsmanship and Quality</h2>
          <p>
            Every piece in the LeeBony collection is designed with care and crafted to perfection. Our products stand the test of time,
            combining the latest styles with premium materials to give you a wardrobe you can count on.
          </p>
        </TextContainer>
      </ContentSection>

      {/* Quality Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Commitment to Quality</h2>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          At LeeBony, we are committed to delivering quality that exceeds expectations. Our rigorous quality checks ensure that every
          product is designed to last while remaining timeless in its appeal.
        </p>
      </section>

      {/* Founders Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
        <FoundersGrid>
          {founders.map((founder, index) => (
            <FounderCard key={index}>
              <FounderImage src={founder.image} alt={founder.name} />
              <FounderName>{founder.name}</FounderName>
              <FounderRole>{founder.role}</FounderRole>
            </FounderCard>
          ))}
        </FoundersGrid>
      </section>

      {/* Customer Reviews Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">What Our Customers Say</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-600">{testimonial.text}</p>
          <p className="text-sm text-gray-500 mb-2">- {testimonial.author}</p>
        </div>
      </section>

      {/* Social Media Section */}
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
    </Container>
  );
};

export default About;