import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Scissors, Palette, Sparkles, Hand, Zap, Crown } from 'lucide-react';

const Services = () => {
  const hairServices = [
    {
      icon: Palette,
      name: 'Hair Coloring',
      description: 'From subtle highlights to bold transformations, our color experts create stunning looks with premium products.',
      price: 'Starting ₹2,500',
      features: ['Highlights & Lowlights', 'Balayage', 'Ombre', 'Full Color', 'Root Touch-up']
    },
    {
      icon: Sparkles,
      name: 'Hair Botox Treatment',
      description: 'Deep conditioning therapy that repairs damage, adds shine, and eliminates frizz for silky smooth hair.',
      price: 'Starting ₹3,500',
      features: ['Damage Repair', 'Frizz Control', 'Deep Conditioning', 'Shine Enhancement']
    },
    {
      icon: Scissors,
      name: 'Haircut & Styling',
      description: 'Expert precision cuts tailored to your face shape, lifestyle, and personal style preferences.',
      price: 'Starting ₹800',
      features: ['Consultation', 'Wash & Cut', 'Blow Dry', 'Styling']
    },
    {
      icon: Zap,
      name: 'Keratin Treatment',
      description: 'Smooth, straight, and manageable hair that lasts for months with our professional keratin service.',
      price: 'Starting ₹4,500',
      features: ['Smoothing', 'Frizz Elimination', 'Long-lasting Results']
    }
  ];

  const beautyServices = [
    {
      icon: Hand,
      name: 'Manicure & Pedicure',
      description: 'Luxurious nail care with attention to detail, from classic to gel polish applications.',
      price: 'Starting ₹800',
      features: ['Classic Manicure', 'Pedicure', 'Gel Polish', 'Nail Art', 'French Manicure']
    },
    {
      icon: Sparkles,
      name: 'Facial Treatments',
      description: 'Rejuvenating facials customized to your skin type for a healthy, glowing complexion.',
      price: 'Starting ₹1,500',
      features: ['Deep Cleansing', 'Anti-Aging', 'Hydrating', 'Brightening']
    },
    {
      icon: Zap,
      name: 'Waxing Services',
      description: 'Gentle hair removal with premium wax for smooth, long-lasting results.',
      price: 'Starting ₹300',
      features: ['Full Body', 'Arms', 'Legs', 'Face', 'Bikini']
    }
  ];

  const bridalPackages = [
    {
      icon: Crown,
      name: 'Bridal Package - Premium',
      description: 'Complete bridal transformation including hair, makeup, and beauty treatments for your special day.',
      price: 'Starting ₹15,000',
      features: [
        'Pre-bridal consultation',
        'Hair styling & setting',
        'Professional makeup',
        'Manicure & Pedicure',
        'Facial treatment',
        'Trial session included'
      ]
    },
    {
      icon: Crown,
      name: 'Bridal Package - Deluxe',
      description: 'Our signature bridal experience with additional treatments and luxury products.',
      price: 'Starting ₹25,000',
      features: [
        'All Premium package services',
        'Pre-bridal treatments (3 sessions)',
        'Hair spa & botox',
        'Designer draping',
        'Family member styling (2 people)',
        'Multiple trial sessions'
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">Luxury treatments crafted to perfection</p>
        </div>
      </section>

      {/* Hair Services */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Hair Services</h2>
            <p className="section-subtitle">Expert care for your crowning glory</p>
          </div>
          <div className="services-list">
            {hairServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="service-detail-card">
                  <CardContent className="service-detail-content">
                    <div className="service-detail-header">
                      <div className="service-icon-wrapper">
                        <Icon className="service-detail-icon" />
                      </div>
                      <div className="service-detail-info">
                        <h3 className="service-detail-name">{service.name}</h3>
                        <p className="service-detail-price">{service.price}</p>
                      </div>
                    </div>
                    <p className="service-detail-description">{service.description}</p>
                    <ul className="service-features-list">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <Button 
                      className="service-book-btn"
                      onClick={() => window.open('https://wa.me/919167860528?text=Hi!%20I%27d%20like%20to%20book%20' + service.name, '_blank')}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beauty & Skin Services */}
      <section className="services-section alt-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Skin & Nail Care</h2>
            <p className="section-subtitle">Pamper yourself with our beauty treatments</p>
          </div>
          <div className="services-list">
            {beautyServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="service-detail-card">
                  <CardContent className="service-detail-content">
                    <div className="service-detail-header">
                      <div className="service-icon-wrapper">
                        <Icon className="service-detail-icon" />
                      </div>
                      <div className="service-detail-info">
                        <h3 className="service-detail-name">{service.name}</h3>
                        <p className="service-detail-price">{service.price}</p>
                      </div>
                    </div>
                    <p className="service-detail-description">{service.description}</p>
                    <ul className="service-features-list">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <Button 
                      className="service-book-btn"
                      onClick={() => window.open('https://wa.me/919167860528?text=Hi!%20I%27d%20like%20to%20book%20' + service.name, '_blank')}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bridal Packages */}
      <section className="services-section bridal-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Bridal & Event Packages</h2>
            <p className="section-subtitle">Look stunning on your most special day</p>
          </div>
          <div className="bridal-grid">
            {bridalPackages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <Card key={index} className="bridal-card">
                  <CardContent className="bridal-content">
                    <Icon className="bridal-icon" />
                    <h3 className="bridal-name">{pkg.name}</h3>
                    <p className="bridal-price">{pkg.price}</p>
                    <p className="bridal-description">{pkg.description}</p>
                    <div className="bridal-features">
                      <p className="features-title">Includes:</p>
                      <ul className="bridal-features-list">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      size="lg"
                      className="bridal-book-btn"
                      onClick={() => window.open('https://wa.me/919167860528?text=Hi!%20I%27d%20like%20to%20book%20' + pkg.name, '_blank')}
                    >
                      Book Consultation
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="pricing-note-section">
        <div className="container">
          <Card className="pricing-note-card">
            <CardContent className="pricing-note-content">
              <p className="pricing-note-text">
                <strong>Note:</strong> Prices may vary based on hair length, product selection, and specific requirements. 
                Book a free consultation to get a personalized quote tailored to your needs.
              </p>
              <Button 
                size="lg" 
                className="btn-primary"
                onClick={() => window.open('https://wa.me/919167860528?text=Hi!%20I%27d%20like%20to%20schedule%20a%20free%20consultation.', '_blank')}
              >
                Get Free Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;