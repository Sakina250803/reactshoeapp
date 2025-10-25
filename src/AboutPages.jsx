import React from 'react';
import './App.css'; // External CSS for responsiveness

const AboutPage = ({ navigateTo }) => {
  return (
    <div className="about-page">
      <h1 className="page-title">About ShoeStore</h1>
      
      <div className="about-content">
        <section className="about-section">
          <h2 className="section-title">Our Story</h2>
          <p className="about-text">
            Founded in 2020, ShoeStore has been dedicated to providing high-quality, 
            comfortable, and stylish footwear for everyone. We believe that the right 
            pair of shoes can transform your day and elevate your confidence. From our 
            humble beginnings as a small local store, we've grown into a trusted 
            online destination for shoe lovers worldwide.
          </p>
        </section>

        <section className="about-section">
          <h2 className="section-title">Our Mission</h2>
          <p className="about-text">
            To offer a curated selection of premium shoes that combine style, comfort, 
            and durability. We're committed to sustainable practices and ensuring 
            customer satisfaction with every purchase. Our goal is to make quality 
            footwear accessible to everyone while maintaining the highest standards 
            of environmental responsibility.
          </p>
        </section>

        <section className="about-section">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Quality Assurance</h3>
              <p>All our shoes undergo rigorous quality checks and are made from premium materials</p>
            </div>
            <div className="feature-item">
              <h3>Customer First</h3>
              <p>24/7 customer support and easy 30-day return policy for complete peace of mind</p>
            </div>
            <div className="feature-item">
              <h3>Fast Shipping</h3>
              <p>Free shipping on orders over $50 with delivery within 2-3 business days</p>
            </div>
            <div className="feature-item">
              <h3>Eco-Friendly</h3>
              <p>Sustainable materials and environmentally conscious manufacturing processes</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="section-title">Our Values</h2>
          <p className="about-text">
            At ShoeStore, we value integrity, innovation, and customer satisfaction above all else. 
            We continuously strive to improve our products and services while maintaining fair 
            pricing and ethical business practices. Our team is passionate about footwear and 
            dedicated to helping you find the perfect pair for every step of your journey.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
