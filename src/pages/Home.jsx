import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Scissors, Ruler, Shirt } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import Button from '../components/ui/Button';
import './Home.css';

const Home = () => {
    const { products } = useShop();
    const featuredProducts = products.slice(0, 3);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Sri Sai <span className="section-title-highlight">Tailors</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Expert Men's Tailoring & Premium Fabrics for 20+ Years
                    </motion.p>
                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <Link to="/services">
                            <Button variant="outline" size="large">View Services</Button>
                        </Link>
                        <Link to="/shop">
                            <Button variant="primary" size="large">Shop Fabrics</Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="section bg-white">
                <div className="about-preview">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="section-header" style={{ textAlign: 'left' }}>
                            <h2>Legacy of <span className="section-title-highlight">Excellence</span></h2>
                        </div>
                        <p>
                            For over two decades, Sri Sai Tailors has been synonymous with quality craftsmanship in Uppal, Hyderabad.
                            We assume the art of tailoring is not just about stitching cloth, but about creating a perfect fit that instills confidence.
                        </p>
                        <br />
                        <p>
                            Under the expert guidance of <strong>Madhu S</strong>, we specialize in men's formal wear, offering bespoke
                            tailoring for shirts, trousers, suits, and safari suits.
                        </p>
                        <br />
                        <Link to="/about">
                            <Button variant="secondary">Read Our Story <ArrowRight size={16} style={{ marginLeft: '8px' }} /></Button>
                        </Link>
                    </motion.div>
                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1593030761757-71bd90dbe3e4?q=80&w=800&auto=format&fit=crop"
                            alt="Tailoring craftsmanship"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section bg-light">
                <div className="section-header">
                    <h2>Our <span className="section-title-highlight">Services</span></h2>
                    <p>Comprehensive tailoring solutions for men</p>
                </div>

                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div className="service-card" variants={itemVariants}>
                        <div className="service-icon"><Shirt size={40} /></div>
                        <h3 className="service-title">Custom Shirt Stitching</h3>
                        <p>Perfectly fitted shirts tailored to your measurements and style preferences.</p>
                    </motion.div>

                    <motion.div className="service-card" variants={itemVariants}>
                        <div className="service-icon"><Scissors size={40} /></div>
                        <h3 className="service-title">Formal Pant Stitching</h3>
                        <p>Sharp, crisp trousers and formal pants that offer both comfort and style.</p>
                    </motion.div>

                    <motion.div className="service-card" variants={itemVariants}>
                        <div className="service-icon"><Ruler size={40} /></div>
                        <h3 className="service-title">Suits & Safari Suits</h3>
                        <p>Premium suits tailored for weddings, business, and special occasions.</p>
                    </motion.div>
                </motion.div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <Link to="/services"><Button variant="secondary">View All Services</Button></Link>
                </div>
            </section>

            {/* Featured Fabrics */}
            <section className="section bg-white">
                <div className="section-header">
                    <h2>Premium <span className="section-title-highlight">Fabrics</span></h2>
                    <p>Hand-picked materials available for purchase</p>
                </div>

                <motion.div
                    className="featured-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {featuredProducts.map(product => (
                        <motion.div key={product.id} className="card" variants={itemVariants}>
                            <img src={product.image} alt={product.name} className="card-image" />
                            <div className="card-content">
                                <h3 className="card-title">{product.name}</h3>
                                <p className="card-text">{product.category.charAt(0).toUpperCase() + product.category.slice(1)} Fabric</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>₹{product.price}</span>
                                    <Link to={`/shop`}>
                                        <span style={{ color: 'var(--color-secondary)', fontWeight: '600', fontSize: '0.9rem' }}>View in Shop</span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <Link to="/shop"><Button variant="primary">Visit Online Shop</Button></Link>
                </div>
            </section>

            {/* Trust Line */}
            <section className="trust-banner">
                <motion.div
                    className="trust-content"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>Serving Happy Customers for Over 20 Years</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#e0e0e0' }}>
                        Visit our shop in Chilkanagar, Uppal or order premium fabrics from the comfort of your home.
                    </p>
                    <Link to="/contact">
                        <Button variant="outline" style={{ borderColor: '#fff', color: '#fff' }}>Contact Us Today</Button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
