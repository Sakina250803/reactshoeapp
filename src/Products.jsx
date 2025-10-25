import React, { useState } from 'react';

const ProductsPage = ({ navigateTo, addToCart }) => {
  const allProducts = [
    { id: 1, name: "Running Pro", price: 129.99, category: "Running", image: "https://www.urbansole.com.pk/cdn/shop/files/US-EX-5302_BLACK_5_f658c16a-eee2-442b-a3ff-8bbd227e3938.jpg?v=1759689812" },
    { id: 2, name: "Casual Walk", price: 89.99, category: "Casual", image: "https://www.urbansole.com.pk/cdn/shop/files/drop_down_men_copy.jpg?v=1759841457" },
    { id: 3, name: "Basketball Elite", price: 149.99, category: "Sports", image: "https://www.urbansole.com.pk/cdn/shop/files/US-EX-3204BLACK_5.jpg?v=1757005967&width=510" },
    { id: 4, name: "Formal Elegance", price: 119.99, category: "Formal", image: "https://www.urbansole.com.pk/cdn/shop/files/US-FM-4353-TAN_Top_jpg_3.webp?v=1757005921" },
    { id: 5, name: "Hiking Master", price: 139.99, category: "Outdoor", image: "https://www.urbansole.com.pk/cdn/shop/files/US-SK-5102_NAVY_5_d9305116-4d09-4350-93a1-223d683d4832.jpg?v=1759690011&width=510" },
    { id: 6, name: "Shoes Pro", price: 99.99, category: "Skate", image: "https://www.urbansole.com.pk/cdn/shop/files/US-SK-5102_NAVY_5_d9305116-4d09-4350-93a1-223d683d4832.jpg?v=1759690011&width=510" },
    { id: 7, name: "Trail Runner", price: 134.99, category: "Running", image: "https://www.urbansole.com.pk/cdn/shop/files/US-EX-5302_NAVY_1_4b9d65b8-5a8c-450f-aec9-15e95d8db646.jpg?v=1759689814" },
    { id: 8, name: "Office Comfort", price: 109.99, category: "Casual", image: "https://www.urbansole.com.pk/cdn/shop/files/US-GV-5102_WARM_TAN_5_53fef2bc-6d58-415a-ac97-aec70c2a4e00.jpg?v=1759689838&width=510" },
  ];

  const categories = ["All", "Running", "Casual", "Sports", "Formal", "Outdoor", "Skate"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  const styles = {
    pageContainer: {
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    pageTitle: {
      textAlign: 'center',
      fontSize: '2.5rem',
      color: '#333',
      marginBottom: '2rem'
    },
    categoryFilter: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '2rem',
      flexWrap: 'wrap'
    },
    categoryButton: {
      backgroundColor: 'white',
      border: '2px solid #4CAF50',
      color: '#4CAF50',
      padding: '0.5rem 1rem',
      borderRadius: '25px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'all 0.3s ease'
    },
    categoryButtonActive: {
      backgroundColor: '#4CAF50',
      border: '2px solid #4CAF50',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '25px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 'bold'
    },
    productsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '2rem'
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
    productCategory: {
      color: '#666',
      fontSize: '0.9rem',
      marginBottom: '0.5rem',
      textTransform: 'uppercase',
      letterSpacing: '1px'
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
    }
  };

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.pageTitle}>Our Collection</h1>
      
      {/* Category Filter */}
      <div style={styles.categoryFilter}>
        {categories.map(category => (
          <button
            key={category}
            style={selectedCategory === category ? styles.categoryButtonActive : styles.categoryButton}
            onClick={() => setSelectedCategory(category)}
            onMouseOver={(e) => {
              if (selectedCategory !== category) {
                e.target.style.backgroundColor = '#4CAF50';
                e.target.style.color = 'white';
              }
            }}
            onMouseOut={(e) => {
              if (selectedCategory !== category) {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#4CAF50';
              }
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div style={styles.productsGrid}>
        {filteredProducts.map(product => (
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
            <p style={styles.productCategory}>{product.category}</p>
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
    </div>
  );
};

export default ProductsPage;