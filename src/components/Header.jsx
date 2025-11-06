import React, { useState, useEffect } from 'react'
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

    return (
    <div className={styles.header}> 
        {/* Burger Icon */}
        <div 
          className={`${styles.headerAbsoluteBurger} ${isMenuOpen ? styles.hidden : ''}`}
          onClick={toggleMenu}
        >
          <div className={styles.burgerItem}></div>
          <div className={styles.burgerItem}></div>
          <div className={styles.burgerItem}></div>
        </div>

        {/* Desktop Menu */}
        <div className={styles.headerInner}>
            <a href="#main"><div className={styles.headerLogo}></div></a>
            <div className={styles.headerLinks}>
              <nav className={styles.headerLinksNav}>
                <a href='#four'>About Us</a>
                <a href='#four'>Benefits</a>
                <a href='#four'>Media</a>
                <a href='#team'>Team</a>
                <a href='#faq'>FAQ</a>
              </nav>
            </div>
            <div className={styles.headerRight}>
              <Link to="https://app.nftforest.ge">
                <button>
                  Invest in GreWeCo
                </button>
              </Link>
            </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          {/* Close Button */}
          <div className={styles.closeButton} onClick={toggleMenu}>
            <div className={styles.closeIcon}></div>
            <div className={styles.closeIcon}></div>
          </div>

          {/* Mobile Menu Content */}
          <div className={styles.mobileMenuContent}>
            <div className={styles.headerLogoMobile}></div>
            
            <nav className={styles.mobileMenuLinks}>
              <a href='#four' onClick={closeMenu}>About Us</a>
              <a href='#team' onClick={closeMenu}>Team</a>
              <a href='#four' onClick={closeMenu}>Media</a>
              <a href='#faq' onClick={closeMenu}>FAQ</a>
              <a href='#four' onClick={closeMenu}>Benefits</a>
            </nav>

            <div className={styles.mobileMenuButton}>
              <Link to="https://app.nftforest.ge">
                <button onClick={closeMenu}>
                  Invest in GreWeCo
                </button>
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header
