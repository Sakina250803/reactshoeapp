import React, { useState, useEffect } from 'react';
import HomePage from './Home';
import ProductsPage from './Products';
import AboutPage from './AboutPages';
import ContactPage from './ContactPages';
import LoginPage from './LoginPages';
import SignupPage from './SignupPage';
import CartPage from './CartPage';
import './App.css'; // ✅ Use external CSS for responsiveness

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    navigateTo('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    navigateTo('home');
  };

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (productId) => setCart(cart.filter(item => item.id !== productId));
  const clearCart = () => setCart([]);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const renderPage = () => {
    const props = { navigateTo, addToCart, cart, removeFromCart, clearCart, onLogin: handleLogin, isLoggedIn, user };
    switch (currentPage) {
      case 'home': return <HomePage {...props} />;
      case 'products': return <ProductsPage {...props} />;
      case 'about': return <AboutPage {...props} />;
      case 'contact': return <ContactPage {...props} />;
      case 'login': return <LoginPage {...props} />;
      case 'signup': return <SignupPage {...props} />;
      case 'cart': return <CartPage {...props} />;
      default: return <HomePage {...props} />;
    }
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo" onClick={() => navigateTo('home')}>ShoeStore</div>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <div className="nav-links">
              {['home', 'products', 'about', 'contact'].map(page => (
                <button
                  key={page}
                  className={`nav-button ${currentPage === page ? 'active' : ''}`}
                  onClick={() => navigateTo(page)}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </button>
              ))}
            </div>
            <div className="nav-actions">
              <button className="cart-button" onClick={() => navigateTo('cart')}>
                🛒 {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
              </button>
              {isLoggedIn ? (
                <>
                  <span className="user-name">Hi, {user?.name}</span>
                  <button className="auth-button" onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <>
                  <button className="auth-button" onClick={() => navigateTo('login')}>Login</button>
                  <button className="auth-button" onClick={() => navigateTo('signup')}>Sign Up</button>
                </>
              )}
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="mobile-header">
            <button className="mobile-cart" onClick={() => navigateTo('cart')}>🛒{cart.length > 0 && <span>{cart.length}</span>}</button>
            <button className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>

        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          {['home', 'products', 'about', 'contact'].map(page => (
            <button
              key={page}
              className={`mobile-nav-button ${currentPage === page ? 'active' : ''}`}
              onClick={() => navigateTo(page)}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
          {isLoggedIn ? (
            <>
              <div className="mobile-user-info">
                <span>{user?.name}</span>
                <span>{user?.email}</span>
              </div>
              <button className="mobile-auth-button" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button className="mobile-auth-button" onClick={() => navigateTo('login')}>Login</button>
              <button className="mobile-auth-button" onClick={() => navigateTo('signup')}>Sign Up</button>
            </>
          )}
        </div>
      </header>

      {/* Main */}
      <main className="main">{renderPage()}</main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 ShoeStore. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#shipping">Shipping Info</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
