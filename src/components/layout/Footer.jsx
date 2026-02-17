import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Brand Section */}
                <div className="footer-section">
                    <Link to="/" className="footer-logo">SRI SAI TAILORS</Link>
                    <p className="footer-desc">
                        Expert Men's Tailoring & Premium Fabrics for 20+ Years.
                        Delivering quality craftsmanship and perfect fits.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <div className="footer-links">
                        <Link to="/">Home</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/shop">Fabrics Shop</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <div className="contact-info">
                        <div className="contact-item">
                            <MapPin size={20} color="var(--color-secondary)" />
                            <span>20-45/38, Chilkanagar, Uppal, Hyderabad, 500059</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={20} color="var(--color-secondary)" />
                            <span>+91 99128 18675</span>
                        </div>
                        <div className="contact-item">
                            <Clock size={20} color="var(--color-secondary)" />
                            <span>Mon - Sat: 10:00 AM - 9:00 PM<br />Sunday: Closed</span>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="footer-section">
                    <h3>Visit Shop</h3>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.857640306386!2d78.5566!3d17.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzMyLjAiTiA3OMKwMzMnMjMuOCJF!5e0!3m2!1sen!2sin!4v1625581234567!5m2!1sen!2sin"
                            className="map-frame"
                            allowFullScreen=""
                            loading="lazy"
                            title="Shop Location"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Sri Sai Tailors. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
