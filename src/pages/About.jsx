import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-page">
            <div style={{
                backgroundColor: 'var(--color-primary)',
                color: '#fff',
                padding: '5rem 1.5rem',
                textAlign: 'center'
            }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ fontSize: '3rem', marginBottom: '1rem' }}
                >
                    Our <span style={{ color: 'var(--color-secondary)' }}>Story</span>
                </motion.h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: '#ccc' }}>
                    Crafting elegance and perfection for men since 2002.
                </p>
            </div>

            <div style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                            20+ Years of <br /><span style={{ color: 'var(--color-secondary)' }}>Excellence</span>
                        </h2>
                        <p style={{ lineHeight: '1.8', color: 'var(--color-text)', marginBottom: '1.5rem' }}>
                            Welcome to <strong>Sri Sai Tailors</strong>. Founded by <strong>Madhu S</strong>, we have been serving the Chilkanagar and Uppal community with dedication and passion for over two decades.
                        </p>
                        <p style={{ lineHeight: '1.8', color: 'var(--color-text)', marginBottom: '1.5rem' }}>
                            What started as a humble shop has grown into a trusted destination for men's bespoke tailoring. We believe that every stitch matters, and every garment should tell a story of perfection.
                        </p>
                        <p style={{ lineHeight: '1.8', color: 'var(--color-text)' }}>
                            Our expertise lies in understanding the unique body type of each customer and delivering a fit that is not just comfortable but also enhances their personality.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1598030304671-5aa1e6fcefaf?q=80&w=800&auto=format&fit=crop"
                            alt="Tailoring tools"
                            style={{ width: '100%', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                        />
                    </motion.div>
                </div>
            </div>

            <div style={{ backgroundColor: '#f9f9f9', padding: '5rem 1.5rem', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Why Choose Us?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1rem', fontSize: '2.5rem', fontWeight: '700' }}>20+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1rem', fontSize: '2.5rem', fontWeight: '700' }}>5k+</h3>
                            <p>Happy Customers</p>
                        </div>
                        <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1rem', fontSize: '2.5rem', fontWeight: '700' }}>100%</h3>
                            <p>Perfect Fit Guarantee</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'center', padding: '4rem 1.5rem' }}>
                <h2>Ready to upgrade your wardrobe?</h2>
                <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Link to="/contact"><Button variant="primary">Visit Our Shop</Button></Link>
                    <Link to="/services"><Button variant="outline">View Services</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default About;
