import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ShoppingBag, Eye, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Shop.css';

const Shop = () => {
    const { products, addToCart } = useShop();
    const [filter, setFilter] = useState('all');
    const [showToast, setShowToast] = useState(false);

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(p => p.category === filter);

    const categories = ['all', 'shirt', 'pant', 'suit'];

    const handleAddToCart = (product) => {
        addToCart(product);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <div className="shop-page">
            <div className="shop-header">
                <h1>Shop Fine Fabrics</h1>
                <p>Browse our collection of premium materials for your next outfit.</p>

                <div className="filters">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}s
                        </button>
                    ))}
                </div>
            </div>

            <div className="shop-container">
                {filteredProducts.length === 0 ? (
                    <div className="empty-state">
                        <h3>No products found in this category.</h3>
                    </div>
                ) : (
                    <div className="products-grid">
                        {filteredProducts.map(product => (
                            <motion.div
                                key={product.id}
                                className="card product-card"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                layout
                            >
                                <div style={{ position: 'relative' }}>
                                    <img src={product.image} alt={product.name} className="card-image" />
                                    <div style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        background: 'white',
                                        padding: '5px',
                                        borderRadius: '50%',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                                    }}>
                                        <Link to={`/shop/${product.id}`} style={{ display: 'flex' }}>
                                            <Eye size={18} color="var(--color-text)" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="card-content">
                                    <h3 className="card-title" style={{ fontSize: '1.1rem' }}>{product.name}</h3>
                                    <p className="card-text" style={{ fontSize: '0.85rem' }}>
                                        {product.description.length > 60 ? product.description.substring(0, 60) + '...' : product.description}
                                    </p>

                                    <div className="product-price">
                                        <span>₹{product.price}</span>
                                        <button
                                            className="add-btn"
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            <AnimatePresence>
                {showToast && (
                    <motion.div
                        className="toast"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                    >
                        <ShoppingBag size={20} style={{ marginRight: '10px' }} />
                        Item added to cart!
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Shop;
