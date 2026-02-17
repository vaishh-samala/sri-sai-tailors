import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Menu, X, Phone } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import './Header.css';

const Header = () => {
    const { cart } = useShop();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    const toggleMenu = () => setIsMobileOpen(!isMobileOpen);
    const closeMenu = () => setIsMobileOpen(false);

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <Link to="/" className="logo-link" onClick={closeMenu}>
                    <span>Sri Sai</span> <span className="logo-highlight">Tailors</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="nav-desktop">
                    <ul className="nav-links">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink></li>
                        <li><NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink></li>
                        <li><NavLink to="/shop" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Fabrics Shop</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink></li>
                    </ul>
                </nav>

                {/* Actions */}
                <div className="nav-actions">
                    <a href="tel:+919912818675" className="cart-icon-btn hidden-mobile" title="Call Us">
                        <Phone size={24} />
                    </a>

                    <Link to="/cart" className="cart-icon-btn" onClick={closeMenu}>
                        <ShoppingBag size={24} />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>

                    <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                        {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-nav ${isMobileOpen ? 'open' : ''}`} onClick={closeMenu}>
                <div className="mobile-nav-content" onClick={e => e.stopPropagation()}>
                    <div className="mobile-nav-header">
                        <Link to="/" className="logo-link" onClick={closeMenu}>
                            Sri Sai
                        </Link>
                        <button onClick={closeMenu}><X size={24} /></button>
                    </div>
                    <ul className="mobile-links">
                        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
                        <li><Link to="/shop" onClick={closeMenu}>Fabrics Shop</Link></li>
                        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                        <li><Link to="/admin" onClick={closeMenu} style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>Admin</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
