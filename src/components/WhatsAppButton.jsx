import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919167860528?text=Hi!%20I%27d%20like%20to%20book%20an%20appointment%20at%20Kuts%20%26%20Kolor.', '_blank');
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <button 
        className="whatsapp-float"
        onClick={handleWhatsAppClick}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="whatsapp-icon" />
      </button>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${isVisible ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <X style={{ transform: 'rotate(45deg)' }} />
      </button>
    </>
  );
};

export default WhatsAppButton;