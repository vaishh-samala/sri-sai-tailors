import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [form, setForm] = useState({ name: '', phone: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${form.name}! We will contact you shortly.`);
        setForm({ name: '', phone: '', message: '' });
    };

    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you. Visit us or send a message.</p>
            </div>

            <div className="contact-container">
                <div className="contact-info-card">
                    <h2>Get in Touch</h2>

                    <div className="info-item">
                        <MapPin className="info-icon" />
                        <div>
                            <h3>Visit Us</h3>
                            <p>20-45/38, Chilkanagar,<br />Uppal, Hyderabad, 500059</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <Phone className="info-icon" />
                        <div>
                            <h3>Call Us</h3>
                            <p><a href="tel:+919912818675">+91 99128 18675</a></p>
                        </div>
                    </div>

                    <div className="info-item">
                        <MessageCircle className="info-icon" />
                        <div>
                            <h3>WhatsApp</h3>
                            <p><a href="https://wa.me/919912818675" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
                        </div>
                    </div>

                    <div className="info-item">
                        <Clock className="info-icon" />
                        <div>
                            <h3>Hours</h3>
                            <p>Mon - Sat: 10:00 AM - 9:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>

                    <div className="map-embed">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.857640306386!2d78.5566!3d17.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzMyLjAiTiA3OMKwMzMnMjMuOCJF!5e0!3m2!1sen!2sin!4v1625581234567!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>

                <div className="contact-form-card">
                    <h2>Send a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Your Name</label>
                            <input
                                type="text"
                                className="form-input"
                                value={form.name}
                                onChange={e => setForm({ ...form, name: e.target.value })}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                className="form-input"
                                value={form.phone}
                                onChange={e => setForm({ ...form, phone: e.target.value })}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                className="form-input"
                                rows="5"
                                value={form.message}
                                onChange={e => setForm({ ...form, message: e.target.value })}
                                required
                            ></textarea>
                        </div>

                        <Button type="submit" variant="primary" style={{ width: '100%' }}>Send Message</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
