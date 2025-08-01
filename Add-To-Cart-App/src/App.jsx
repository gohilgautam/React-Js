import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const products = [
  // Fruits
  {
    id: 1,
    name: "Apple",
    price: 50,
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    category: "Fruits",
    stock: 100,
  },
  {
    id: 2,
    name: "Daragon Fruit",
    price: 90,
    image: "https://i.pinimg.com/736x/ee/85/5d/ee855dab478b38a8d16d442e591e90ee.jpg",
    category: "Fruits",
    stock: 100,
  },
  {
    id: 3,
    name: "Orange",
    price: 40,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXV4Vadu_vzLTuFrPKlwcAkI1_7GzmemF6Gw&s",
    category: "Fruits",
    stock: 100,
  },
  {
    id: 4,
    name: "Grapes",
    price: 60,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8KDSk3j3PGdqciKxqMCKhbQg0pHXmZhoUTA&s",
    category: "Fruits",
    stock: 100,
  },
  {
    id: 5,
    name: "Strawberry",
    price: 80,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcTgn4eGhfeb2rj5LGb6-DofLwmlfsbm1ENQ&s",
    category: "Fruits",
    stock: 100,
  },
  {
    id: 14,
    name: "Kiwi",
    price: 90,
    image: "https://img.freepik.com/free-psd/flying-kiwi-fruit-slices-splash-green_191095-83215.jpg",
    category: "Fruits",
    stock: 100,
  },
  {
    id: 15,
    name: "Mango",
    price: 100,
    image: "https://i.pinimg.com/736x/f1/b4/ca/f1b4caeb3fa2d080715aa7da6699e61a.jpg",
    category: "Fruits",
    stock: 100,
  },

  // Electronics
  {
    id: 6,
    name: "Smartphone",
    price: 17000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSah17azW0UQobnq67H4ZIS3CUWKzQ7p9Ib0Q&s",
    category: "Electronics",
    stock: 100,
  },
  {
    id: 7,
    name: "Bluetooth Headphones",
    price: 2200,
    image: "https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_SL1500_.jpg",
    category: "Electronics",
    stock: 100,
  },
  {
    id: 8,
    name: "Smart Watch",
    price: 4999,
    image: "https://m.media-amazon.com/images/I/61Qe0euJJZL._AC_SL1500_.jpg",
    category: "Electronics",
    stock: 100,
  },
  {
    id: 9,
    name: "Laptop",
    price: 52000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxI0mZbrgDoDuUDvlJFwANEaowOu0G6Nv9sQ&s",
    category: "Electronics",
    stock: 100,
  },
  {
    id: 16,
    name: "Wireless Mouse",
    price: 500,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    category: "Electronics",
    stock: 100,
  },
  {
    id: 17,
    name: "LED Monitor",
    price: 7000,
    image: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg",
    category: "Electronics",
    stock: 100,
  },

  // Grocery
  {
    id: 10,
    name: "Basmati Rice 1kg",
    price: 120,
    image: "https://www.bigbasket.com/media/uploads/p/l/10000271_15-fresho-basmati-rice-rs-sona.jpg",
    category: "Grocery",
    stock: 100,
  },
  {
    id: 11,
    name: "Sunflower Oil 1L",
    price: 110,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPR9YIMTiCdOxYTo6I6QU_MizDZbbeZOfkUg&s",
    category: "Grocery",
    stock: 100,
  },
  {
    id: 12,
    name: "Aashirvaad Atta 5kg",
    price: 275,
    image: "https://5.imimg.com/data5/SELLER/Default/2022/9/XN/KQ/MA/160030693/aashirvaad-whole-wheat-atta-5kg.png",
    category: "Grocery",
    stock: 100,
  },
  {
    id: 13,
    name: "Tata Salt 1kg",
    price: 28,
    image: "https://m.media-amazon.com/images/I/614mm2hYHyL.jpg",
    category: "Grocery",
    stock: 100,
  },
  {
    id: 18,
    name: "Toor Dal 1kg",
    price: 130,
    image: "https://dookan.com/cdn/shop/files/1uGOXIfWTntqlNCc2JJ1E_f-AUTtPpPwa_da54b7a1-a5a9-42e1-ac3b-44d9c8a0ac3d.png?v=1743808506",
    category: "Grocery",
    stock: 100,
  },
  {
    id: 19,
    name: "Nestle Milk 1L",
    price: 65,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW0VgvbOhBFZEAwDRuQRJFKaqcNrIf37zc6Q&s",
    category: "Grocery",
    stock: 100,
  },

  // Beverages
  {
    id: 20,
    name: "Coca Cola (600ml)",
    price: 40,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    category: "Beverages",
    stock: 100,
  },
  {
    id: 21,
    name: "Tropicana Orange Juice",
    price: 55,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0lOIDl-DzRo5NE95qOmQMO4wJ4EXObgFUw&s",
    category: "Beverages",
    stock: 100,
  },
  {
    id: 22,
    name: "Red Bull Can",
    price: 110,
    image: "https://i.pinimg.com/736x/b8/9d/ee/b89deee1eda9ddd442a94bb5fdbc4f7e.jpg",
    category: "Beverages",
    stock: 100,
  },

  // Home Appliances
  {
    id: 23,
    name: "Mixer Grinder",
    price: 3500,
    image: "https://www.philips.co.in/c-dam/b2c/en_IN/marketing-catalog/kitchen-and-household/food-preparation-and-cooking/super-silent-mixer-grinder-product-image.png",
    category: "Home Appliances",
    stock: 100,
  },
  {
    id: 24,
    name: "Electric Kettle",
    price: 1100,
    image: "https://file.aiquickdraw.com/imgcompressed/img/compressed_f91450735ac1117aee7258b8868930be.webp",
    category: "Home Appliances",
    stock: 100,
  },
  {
    id: 25,
    name: "Refrigerator",
    price: 300000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf6Bt4bdP0w6iwGzTzE7ERkgjlIcZ0ZDaNHw&s",
    category: "Home Appliances",
    stock: 100,
  },
];


const groupByCategory = (array) =>
  array.reduce((acc, cur) => {
    acc[cur.category] = acc[cur.category] || [];
    acc[cur.category].push(cur);
    return acc;
  }, {});

function Cart() {
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [toast, setToast] = useState(null);
  const overlayRef = useRef();

  function getItemStock(id) {
    const prod = products.find(p => p.id === id);
    return prod ? prod.stock : 0;
  }

  function getCartQuantity(id) {
    return cart[id]?.quantity || 0;
  }

  function showStockToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(null), 1900);
  }

  function addToCart(product) {
    if (getCartQuantity(product.id) >= product.stock) {
      showStockToast(`Only ${product.stock} of "${product.name}" available.`);
      return;
    }
    setCart(prev => ({
      ...prev,
      [product.id]: {
        ...product,
        quantity: getCartQuantity(product.id) + 1,
      }
    }));
    setShowCart(true);
  }

  function increment(id) {
    const prod = products.find(p => p.id === id);
    if (getCartQuantity(id) >= prod.stock) {
      showStockToast(`Only ${prod.stock} of "${prod.name}" available.`);
      return;
    }
    setCart(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        quantity: prev[id].quantity + 1,
      }
    }));
  }

  function decrement(id) {
    setCart(prev => {
      if (prev[id].quantity === 1) {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      }
      return {
        ...prev,
        [id]: {
          ...prev[id],
          quantity: prev[id].quantity - 1
        }
      };
    });
  }

  function emptyCart() {
    setCart({});
  }

  // Full keyboard accessibility: close cart with Esc
  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === "Escape") setShowCart(false);
    };
    window.addEventListener("keydown", escHandler);
    return () => window.removeEventListener("keydown", escHandler);
  }, []);

  const totalItems = Object.values(cart).reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = Object.values(cart).reduce((sum, i) => sum + i.price * i.quantity, 0);

  const grouped = groupByCategory(products);

  return (
    <div className="fullscreen-bg">
      {toast && <div className="toast">{toast}</div>}
      <div
        className={`overlay${showCart ? " overlay-show" : ""}`}
        ref={overlayRef}
        onClick={() => setShowCart(false)}
        aria-hidden={!showCart}
        tabIndex={showCart ? 0 : -1}
        style={{ backdropFilter: showCart ? "blur(3.5px)" : undefined }}
      />
      {!showCart && (
        <button
          className="cart-toggle-button sticky-button"
          onClick={() => setShowCart(true)}
          aria-label={`Show Cart with ${totalItems} items`}
        >
          <span className="mini-cart-icon" aria-hidden>🛒</span>
          <span className="cart-count">{totalItems}</span>
        </button>
      )}
      <div className="container wide">
        <h2>Our Products</h2>
        {Object.keys(grouped).map(cat => (
          <div className="cat-section" key={cat}>
            <h3 className="cat-heading">{cat}</h3>
            <ul className="product-list">
              {grouped[cat].map(prod => {
                const prodStockLeft = prod.stock - getCartQuantity(prod.id);
                const isOutOfStock = prodStockLeft === 0;
                return (
                  <li key={prod.id} className="product-item">
                    <div className="prod-img-badge">
                      <img src={prod.image} alt={prod.name} className="product-image" />
                      <span className={`stock-badge${isOutOfStock ? " out" : ""}`}>
                        {isOutOfStock ? "Out of stock" : `${prodStockLeft} left`}
                      </span>
                    </div>
                    <div className="product-info">
                      <span>
                        {prod.name}
                        <br />
                        <span className="prod-price">₹{prod.price}</span>
                      </span>
                      <button
                        className="mini-add-cart"
                        onClick={() => addToCart(prod)}
                        aria-label={`Add ${prod.name} to cart`}
                        disabled={isOutOfStock}
                        tabIndex={isOutOfStock ? -1 : 0}
                        style={isOutOfStock
                          ? { opacity: 0.5, cursor: "not-allowed" }
                          : undefined
                        }
                      >
                        <span className="mini-cart-icon">＋</span>
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <aside className={`cart-panel${showCart ? " cart-open" : ""}`}
        role="dialog"
        aria-modal="true"
        tabIndex={0}
      >
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button
            className="close-cart-button"
            onClick={() => setShowCart(false)}
            aria-label="Close Cart"
          >
            ×
          </button>
        </div>
        {totalItems === 0 ? (
          <div className="empty-cart-section">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Empty Cart"
              className="empty-cart-image"
            />
            <p className="empty-cart-msg">
              Your cart is empty. Start adding some delicious items!
            </p>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {Object.values(cart).map(item => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-image" />
                  <div className="cart-info">
                    <span>
                      {item.name}
                      <br />
                      <span className="cart-prod-price">
                        ₹{item.price} × {item.quantity}
                      </span>
                    </span>
                    <div className="cart-buttons">
                      <button
                        onClick={() => increment(item.id)}
                        aria-label={`Increase quantity of ${item.name}`}
                        disabled={getCartQuantity(item.id) >= getItemStock(item.id)}
                        style={
                          getCartQuantity(item.id) >= getItemStock(item.id)
                            ? { opacity: 0.6, cursor: "not-allowed" }
                            : undefined
                        }
                      >
                        +
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => decrement(item.id)}
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        −
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-summary">
              <p>Total Items: <strong>{totalItems}</strong></p>
              <p>Total Price: <strong>₹{totalPrice}</strong></p>
            </div>
            <div className="cart-actions">
              <button className="empty-cart-button" onClick={emptyCart}>
                🗑️ Empty Cart
              </button>
              <button className="checkout-button">Proceed to Checkout</button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export default Cart;
