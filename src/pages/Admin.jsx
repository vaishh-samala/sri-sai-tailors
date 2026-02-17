import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import Button from '../components/ui/Button';
import { Trash2, Plus } from 'lucide-react';
import './Admin.css';

const Admin = () => {
    const { products, addProduct, deleteProduct } = useShop();

    const [formData, setFormData] = useState({
        name: '',
        category: 'shirt',
        price: '',
        image: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.price) return;

        addProduct({
            ...formData,
            price: Number(formData.price)
        });

        setFormData({
            name: '',
            category: 'shirt',
            price: '',
            image: '',
            description: ''
        });

        alert('Product added successfully!');
    };

    return (
        <div className="admin-dashboard">
            <div className="admin-header">
                <h1>Admin Dashboard</h1>
                <p>Manage products and shop inventory.</p>
            </div>

            <div className="admin-grid">
                {/* Add Product Form */}
                <div className="add-product-form">
                    <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Add New Product</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Product Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Ex: Italian Linen Fabric"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="form-select"
                            >
                                <option value="shirt">Shirt</option>
                                <option value="pant">Pant</option>
                                <option value="suit">Suit</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Price (₹)</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Ex: 850"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Image URL</label>
                            <input
                                type="text"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="https://example.com/image.jpg"
                            />
                        </div>

                        <div className="form-group">
                            <label>Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="form-textarea"
                                placeholder="Product details..."
                            ></textarea>
                        </div>

                        <Button type="submit" variant="primary" style={{ width: '100%' }}>
                            <Plus size={18} style={{ marginRight: '8px' }} /> Add Product
                        </Button>
                    </form>
                </div>

                {/* Product List */}
                <div>
                    <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Current Inventory</h2>
                    <div className="product-list">
                        {products.length === 0 ? (
                            <p style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>No products yet.</p>
                        ) : (
                            products.map(product => (
                                <div key={product.id} className="admin-product-item">
                                    <img src={product.image || 'https://via.placeholder.com/50'} alt={product.name} className="admin-product-img" />
                                    <div className="admin-product-info">
                                        <div className="admin-product-name">{product.name}</div>
                                        <div style={{ fontSize: '0.9rem', color: '#666' }}>₹{product.price} - {product.category}</div>
                                    </div>
                                    <button
                                        className="delete-btn"
                                        onClick={() => { if (window.confirm('Delete this product?')) deleteProduct(product.id) }}
                                        title="Delete Product"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
