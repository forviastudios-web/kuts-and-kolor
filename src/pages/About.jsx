import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Award, Heart, Users, Star, Sparkles, Crown } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence in Every Detail',
      description: 'We are committed to delivering the highest standards of service, using premium products and advanced techniques.'
    },
    {
      icon: Heart,
      title: 'Inclusive & Welcoming',
      description: 'As a proudly LGBTQ+ friendly and women-owned salon, we celebrate diversity and make everyone feel at home.'
    },
    {
      icon: Users,
      title: 'Expert Professionals',
      description: 'Our skilled team brings years of experience and continuous training to ensure you receive the best care.'
    },
    {
      icon: Sparkles,
      title: 'Client-First Philosophy',
      description: 'Your satisfaction is our priority. We listen, customize, and deliver results that exceed expectations.'
    }
  ];

  const team = [
    {
      name: 'Mudasir',
      role: 'Lead Hair Colorist',
      specialty: 'Color Transformations & Balayage',
      image: 'https://images.unsplash.com/photo-1759142016096-a9d1a5ebcc09?w=400&q=85',
      bio: 'With over 10 years of experience, Mudasir is known for creating stunning color transformations that clients rave about.'
    },
    {
      name: 'Senior Stylist',
      role: 'Hair Cutting Specialist',
      specialty: 'Precision Cuts & Styling',
      image: 'https://images.unsplash.com/photo-1581900016418-499c9c307038?w=400&q=85',
      bio: 'Expert in creating personalized cuts that perfectly complement your face shape and lifestyle.'
    },
    {
      name: 'Beauty Expert',
      role: 'Skin & Nail Specialist',
      specialty: 'Facials & Nail Art',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?w=400',
      bio: 'Passionate about helping clients achieve healthy, glowing skin and beautiful nails.'
    }
  ];

  const achievements = [
    { number: '4.9', label: 'Google Rating', icon: Star },
    { number: '1,469+', label: 'Happy Clients', icon: Users },
    { number: '10+', label: 'Years Experience', icon: Award },
    { number: '100%', label: 'Quality Guaranteed', icon: Crown }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="container">
          <h1 className="page-title">About Kuts & Kolor</h1>
          <p className="page-subtitle">कुत्स & कोलोर</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <div className="story-paragraphs">
                <p>
                  Welcome to <strong>Kuts & Kolor</strong>, Mumbai Central's most loved luxury unisex salon. 
                  Founded with a vision to make everyone look and feel their most confident self, we've grown 
                  into a trusted name in premium grooming and beauty services.
                </p>
                <p>
                  As a <strong>women-owned</strong> establishment, we understand the importance of creating a space 
                  where everyone feels valued and respected. We're proud to be <strong>LGBTQ+ friendly</strong>, 
                  welcoming clients from all walks of life with warmth and professionalism.
                </p>
                <p>
                  Our team of skilled professionals is committed to delivering exceptional results using the finest 
                  products and latest techniques. From expert hair color transformations to luxurious spa treatments, 
                  every service is crafted with precision and care.
                </p>
                <p>
                  With a <strong>4.9-star rating</strong> from over 1,469 reviews, our clients' satisfaction speaks 
                  for itself. We don't just create beautiful looks—we create experiences that leave lasting impressions.
                </p>
              </div>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1773904215697-e6c21fc27ac2?w=600&q=85" 
                alt="Kuts and Kolor salon interior"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements-section">
        <div className="container">
          <div className="achievements-grid">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="achievement-card">
                  <CardContent className="achievement-content">
                    <Icon className="achievement-icon" />
                    <h3 className="achievement-number">{achievement.number}</h3>
                    <p className="achievement-label">{achievement.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">What sets us apart</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="value-card">
                  <CardContent className="value-content">
                    <Icon className="value-icon" />
                    <h3 className="value-title">{value.title}</h3>
                    <p className="value-description">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">Skilled professionals dedicated to your beauty</p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <Card key={index} className="team-card">
                <div className="team-image" style={{ backgroundImage: `url(${member.image})` }}></div>
                <CardContent className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-specialty">{member.specialty}</p>
                  <p className="team-bio">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="recognition-section">
        <div className="container">
          <Card className="recognition-card">
            <CardContent className="recognition-content">
              <Star className="recognition-star" fill="currentColor" />
              <h2 className="recognition-title">Mumbai's Most Loved Luxury Salon</h2>
              <p className="recognition-subtitle">
                Rated 4.9 stars on Google with over 1,469 reviews
              </p>
              <div className="recognition-badges">
                <div className="badge">
                  <Award className="badge-icon" />
                  <span>Women-Owned</span>
                </div>
                <div className="badge">
                  <Heart className="badge-icon" />
                  <span>LGBTQ+ Friendly</span>
                </div>
                <div className="badge">
                  <Sparkles className="badge-icon" />
                  <span>Premium Quality</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;