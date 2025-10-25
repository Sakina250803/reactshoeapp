import React, { useState, useEffect } from 'react';

const CartPage = ({ cart, removeFromCart, clearCart, navigateTo }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const calculateTotal = () => cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  // Responsive flags
  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  const styles = {
    pageContainer: {
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    pageTitle: {
      textAlign: 'center',
      fontSize: isMobile ? '1.8rem' : '2rem',
      color: '#333',
      marginBottom: '2rem',
    },
    cartContent: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: '2rem',
      alignItems: 'flex-start',
    },
    cartItems: {
      flex: isMobile ? 'unset' : 2,
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '2rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      width: isMobile ? '100%' : 'auto',
    },
    cartSummary: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '2rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      position: isMobile ? 'static' : 'sticky',
      top: isMobile ? 'unset' : '2rem',
      width: isMobile ? '100%' : 'auto',
    },
    emptyCart: {
      textAlign: 'center',
      padding: '3rem',
    },
    emptyCartTitle: {
      fontSize: '1.5rem',
      color: '#666',
      marginBottom: '1rem',
    },
    emptyCartText: {
      color: '#999',
      marginBottom: '2rem',
    },
    shopButton: {
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      padding: '1rem 2rem',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1.1rem',
      transition: 'all 0.3s ease',
      width: isMobile ? '100%' : 'auto',
    },
    cartItem: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'flex-start' : 'center',
      padding: '1rem 0',
      borderBottom: '1px solid #eee',
      gap: '1rem',
    },
    itemImage: {
      width: isMobile ? '100%' : '80px',
      height: isMobile ? 'auto' : '80px',
      objectFit: 'cover',
      borderRadius: '5px',
    },
    itemDetails: {
      flex: 1,
    },
    itemName: {
      fontSize: '1.2rem',
      color: '#333',
      marginBottom: '0.5rem',
    },
    itemPrice: {
      fontSize: '1.1rem',
      color: '#4CAF50',
      fontWeight: 'bold',
    },
    removeButton: {
      backgroundColor: '#ff4444',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      marginTop: isMobile ? '0.5rem' : '0',
      transition: 'all 0.2s ease',
    },
    summaryTitle: {
      fontSize: '1.5rem',
      color: '#333',
      marginBottom: '1.5rem',
      textAlign: 'center',
    },
    summaryRow: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      marginBottom: '1rem',
      paddingBottom: '0.5rem',
      borderBottom: '1px solid #eee',
    },
    summaryLabel: {
      color: '#666',
    },
    summaryValue: {
      fontWeight: 'bold',
      color: '#333',
    },
    totalRow: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      marginTop: '1rem',
      paddingTop: '1rem',
      borderTop: '2px solid #4CAF50',
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    checkoutButton: {
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      padding: '1rem 2rem',
      borderRadius: '10px',
      cursor: 'pointer',
      fontSize: '1.2rem',
      width: '100%',
      marginTop: '1.5rem',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    },
    clearButton: {
      backgroundColor: 'transparent',
      color: '#ff4444',
      border: '1px solid #ff4444',
      padding: '0.5rem 1rem',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      marginTop: '1rem',
      width: isMobile ? '100%' : 'auto',
    },
  };

  // Empty cart view
  if (cart.length === 0) {
    return (
      <div style={styles.pageContainer}>
        <h1 style={styles.pageTitle}>Shopping Cart</h1>
        <div style={styles.emptyCart}>
          <h2 style={styles.emptyCartTitle}>Your cart is empty</h2>
          <p style={styles.emptyCartText}>Start shopping to add items to your cart</p>
          <button
            style={styles.shopButton}
            onClick={() => navigateTo('products')}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#45a049';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#4CAF50';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  // Cart with items
  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.pageTitle}>Shopping Cart</h1>
      <div style={styles.cartContent}>
        <div style={styles.cartItems}>
          <h2 style={styles.summaryTitle}>Cart Items ({cart.length})</h2>
          {cart.map((item, index) => (
            <div key={`${item.id}-${index}`} style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.itemImage} />
              <div style={styles.itemDetails}>
                <h3 style={styles.itemName}>{item.name}</h3>
                <p style={styles.itemPrice}>${item.price}</p>
                {item.category && <p>Category: {item.category}</p>}
              </div>
              <button
                style={styles.removeButton}
                onClick={() => removeFromCart(item.id)}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#cc0000')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#ff4444')}
              >
                Remove
              </button>
            </div>
          ))}
          <button style={styles.clearButton} onClick={clearCart}>
            Clear Entire Cart
          </button>
        </div>

        <div style={styles.cartSummary}>
          <h2 style={styles.summaryTitle}>Order Summary</h2>
          <div style={styles.summaryRow}>
            <span style={styles.summaryLabel}>Subtotal:</span>
            <span style={styles.summaryValue}>${calculateTotal()}</span>
          </div>
          <div style={styles.summaryRow}>
            <span style={styles.summaryLabel}>Shipping:</span>
            <span style={styles.summaryValue}>{calculateTotal() > 50 ? 'Free' : '$9.99'}</span>
          </div>
          <div style={styles.summaryRow}>
            <span style={styles.summaryLabel}>Tax:</span>
            <span style={styles.summaryValue}>${(calculateTotal() * 0.08).toFixed(2)}</span>
          </div>
          <div style={styles.totalRow}>
            <span>Total:</span>
            <span>
              ${(parseFloat(calculateTotal()) + (calculateTotal() > 50 ? 0 : 9.99) + (calculateTotal() * 0.08)).toFixed(2)}
            </span>
          </div>

          <button
            style={styles.checkoutButton}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#45a049';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#4CAF50';
              e.target.style.transform = 'scale(1)';
            }}
            onMouseDown={(e) => (e.target.style.transform = 'scale(0.95)')}
            onMouseUp={(e) => (e.target.style.transform = 'scale(1)')}
          >
            Proceed to Checkout
          </button>

          {calculateTotal() < 50 && (
            <p style={{ textAlign: 'center', marginTop: '1rem', color: '#4CAF50' }}>
              Add ${(50 - calculateTotal()).toFixed(2)} more for free shipping!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
