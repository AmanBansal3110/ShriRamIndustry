import React, { useState } from 'react';
import styled from 'styled-components';

// Update the TitleContainer and Title styled components
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

// Add this new styled component for the main container
const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column; // Change to column layout
  padding: 40px;
  background-color: white;
  min-height: calc(100vh - 80px);
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 725px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const LeftContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 725px) {
    flex: 1;
  }
`;

const MapContainer = styled.div`
  height: 400px;

  @media (max-width: 725px) {
    height: 300px;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const GetInTouchContainer = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 725px) {
    padding: 15px;
  }
`;

const GetInTouchTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 15px;

  @media (max-width: 725px) {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
`;

const ContactMethodsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;

  @media (max-width: 725px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const ContactMethodBox = styled.div`
  background-color: white;
  padding: 10px; // Reduced padding
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  svg {
    width: 24px; // Reduced size
    height: 24px;
    fill: #333;
    margin-bottom: 5px; // Reduced margin
  }

  a {
    color: #333;
    text-decoration: none;
    font-size: 0.8rem; // Slightly reduced font size
    display: block;
    
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 725px) {
    padding: 15px;
    
    svg {
      width: 20px;
      height: 20px;
    }

    a {
      font-size: 0.9rem;
    }
  }
`;

const QueriesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;

  input, textarea {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid black; /* Black border */
    border-radius: 5px;
    font-size: 1rem;
  }

  textarea {
    flex-grow: 1;
    min-height: 150px;
  }

  button {
    padding: 10px;
    background-color: black; /* Black button */
    color: white; /* White text */
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 30px;
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: #333;
  }
  
  p {
    margin-bottom: 5px;
  }
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  
  svg {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    fill: #333;
  }
  
  a {
    color: #333;
    text-decoration: none;
    font-size: 1.1rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SuccessMessage = styled.div`
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
`;

const ContactIntro = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 2px;
    background-color: #333;
    margin: 15px auto 0;
  }
`;

// Remove the old SocialMediaContainer definition

// Keep only this improved version of SocialMediaContainer
const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

// Keep the improved SocialMediaIcon
const SocialMediaIcon = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #333;

  svg {
    width: 40px;
    height: 40px;
    fill: #333;
    transition: fill 0.3s ease;
    margin-bottom: 10px;
  }

  &:hover svg {
    fill: ${props => props.hoverColor || '#0077b5'};
  }

  span {
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

const JoinUsContainer = styled.div`
  text-align: center;
  margin-top: 60px;
  padding: 40px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const JoinUsTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #333;
  margin-bottom: 30px;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: #333;
    margin: 15px auto 0;
  }
`;

const IntroSection = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const MainSlogan = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const SubSlogan = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;
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
  max-width: 1200px;
  margin: 0 auto 40px;
  width: 90%;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <>
      <TitleCard>
        <Title >Contact Us</Title>
      </TitleCard>
      <MainContainer>
        <ContentContainer>
          <LeftContainer>
            <GetInTouchContainer>
              <GetInTouchTitle>Get in Touch</GetInTouchTitle>
              <ContactMethodsContainer>
                <ContactMethodBox>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <a href="mailto:info@fashionstreet.com">info@fashionstreet.com</a>
                </ContactMethodBox>
                <ContactMethodBox>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </ContactMethodBox>
                <ContactMethodBox>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <a href="https://goo.gl/maps/...">Fashion Street, NY</a>
                </ContactMethodBox>
              </ContactMethodsContainer>
            </GetInTouchContainer>
            <MapContainer>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2328380181673!2d-122.4194155846812!3d37.774929279759576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581970b5b287d%3A0x5e3d4d5be1df1a1f!2sFashion%20Street!5e0!3m2!1sen!2sus!4v1645114884878!5m2!1sen!2sus"
              />
            </MapContainer>
          </LeftContainer>
          
          <QueriesContainer>
            <ContactIntro>
              Drop Us A Message
            </ContactIntro>
            {!isSubmitted ? (
              <ContactForm onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
                <button type="submit">Send Message</button>
              </ContactForm>
            ) : (
              <SuccessMessage>
                Thank you for your message! We'll get back to you soon.
              </SuccessMessage>
            )}
          </QueriesContainer>
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export default Contact;