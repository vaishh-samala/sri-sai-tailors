import { createContext, useState, useContext, useEffect } from 'react';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Premium Cotton Shirt Fabric', category: 'shirt', price: 650, image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=600&auto=format&fit=crop', description: 'High quality pure cotton fabric, suitable for formal wear.' },
    { id: 2, name: 'Linen Blend Shirt Material', category: 'shirt', price: 850, image: 'https://images.unsplash.com/photo-1598030304671-5aa1e6fcefaf?q=80&w=600&auto=format&fit=crop', description: 'Breathable linen blend, perfect for summer.' },
    { id: 3, name: 'Formal Pant Fabric (Raymond)', category: 'pant', price: 1200, image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=600&auto=format&fit=crop', description: 'Classic Raymond formal trouser fabric.' },
    { id: 4, name: 'Italian Suit Length', category: 'suit', price: 4500, image: 'https://images.unsplash.com/photo-1594938298603-c8148c47e356?q=80&w=600&auto=format&fit=crop', description: 'Premium Italian wool blend for suits.' },
  ]);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const clearCart = () => setCart([]);

  const addProduct = (product) => {
    setProducts(prev => [...prev, { ...product, id: Date.now() }]);
  };

  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const value = {
    products,
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    addProduct,
    deleteProduct
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};
