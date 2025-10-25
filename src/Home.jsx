import React from 'react';

const HomePage = ({ navigateTo, addToCart }) => {
  const featuredProducts = [
    {
      id: 1,
      name: "Running Pro",
      price: 129.99,
      image: "https://www.urbansole.com.pk/cdn/shop/files/US-EX-5301_NAVY_5_7eaa4d54-e142-4ac2-825e-31f8b0c2de83.jpg?v=1759689803",
      description: "Perfect for your daily runs"
    },
    {
      id: 2,
      name: "Casual Walk",
      price: 89.99,
      image: "https://www.urbansole.com.pk/cdn/shop/files/US-EX-5302_BEIGE_5_e4e840d9-1b22-4f76-b415-3a69f1d3e22f.jpg?v=1759689809",
      description: "Comfortable everyday shoes"
    },
    {
      id: 3,
      name: "Basketball Elite",
      price: 149.99,
      image: "https://www.urbansole.com.pk/cdn/shop/files/US-GV-5101_OLIVE_5_3e8543e6-d062-4325-8a6a-f4b5d3f0660b.jpg?v=1759689830",
      description: "For the court champions"
    }
  ];

  const styles = {
    pageContainer: {
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    hero: {
      background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
      color: 'white',
      padding: '4rem 2rem',
      borderRadius: '10px',
      textAlign: 'center',
      marginBottom: '3rem'
    },
    heroContent: {
      maxWidth: '600px',
      margin: '0 auto'
    },
    heroTitle: {
      fontSize: '3rem',
      marginBottom: '1rem',
      fontWeight: 'bold'
    },
    heroSubtitle: {
      fontSize: '1.2rem',
      marginBottom: '2rem',
      opacity: 0.9
    },
    ctaButton: {
      backgroundColor: 'white',
      color: '#4CAF50',
      border: 'none',
      padding: '1rem 2rem',
      fontSize: '1.1rem',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'transform 0.2s ease'
    },
    featuredSection: {
      marginBottom: '3rem'
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '2.5rem',
      color: '#333',
      marginBottom: '2rem'
    },
    productsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      marginBottom: '3rem'
    },
    productCard: {
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '1.5rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      textAlign: 'center',
      transition: 'transform 0.3s ease'
    },
    productImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '5px',
      marginBottom: '1rem'
    },
    productName: {
      fontSize: '1.3rem',
      color: '#333',
      marginBottom: '0.5rem'
    },
    productDescription: {
      color: '#666',
      marginBottom: '1rem'
    },
    productPrice: {
      fontSize: '1.5rem',
      color: '#4CAF50',
      fontWeight: 'bold',
      marginBottom: '1rem'
    },
    addToCartButton: {
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      width: '100%',
      transition: 'background-color 0.3s ease'
    },
    featuresSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    feature: {
      textAlign: 'center',
      padding: '1rem'
    },
    featureTitle: {
      color: '#4CAF50',
      fontSize: '1.3rem',
      marginBottom: '0.5rem'
    },
    featureText: {
      color: '#666'
    }
  };

  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Step Into Style</h1>
          <p style={styles.heroSubtitle}>Discover the perfect pair for every occasion</p>
          <button 
            style={styles.ctaButton}
            onClick={() => navigateTo('products')}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section style={styles.featuredSection}>
        <h2 style={styles.sectionTitle}>Featured Products</h2>
        <div style={styles.productsGrid}>
          {featuredProducts.map(product => (
            <div key={product.id} style={styles.productCard}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <img 
                src={product.image} 
                alt={product.name}
                style={styles.productImage}
              />
              <h3 style={styles.productName}>{product.name}</h3>
              <p style={styles.productDescription}>{product.description}</p>
              <p style={styles.productPrice}>${product.price}</p>
              <button 
                style={styles.addToCartButton}
                onClick={() => addToCart(product)}
                onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <div style={styles.feature}>
          <h3 style={styles.featureTitle}>Free Shipping</h3>
          <p style={styles.featureText}>On orders over $50</p>
        </div>
        <div style={styles.feature}>
          <h3 style={styles.featureTitle}>30-Day Returns</h3>
          <p style={styles.featureText}>Hassle-free returns</p>
        </div>
        <div style={styles.feature}>
          <h3 style={styles.featureTitle}>Secure Payment</h3>
          <p style={styles.featureText}>Safe and secure checkout</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;