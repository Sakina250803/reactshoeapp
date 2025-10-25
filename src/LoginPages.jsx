import React, { useState } from 'react';

const LoginPage = ({ navigateTo, onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    onLogin({
      name: 'John Doe',
      email: formData.email
    });
  };

  const styles = {
    authContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh',
      padding: '2rem'
    },
    authCard: {
      backgroundColor: 'white',
      padding: '3rem',
      borderRadius: '10px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      width: '100%',
      maxWidth: '400px'
    },
    authTitle: {
      textAlign: 'center',
      fontSize: '2rem',
      color: '#4CAF50',
      marginBottom: '2rem'
    },
    authForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    authInput: {
      padding: '1rem',
      border: '2px solid #ddd',
      borderRadius: '5px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease'
    },
    authButton: {
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      padding: '1rem',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease',
      marginTop: '1rem'
    },
    authSwitch: {
      textAlign: 'center',
      marginTop: '2rem',
      color: '#666'
    },
    authLink: {
      color: '#4CAF50',
      cursor: 'pointer',
      fontWeight: 'bold',
      textDecoration: 'underline'
    },
    forgotPassword: {
      textAlign: 'center',
      marginTop: '1rem'
    },
    forgotLink: {
      color: '#666',
      textDecoration: 'none',
      fontSize: '0.9rem'
    }
  };

  return (
    <div style={styles.authContainer}>
      <div style={styles.authCard}>
        <h1 style={styles.authTitle}>Welcome Back</h1>
        <form onSubmit={handleSubmit} style={styles.authForm}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={styles.authInput}
            required
            onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.authInput}
            required
            onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
          />
          <button 
            type="submit" 
            style={styles.authButton}
            onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
          >
            Login
          </button>
        </form>
        
        <div style={styles.forgotPassword}>
          <a href="#forgot" style={styles.forgotLink}>Forgot your password?</a>
        </div>
        
        <p style={styles.authSwitch}>
          Don't have an account?{' '}
          <span 
            style={styles.authLink}
            onClick={() => navigateTo('signup')}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;