import React, { useState } from 'react';
import './App.css'; // Use external CSS for responsiveness

const ContactPage = ({ navigateTo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <h1 className="page-title">Contact Us</h1>
      
      <div className="contact-content">
        <div className="contact-info">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-item">
            <h3>Email</h3>
            <p>support@shoestore.com</p>
            <p>sales@shoestore.com</p>
          </div>
          <div className="contact-item">
            <h3>Phone</h3>
            <p>(555) 123-4567</p>
            <p>(555) 123-4568 (Fax)</p>
          </div>
          <div className="contact-item">
            <h3>Address</h3>
            <p>123 Shoe Street<br />Fashion District<br />New York, NY 10001</p>
          </div>
          <div className="contact-item">
            <h3>Hours</h3>
            <p>Monday - Friday: 9AM - 6PM<br />Saturday: 10AM - 4PM<br />Sunday: Closed</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 className="section-title">Send us a Message</h2>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows="6" required />
          <button type="submit">Send Message</button>
        </form>

        <div className="map-section">
          <h2 className="section-title">Find Us</h2>
          <div className="map-placeholder">
            Interactive Map - Store Location
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
