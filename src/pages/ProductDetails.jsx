import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import Button from '../components/ui/Button';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const { products, addToCart } = useShop();
    const [showToast, setShowToast] = useState(false);

    // Find product
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div style={{ padding: '5rem', textAlign: 'center' }}>
                <h2>Product not found</h2>
                <Link to="/shop"><Button variant="secondary">Back to Shop</Button></Link>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(product);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

    return (
        <div className="product-details-page">
            <div className="product-details">
                <div className="detail-image-container">
                    <img src={product.image} alt={product.name} className="detail-image" />
                </div>

                <div className="detail-content">
                    <Link to="/shop" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--color-text-light)', marginBottom: '1rem' }}>
                        <ArrowLeft size={16} style={{ marginRight: '5px' }} /> Back to Shop
                    </Link>

                    <h1>{product.name}</h1>
                    <div className="detail-category">{product.category} Fabric</div>

                    <div className="detail-price">₹{product.price}</div>

                    <p className="detail-description">{product.description}</p>

                    <div className="detail-actions">
                        <Button size="large" onClick={handleAddToCart}>
                            <ShoppingBag size={20} style={{ marginRight: '10px' }} />
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>

            {showToast && (
                <div style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    background: 'var(--color-surface)',
                    color: 'var(--color-secondary)',
                    padding: '1rem 1.5rem',
                    borderRadius: '4px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    borderLeft: '4px solid var(--color-secondary)',
                    zIndex: 1000,
                    animation: 'slideIn 0.3s ease'
                }}>
                    Item added to cart!
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
