import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, Heart, Users, Phone, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      text: "My go-to place. Very nice service, all staff are very polite and good in their work.",
      author: "Regular Client",
      rating: 5
    },
    {
      text: "Been a regular client since ages, love the services and atmosphere.",
      author: "Long-time Client",
      rating: 5
    },
    {
      text: "I visited the salon today for hair colouring and I must say I am truly impressed. Mudasir made the entire experience exceptional.",
      author: "Rasika P.",
      rating: 5
    },
    {
      text: "I did my pedicure, manicure and French gel polish. The staff was friendly, the atmosphere was relaxing.",
      author: "Verified Client",
      rating: 5
    },
    {
      text: "The staff was friendly, the atmosphere was relaxing, and the treatment was done with great care.",
      author: "Dolly J.",
      rating: 5
    }
  ];

  const services = [
    {
      title: 'Hair Color',
      description: 'Expert color transformations with premium products',
      image: 'https://images.unsplash.com/photo-1605980625982-b128a7e7fde2?q=85&w=800'
    },
    {
      title: 'Hair Botox',
      description: 'Deep conditioning treatment for smooth, healthy hair',
      image: 'https://images.pexels.com/photos/20046793/pexels-photo-20046793.jpeg?w=800'
    },
    {
      title: 'Haircut & Styling',
      description: 'Precision cuts and stunning styles for every occasion',
      image: 'https://images.unsplash.com/photo-1696835196034-cf22e2b72736?q=85&w=800'
    },
    {
      title: 'Manicure & Pedicure',
      description: 'Luxury nail care with attention to every detail',
      image: 'https://images.pexels.com/photos/17056222/pexels-photo-17056222.jpeg?w=800'
    },
    {
      title: 'Waxing',
      description: 'Gentle hair removal for smooth, radiant skin',
      image: 'https://images.pexels.com/photos/4155019/pexels-photo-4155019.jpeg?w=800'
    },
    {
      title: 'Bridal Packages',
      description: 'Complete beauty solutions for your special day',
      image: 'https://images.pexels.com/photos/30452324/pexels-photo-30452324.jpeg?w=800'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1761931403671-d020a14928d9?w=400&q=85',
    'https://images.unsplash.com/photo-1768363530219-2db2db454b46?w=400&q=85',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=85',
    'https://images.unsplash.com/photo-1554519934-e32b1629d9ee?w=400&q=85',
    'https://images.pexels.com/photos/11817572/pexels-photo-11817572.jpeg?w=400',
    'https://images.pexels.com/photos/4981460/pexels-photo-4981460.jpeg?w=400'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <Star className="star-icon" fill="currentColor" />
            <span>4.9 Rating · 1,469 Reviews</span>
          </div>
          <h1 className="hero-title">
            KUTS & KOLOR
            <span className="hero-title-hindi">कुत्स & कोलोर</span>
          </h1>
          <p className="hero-tagline">Where Style Meets Excellence</p>
          <p className="hero-subtitle">Mumbai's Most Loved Luxury Salon</p>
          <div className="hero-cta">
            <Button size="lg" className="btn-primary" onClick={() => window.open('https://dingg.app', '_blank')}>
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="btn-whatsapp" onClick={() => window.open('https://wa.me/919167860528?text=Hi!%20I%27d%20like%20to%20book%20an%20appointment%20at%20Kuts%20%26%20Kolor.', '_blank')}>
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="features-grid">
            <Card className="feature-card">
              <CardContent className="feature-content">
                <Star className="feature-icon" />
                <h3>4.9★ Rated</h3>
                <p>1,469+ Happy Clients</p>
              </CardContent>
            </Card>
            <Card className="feature-card">
              <CardContent className="feature-content">
                <Award className="feature-icon" />
                <h3>Women-Owned</h3>
                <p>Empowering Excellence</p>
              </CardContent>
            </Card>
            <Card className="feature-card">
              <CardContent className="feature-content">
                <Heart className="feature-icon" />
                <h3>LGBTQ+ Friendly</h3>
                <p>Everyone Welcome</p>
              </CardContent>
            </Card>
            <Card className="feature-card">
              <CardContent className="feature-content">
                <Users className="feature-icon" />
                <h3>Expert Stylists</h3>
                <p>Skilled Professionals</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="featured-services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Signature Services</h2>
            <p className="section-subtitle">Luxury treatments tailored to perfection</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <Card key={index} className="service-card">
                <div className="service-image" style={{ backgroundImage: `url(${service.image})` }}>
                  <div className="service-overlay"></div>
                </div>
                <CardContent className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/services" className="service-link">Learn More</Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services">
              <Button size="lg" variant="outline">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof / Reviews */}
      <section className="reviews-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">Real experiences from real people</p>
          </div>
          <div className="review-carousel">
            <button className="review-nav review-prev" onClick={prevReview}>
              <ChevronLeft />
            </button>
            <Card className="review-card">
              <CardContent className="review-content">
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="star" fill="currentColor" />
                  ))}
                </div>
                <p className="review-text">"{reviews[currentReview].text}"</p>
                <p className="review-author">— {reviews[currentReview].author}</p>
              </CardContent>
            </Card>
            <button className="review-nav review-next" onClick={nextReview}>
              <ChevronRight />
            </button>
          </div>
          <div className="review-dots">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`review-dot ${index === currentReview ? 'active' : ''}`}
                onClick={() => setCurrentReview(index)}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="booking-section">
        <div className="container">
          <div className="booking-content">
            <h2 className="section-title">Ready for Your Transformation?</h2>
            <p className="section-subtitle">Book your appointment today and experience luxury like never before</p>
            <div className="booking-cta">
              <Button size="lg" className="btn-primary" onClick={() => window.open('https://dingg.app', '_blank')}>
                Book on Dingg.app
              </Button>
              <Button size="lg" variant="outline" className="btn-whatsapp" onClick={() => window.open('https://wa.me/919167860528?text=Hi!%20I%27d%20like%20to%20book%20an%20appointment%20at%20Kuts%20%26%20Kolor.', '_blank')}>
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Gallery Preview */}
      <section className="instagram-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Follow Our Journey</h2>
            <p className="section-subtitle">Daily transformations and style inspiration</p>
          </div>
          <div className="instagram-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="instagram-item" style={{ backgroundImage: `url(${image})` }}>
                <div className="instagram-overlay">
                  <Heart className="instagram-icon" />
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Button size="lg" variant="outline" onClick={() => window.open('https://instagram.com/kutsandkolor', '_blank')}>
              @KutsAndKolor on Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="location-section">
        <div className="container">
          <div className="location-grid">
            <div className="location-info">
              <h2 className="section-title">Visit Us</h2>
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <p className="info-label">Address</p>
                  <p className="info-text">Shop No. 9, Ground Floor, 3, Lamington Road</p>
                  <p className="info-text">Navjeevan Society, Dalal Estate</p>
                  <p className="info-text">Mumbai Central, Mumbai 400008</p>
                </div>
              </div>
              <div className="info-item">
                <Phone className="info-icon" />
                <div>
                  <p className="info-label">Phone</p>
                  <a href="tel:+919167860528" className="info-link">+91 91678 60528</a>
                </div>
              </div>
              <div className="info-item">
                <Clock className="info-icon" />
                <div>
                  <p className="info-label">Hours</p>
                  <p className="info-text">Monday - Sunday: 10:00 AM - 9:00 PM</p>
                  <p className="info-text-small">(Closed Wednesdays)</p>
                </div>
              </div>
            </div>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.6890277777777!2d72.82!3d18.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU3JzM2LjAiTiA3MsKwNDknMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KUTS & KOLOR Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;