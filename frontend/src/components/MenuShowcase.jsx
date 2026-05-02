import React, { useState } from 'react';
import { Utensils, ArrowLeft } from 'lucide-react';
import Starters from './menu/Starters';
import MainCourse from './menu/MainCourse';
import Breads from './menu/Breads';
import Desserts from './menu/Desserts';
import api from '../utils/api';

const MenuShowcase = () => {
  const [activeTab, setActiveTab] = useState('Main Course');
  const [showFullMenu, setShowFullMenu] = useState(false);
  const [cart, setCart] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const menuSections = [
    { category: "Starters", Component: Starters },
    { category: "Main Course", Component: MainCourse },
    { category: "Artisanal Breads", Component: Breads },
    { category: "Desserts", Component: Desserts }
  ];

  const ActiveComponent = menuSections.find(s => s.category === activeTab)?.Component || MainCourse;
  const hasCartItems = cart.length > 0;
  const totalAmount = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  const getNumericPrice = (priceText = '') => {
    const parsed = Number(String(priceText).replace(/[^0-9.]/g, ''));
    return Number.isFinite(parsed) ? parsed : 0;
  };

  const addToCart = (menuItem) => {
    const unitPrice = getNumericPrice(menuItem.price);
    setCart((prev) => {
      const existing = prev.find((item) => item.name === menuItem.name);
      if (existing) {
        return prev.map((item) =>
          item.name === menuItem.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { name: menuItem.name, unitPrice, quantity: 1 }];
    });
  };

  const updateQuantity = (name, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const placeOrder = async () => {
    if (!customerName.trim() || !hasCartItems) return;

    try {
      setIsPlacingOrder(true);
      await api.post('/orders', {
        customerName: customerName.trim(),
        items: cart,
        totalAmount,
      });

      setPopupMessage('Order placed successfully');
      setCart([]);
      setCustomerName('');
    } catch (error) {
      setPopupMessage(error?.response?.data?.message || 'Order failed. Please try again.');
    } finally {
      setIsPlacingOrder(false);
      setTimeout(() => setPopupMessage(''), 2500);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white font-['Inter']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <Utensils className="text-[var(--color-primary)] w-12 h-12" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[var(--color-neutral)] mb-4 md:mb-6 tracking-tight">
            {showFullMenu ? "Full Digital Menu" : "Signature Menu Highlights"}
          </h2>
          <p className="text-base md:text-xl text-gray-500">
            {showFullMenu 
              ? "A chronological journey through our partner restaurants' finest culinary creations."
              : "A curated selection of the finest dishes from our partner restaurants, crafted by world-class chefs."
            }
          </p>
        </div>

        {!showFullMenu ? (
          <>
            {/* Tabs View */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {menuSections.map((section) => (
                <button
                  key={section.category}
                  onClick={() => setActiveTab(section.category)}
                  className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium transition-all duration-300 ${
                    activeTab === section.category 
                    ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/20' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {section.category}
                </button>
              ))}
            </div>

            {/* Tabbed Menu Grid */}
            <div className="animate-fade-in-up">
              <ActiveComponent onAddItem={addToCart} />
            </div>

            {/* CTA to Full Menu */}
            <div className="mt-16 flex justify-center">
              <button 
                onClick={() => setShowFullMenu(true)}
                className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-sm"
              >
                View Full Digital Menu
              </button>
            </div>
          </>
        ) : (
          /* Sequential Full Menu View */
          <div className="space-y-16 md:space-y-24 animate-fade-in-up">
            
            {/* Back Button */}
            <div className="flex justify-center mb-8">
              <button 
                onClick={() => setShowFullMenu(false)}
                className="flex items-center gap-2 text-gray-500 hover:text-[var(--color-primary)] font-medium transition-colors px-5 py-2 rounded-full hover:bg-[var(--color-primary)]/5"
              >
                <ArrowLeft className="w-5 h-5" /> Back to Highlights
              </button>
            </div>

            <div className="space-y-24">
              {menuSections.map((section, sIdx) => (
                <div key={sIdx} className="relative">
                  <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-neutral)] whitespace-nowrap">
                      {section.category}
                    </h3>
                    <div className="h-px bg-gray-200 w-full"></div>
                  </div>

                  <section.Component onAddItem={addToCart} />
                </div>
              ))}
            </div>
            
            {/* Bottom Back Button */}
            <div className="flex justify-center mt-16 pt-8 border-t border-gray-100">
              <button 
                onClick={() => {
                  setShowFullMenu(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="border-2 border-gray-200 text-gray-500 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300"
              >
                Go Back
              </button>
            </div>
          </div>
        )}
        <div className="mt-14 bg-[#f7faf4] border border-[#e5efdf] rounded-2xl p-6 md:p-7">
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-neutral)] mb-4">Create Your Order</h3>
          <div className="grid md:grid-cols-[1fr_auto] gap-3 mb-5">
            <input
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Enter customer name"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none focus:border-[var(--color-primary)]"
            />
            <button
              onClick={placeOrder}
              disabled={!hasCartItems || !customerName.trim() || isPlacingOrder}
              className="bg-[var(--color-primary)] text-white font-semibold px-6 py-2.5 rounded-lg disabled:opacity-50"
            >
              {isPlacingOrder ? 'Placing...' : 'Place Order'}
            </button>
          </div>

          {!hasCartItems ? (
            <p className="text-sm text-gray-500">Add items from menu cards to place an order.</p>
          ) : (
            <div className="space-y-2">
              {cart.map((item) => (
                <div key={item.name} className="flex justify-between items-center bg-white border border-gray-100 rounded-lg px-3 py-2.5">
                  <div>
                    <p className="font-semibold text-[var(--color-neutral)] text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500">₹{item.unitPrice} x {item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(item.name, -1)} className="w-7 h-7 border rounded-full">-</button>
                    <button onClick={() => updateQuantity(item.name, 1)} className="w-7 h-7 border rounded-full">+</button>
                  </div>
                </div>
              ))}
              <div className="text-right pt-2 font-bold text-[var(--color-primary)]">Total: ₹{totalAmount}</div>
            </div>
          )}
        </div>

        {popupMessage && (
          <div className="fixed top-5 right-5 z-50 bg-[#006e1c] text-white px-5 py-3 rounded-lg shadow-xl">
            {popupMessage}
          </div>
        )}

      </div>
    </section>
  );
};

export default MenuShowcase;
