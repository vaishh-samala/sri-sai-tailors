import React from 'react';
import { useShop } from '../context/ShopContext';
import Button from '../components/ui/Button';
import { Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, clearCart } = useShop();

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleCheckout = () => {
        if (cart.length === 0) return;
        alert('Proceeding to secure checkout...\n(This feature will be integrated with payment gateway)');
        // In a real app, this would redirect to payment
    };

    if (cart.length === 0) {
        return (
            <div className="cart-page" style={{ textAlign: 'center', padding: '5rem 1rem' }}>
                <ShoppingBag size={64} style={{ margin: '0 auto 1.5rem', color: '#ddd' }} />
                <h2>Your cart is empty</h2>
                <p style={{ margin: '1rem 0 2rem' }}>Looks like you haven't added any fabrics yet.</p>
                <Link to="/shop"><Button variant="primary">Start Shopping</Button></Link>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1>Your Cart ({cart.length} items)</h1>
                <Button variant="outline" size="small" onClick={clearCart}>Clear Cart</Button>
            </div>

            <div className="cart-items">
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-img" />
                        <div className="cart-item-details">
                            <div className="cart-item-title">{item.name}</div>
                            <div className="cart-item-price">₹{item.price}</div>
                        </div>

                        <div className="cart-controls">
                            <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                            <span style={{ fontWeight: '600', width: '20px', textAlign: 'center' }}>{item.quantity}</span>
                            <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>

                            <button
                                style={{ marginLeft: '1rem', color: 'var(--color-error)', background: 'none', border: 'none', cursor: 'pointer' }}
                                onClick={() => removeFromCart(item.id)}
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <div className="total-row">
                    <span>Total:</span>
                    <span>₹{total}</span>
                </div>
                <Button variant="primary" size="large" onClick={handleCheckout} style={{ width: '100%' }}>
                    Proceed to Checkout
                </Button>
            </div>
        </div>
    );
};

export default Cart;
