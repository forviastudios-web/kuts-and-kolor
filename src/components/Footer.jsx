import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Heart, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section brand-section">
            <h3 className="footer-brand">KUTS & KOLOR</h3>
            <p className="footer-brand-hindi">कुत्स & कोलोर</p>
            <p className="footer-tagline">Where Style Meets Excellence</p>
            <div className="footer-badges">
              <div className="footer-badge">
                <Award className="badge-icon" />
                <span>Women-Owned</span>
              </div>
              <div className="footer-badge">
                <Heart className="badge-icon" />
                <span>LGBTQ+ Friendly</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links">
              <li>Hair Coloring</li>
              <li>Hair Botox</li>
              <li>Haircut & Styling</li>
              <li>Manicure & Pedicure</li>
              <li>Bridal Packages</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <MapPin className="contact-icon" />
                <span>Lamington Road, Mumbai Central<br />Mumbai 400008</span>
              </li>
              <li>
                <Phone className="contact-icon" />
                <a href="tel:+919167860528">+91 91678 60528</a>
              </li>
              <li>
                <Mail className="contact-icon" />
                <a href="mailto:info@kutsandkolor.com">info@kutsandkolor.com</a>
              </li>
            </ul>
            <div className="footer-social">
              <a href="https://instagram.com/kutsandkolor" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="https://facebook.com/kutsandkolor" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Kuts & Kolor. All rights reserved.
          </p>
          <p className="footer-credit">
            Proudly Women-Owned | LGBTQ+ Friendly | Rated 4.9★ on Google
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;