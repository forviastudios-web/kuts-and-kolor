import React, { useState } from 'react';
import { X, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1761931403671-d020a14928d9?w=800&q=85',
      category: 'cuts',
      alt: 'Hair styling transformation at Kuts and Kolor'
    },
    {
      url: 'https://images.unsplash.com/photo-1768363530219-2db2db454b46?w=800&q=85',
      category: 'color',
      alt: 'Hair color transformation at Kuts and Kolor salon Mumbai'
    },
    {
      url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=85',
      category: 'color',
      alt: 'Professional hair coloring service Mumbai'
    },
    {
      url: 'https://images.unsplash.com/photo-1554519934-e32b1629d9ee?w=800&q=85',
      category: 'color',
      alt: 'Blonde hair color transformation'
    },
    {
      url: 'https://images.pexels.com/photos/11817572/pexels-photo-11817572.jpeg?w=800',
      category: 'cuts',
      alt: 'Modern haircut styling'
    },
    {
      url: 'https://images.pexels.com/photos/4981460/pexels-photo-4981460.jpeg?w=800',
      category: 'color',
      alt: 'Highlights and balayage color work'
    },
    {
      url: 'https://images.unsplash.com/photo-1605980625982-b128a7e7fde2?w=800&q=85',
      category: 'color',
      alt: 'Hair color application process'
    },
    {
      url: 'https://images.pexels.com/photos/20046793/pexels-photo-20046793.jpeg?w=800',
      category: 'cuts',
      alt: 'Beautiful wavy hair styling result'
    },
    {
      url: 'https://images.pexels.com/photos/17056222/pexels-photo-17056222.jpeg?w=800',
      category: 'nails',
      alt: 'Professional pedicure service'
    },
    {
      url: 'https://images.pexels.com/photos/4155019/pexels-photo-4155019.jpeg?w=800',
      category: 'nails',
      alt: 'Luxury manicure treatment'
    },
    {
      url: 'https://images.pexels.com/photos/30452324/pexels-photo-30452324.jpeg?w=800',
      category: 'bridal',
      alt: 'Bridal makeup and styling'
    },
    {
      url: 'https://images.unsplash.com/photo-1696835196034-cf22e2b72736?w=800&q=85',
      category: 'cuts',
      alt: 'Hair styling in progress at salon'
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Work' },
    { id: 'color', label: 'Hair Color' },
    { id: 'cuts', label: 'Cuts & Styling' },
    { id: 'nails', label: 'Nails' },
    { id: 'bridal', label: 'Bridal' }
  ];

  const filteredImages = activeTab === 'all' ? images : images.filter(img => img.category === activeTab);

  const openLightbox = (url) => {
    setLightboxImage(url);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage('');
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="page-hero gallery-hero">
        <div className="page-hero-overlay"></div>
        <div className="container">
          <h1 className="page-title">Our Gallery</h1>
          <p className="page-subtitle">Transformations that speak for themselves</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          {/* Category Tabs */}
          <div className="gallery-tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`gallery-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => openLightbox(image.url)}
              >
                <img 
                  src={image.url} 
                  alt={image.alt}
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <Heart className="gallery-icon" />
                </div>
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="instagram-cta">
            <h3 className="instagram-cta-title">Follow Us for Daily Transformations</h3>
            <p className="instagram-cta-text">Tag us @KutsAndKolor to be featured!</p>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('https://instagram.com/kutsandkolor', '_blank')}
            >
              @KutsAndKolor on Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X />
          </button>
          <img 
            src={lightboxImage} 
            alt="Gallery item full view" 
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;