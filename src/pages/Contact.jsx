import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (value) => {
    setFormData({
      ...formData,
      service: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.phone || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const message = `Hi! I'd like to book an appointment at Kuts & Kolor.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'Not provided'}\nService: ${formData.service}\nPreferred Date: ${formData.date || 'Flexible'}\nMessage: ${formData.message || 'None'}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919167860528?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "We'll connect with you shortly!"
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      message: ''
    });
  };

  const hours = [
    { day: 'Monday', time: '10:00 AM - 9:00 PM' },
    { day: 'Tuesday', time: '10:00 AM - 9:00 PM' },
    { day: 'Wednesday', time: 'Closed' },
    { day: 'Thursday', time: '10:00 AM - 9:00 PM' },
    { day: 'Friday', time: '10:00 AM - 9:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 9:00 PM' },
    { day: 'Sunday', time: '10:00 AM - 9:00 PM' }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero contact-hero">
        <div className="page-hero-overlay"></div>
        <div className="container">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <Card className="contact-form-card">
              <CardContent className="contact-form-content">
                <h2 className="contact-form-title">Book an Appointment</h2>
                <p className="contact-form-subtitle">Fill out the form and we'll get back to you via WhatsApp</p>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <Label htmlFor="service">Service Interested In *</Label>
                    <Select onValueChange={handleServiceChange} value={formData.service}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hair-color">Hair Coloring</SelectItem>
                        <SelectItem value="hair-botox">Hair Botox Treatment</SelectItem>
                        <SelectItem value="haircut">Haircut & Styling</SelectItem>
                        <SelectItem value="keratin">Keratin Treatment</SelectItem>
                        <SelectItem value="manicure-pedicure">Manicure & Pedicure</SelectItem>
                        <SelectItem value="facial">Facial Treatment</SelectItem>
                        <SelectItem value="waxing">Waxing Services</SelectItem>
                        <SelectItem value="bridal">Bridal Package</SelectItem>
                        <SelectItem value="consultation">Free Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="form-group">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any special requests or questions?"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="submit-btn">
                    Send via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="contact-info">
              {/* Address Card */}
              <Card className="info-card">
                <CardContent className="info-card-content">
                  <MapPin className="info-card-icon" />
                  <h3 className="info-card-title">Visit Us</h3>
                  <p className="info-card-text">
                    Shop No. 9, Ground Floor, 3, Lamington Road<br />
                    Navjeevan Society, Dalal Estate<br />
                    Mumbai Central, Mumbai 400008<br />
                    Maharashtra, India
                  </p>
                  <Button 
                    variant="outline" 
                    className="info-card-btn"
                    onClick={() => window.open('https://goo.gl/maps/yourlink', '_blank')}
                  >
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* Phone Card */}
              <Card className="info-card">
                <CardContent className="info-card-content">
                  <Phone className="info-card-icon" />
                  <h3 className="info-card-title">Call Us</h3>
                  <a href="tel:+919167860528" className="info-card-link">
                    +91 91678 60528
                  </a>
                  <p className="info-card-text-small">Available during business hours</p>
                  <Button 
                    variant="outline" 
                    className="info-card-btn"
                    onClick={() => window.open('https://wa.me/919167860528?text=Hi!%20I%27d%20like%20to%20book%20an%20appointment.', '_blank')}
                  >
                    WhatsApp Us
                  </Button>
                </CardContent>
              </Card>

              {/* Hours Card */}
              <Card className="info-card hours-card">
                <CardContent className="info-card-content">
                  <Clock className="info-card-icon" />
                  <h3 className="info-card-title">Business Hours</h3>
                  <div className="hours-table">
                    {hours.map((schedule, index) => (
                      <div key={index} className={`hours-row ${schedule.time === 'Closed' ? 'closed' : ''}`}>
                        <span className="hours-day">{schedule.day}</span>
                        <span className="hours-time">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.6890277777777!2d72.82!3d18.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU3JzM2LjAiTiA3MsKwNDknMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KUTS & KOLOR Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;