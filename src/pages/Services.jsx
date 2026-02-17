import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, Scissors, Ruler, Layers, Monitor } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Custom Shirt Stitching",
            description: "Experience the comfort of a perfectly fitted shirt. We offer various styles including formal, casual, and party wear with custom cuffs and collars.",
            price: "Stitching from ₹350",
            icon: <Shirt size={32} />
        },
        {
            id: 2,
            title: "Formal Pant Stitching",
            description: "Get sharp, well-fitted trousers tailored to your exact measurements. Choose from pleats, no-pleats, and various pocket styles.",
            price: "Stitching from ₹450",
            icon: <Scissors size={32} />
        },
        {
            id: 3,
            title: "Suit Stitching",
            description: "Premium 2-piece and 3-piece suits for weddings and corporate events. We ensure a flawless fit that enhances your personality.",
            price: "Stitching from ₹3500",
            icon: <Layers size={32} />
        },
        {
            id: 4,
            title: "Safari Suits",
            description: "Classic and comfortable safari suits for a distinguished look. Expertly tailored with attention to detail.",
            price: "Stitching from ₹1500",
            icon: <Ruler size={32} />
        },
        {
            id: 5,
            title: "Sherwani & Ethnic Wear",
            description: "Traditional wear stitching for special occasions. Kurta pajamas, Sherwanis, and jackets.",
            price: "Custom Pricing",
            icon: <Shirt size={32} />
        }
    ];

    return (
        <div className="services-page">
            <div className="services-hero">
                <h1>Our Tailoring Services</h1>
                <p>Expert craftsmanship for all your clothing needs</p>
            </div>

            <div className="services-list">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        className="service-item"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <div className="service-icon-wrapper">
                            {service.icon}
                        </div>
                        <h3>{service.title}</h3>
                        <p style={{ color: 'var(--color-text-light)', margin: '1rem 0' }}>{service.description}</p>
                        <div className="service-price">{service.price}</div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="alterations-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2>Alterations & Repairs</h2>
                <p style={{ margin: '1rem 0' }}>
                    We also provide quick and professional alteration services for men's clothes.
                    Whether it's resizing, length adjustment, or minor repairs, we ensure a perfect fit.
                </p>
                <p><strong>Note:</strong> Alterations are done on the same day depending on workload.</p>
            </motion.div>
        </div>
    );
};

export default Services;
