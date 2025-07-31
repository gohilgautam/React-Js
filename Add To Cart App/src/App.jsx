import React, { useState, useEffect } from "react";
import "./Cart.css";

const products = [
  {
    id: 1,
    title: "Modern Sneakers",
    price: 1200,
    image: "https://images.unsplash.com/photo-1517263904808-5dc0d6a1df35?w=120",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 3500,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=120",
  },
  {
    id: 3,
    title: "Wireless Headphones",
    price: 2400,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=120",
  },
  {
    id: 4,
    title: "Leather Backpack",
    price: 1890,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=120",
  },
  {
    id: 5,
    title: "Bluetooth Speaker",
    price: 1550,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=120",
  },
  {
    id: 6,
    title: "Denim Jacket",
    price: 2199,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=120",
  },
  {
    id: 7,
    title: "Travel Mug",
    price: 450,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=120",
  },
  {
    id: 8,
    title: "Sunglasses",
    price: 799,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120",
  },
  {
    id: 9,
    title: "Fitness Tracker",
    price: 2999,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=120",
  },
  {
    id: 10,
    title: "Book: Atomic Habits",
    price: 499,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=120",
  },
  {
    id: 11,
    title: "Running Shoes",
    price: 1999,
    image: "https://images.unsplash.com/photo-1536697241164-b78df7773f9e?w=120",
  },
  {
    id: 12,
    title: "Wireless Mouse",
    price: 799,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=120",
  },
  {
    id: 13,
    title: "Mechanical Keyboard",
    price: 3499,
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=120",
  },
  {
    id: 14,
    title: "Desk Lamp",
    price: 1200,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=120",
  },
  {
    id: 15,
    title: "Smartphone Case",
    price: 599,
    image: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=120",
  },
  {
    id: 16,
    title: "Laptop Stand",
    price: 899,
    image: "https://images.unsplash.com/photo-1555617117-08a0e3f4e99a?w=120",
  },
  {
    id: 17,
    title: "Water Bottle",
    price: 499,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=120",
  },
  {
    id: 18,
    title: "Portable Charger",
    price: 1399,
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=120",
  },
  {
    id: 19,
    title: "Action Camera",
    price: 4599,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=120",
  },
  {
    id: 20,
    title: "Gaming Chair",
    price: 8999,
    image: "https://images.unsplash.com/photo-1549921296-3c4f0ff54421?w=120",
  },
  {
    id: 21,
    title: "Desk Organizer",
    price: 1099,
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=120",
  },
  {
    id: 22,
    title: "Graphic Tee",
    price: 899,
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=120",
  },
  {
    id: 23,
    title: "Coffee Maker",
    price: 2499,
    image: "https://images.unsplash.com/photo-1528447592735-261e75e6b0a7?w=120",
  },
  {
    id: 24,
    title: "Noise Cancelling Earbuds",
    price: 3399,
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=120",
  },
  {
    id: 25,
    title: "Smart Home Hub",
    price: 4999,
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=120",
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Show toast notification for 1.4s
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 1400);
  };

  // Add item or increase quantity
  const addToCart = (product) => {
    setCartItems((items) => {
      const exist = items.find((item) => item.id === product.id);
      if (exist) {
        showToast(`Added another "${product.title}"`);
        return items.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      showToast(`Added "${product.title}"`);
      return [...items, { ...product, qty: 1 }];
    });
    if (!isCartOpen) setIsCartOpen(true); // auto-open cart on add
  };

  // Increase quantity of item
  const increaseQty = (id) =>
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );

  // Decrease quantity, minimum 1
  const decreaseQty = (id) =>
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );

  // Remove item from cart
  const removeItem = (id) =>
    setCartItems((items) => items.filter((item) => item.id !== id));

  // Clear all items
  const removeAll = () => setCartItems([]);

  // Total item count for badge
  const totalCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  // Total cost
  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.qty, 0);

  // Close cart on Escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && isCartOpen) setIsCartOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isCartOpen]);

  return (
    <>
      {/* Toast */}
      {toast && (
        <div className="toast" aria-live="polite" tabIndex={0}>
          {toast}
        </div>
      )}

      {/* Floating Cart Icon */}
      <button
        aria-label={`Open cart with ${totalCount} items`}
        className="cart-icon-btn"
        onClick={() => setIsCartOpen(true)}
      >
        <svg
          aria-hidden="true"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          className="cart-icon-svg"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
      </button>

      {/* Products List */}
      <main className="product-list" aria-label="Product List">
        <h1 className="section-title">🛍️ Products</h1>
        <div className="products-grid">
          {products.map((product) => {
            const inCart = cartItems.find((item) => item.id === product.id);
            return (
              <div key={product.id} className="product-card" tabIndex={0}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                  loading="lazy"
                />
                <h3 className="product-title">{product.title}</h3>
                <div className="product-price">
                  ₹{product.price.toLocaleString()}
                </div>
                <div className="add-to-cart-wrapper" aria-live="polite">
                  {inCart ? (
                    <div className="qty-control-button">
                      <button
                        onClick={() => decreaseQty(product.id)}
                        disabled={inCart.qty === 1}
                        aria-label={`Decrease quantity of ${product.title}`}
                        className="qty-btn"
                      >
                        –
                      </button>
                      <span className="qty-display">{inCart.qty}</span>
                      <button
                        onClick={() => increaseQty(product.id)}
                        aria-label={`Increase quantity of ${product.title}`}
                        className="qty-btn"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="add-cart-btn"
                      onClick={() => addToCart(product)}
                      aria-label={`Add ${product.title} to cart`}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Slide-in Cart Sidebar */}
      <aside
        className={`cart-sidebar ${isCartOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Cart"
      >
        <div className="cart-sidebar-header">
          <h2>
            🛒 Your Cart {totalCount > 0 && <small>({totalCount} items)</small>}
          </h2>
          <button
            className="close-btn"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close Cart"
          >
            ×
          </button>
        </div>
        <div className="cart-sidebar-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart-illustration" aria-live="polite">
              <span role="img" aria-label="Empty Cart">
                🛒
              </span>
              <div>Your cart is empty!</div>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div className="cart-row" key={item.id} tabIndex={0}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-thumb"
                    loading="lazy"
                  />
                  <div className="cart-info">
                    <div className="cart-item-title">{item.title}</div>
                    <div className="price-info">
                      ₹{item.price.toLocaleString()} × {item.qty}
                    </div>
                    <div className="qty-controls">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        disabled={item.qty === 1}
                        aria-label={`Decrease quantity of ${item.title}`}
                      >
                        –
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        aria-label={`Increase quantity of ${item.title}`}
                      >
                        +
                      </button>
                      <button
                        className="remove-row"
                        onClick={() => removeItem(item.id)}
                        title={`Remove ${item.title}`}
                        aria-label={`Remove ${item.title} from cart`}
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <button
                className="remove-all-btn"
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to remove all items from the cart?"
                    )
                  ) {
                    removeAll();
                  }
                }}
                aria-label="Remove all items from cart"
              >
                Remove All
              </button>
            </>
          )}
        </div>
        <div className="cart-sidebar-footer">
          <div className="price-row">
            Subtotal: <span>₹{getTotal().toLocaleString()}</span>
          </div>
          <button
            className="btn-checkout"
            disabled={cartItems.length === 0}
            onClick={() => alert("Proceed to checkout (demo)")}
          >
            Checkout &rarr;
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {isCartOpen && (
        <div
          className="overlay"
          aria-hidden="true"
          onClick={() => setIsCartOpen(false)}
        />
      )}
    </>
  );
}

export default App;
