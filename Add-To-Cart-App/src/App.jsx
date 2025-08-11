import { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});

  // Multiple Products
  const products = [
    {
      id: 1,
      name: "Wireless Mouse",
      price: 25.99,
      image: "https://m.media-amazon.com/images/I/51T-75FaWfL.jpg",
      size: "Medium",
      color: "Black/Gray",
      maxQuantity: 10,
      description: "Smooth navigation, ergonomic wireless mouse for daily use.",
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 69.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwhjz2vfyMq2CmypcQd1QCsLVj689zzSMBbQ&s",
      size: "Full Size",
      color: "Black RGB",
      maxQuantity: 8,
      description: "RGB backlit mechanical keyboard for gaming & typing.",
    },
    {
      id: 3,
      name: "USB-C Hub",
      price: 39.99,
      image: "https://m.media-amazon.com/images/I/61QbS525pgL.jpg",
      size: "Compact",
      color: "Silver",
      maxQuantity: 15,
      description: "Expand your laptop ports with this 6-in-1 USB-C hub.",
    },
    {
      id: 4,
      name: "Wireless Headphones",
      price: 89.99,
      image: "https://media.croma.com/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/231422_ejqiuy.png",
      size: "Adjustable",
      color: "Black",
      maxQuantity: 5,
      description: "Noise-cancelling wireless headphones for immersive sound.",
    }
  ];

  // Get available stock for product
  const getAvailableStock = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    const currentInCart = existingItem ? existingItem.qty : 0;
    return product.maxQuantity - currentInCart;
  };

  // Update quantity for each product
  const handleQuantity = (id, type) => {
    const currentQty = quantities[id] || 0;
    const availableStock = getAvailableStock(products.find(p => p.id === id));
    if (type === "inc" && currentQty < availableStock) {
      setQuantities({ ...quantities, [id]: currentQty + 1 });
    } else if (type === "dec" && currentQty > 0) {
      setQuantities({ ...quantities, [id]: currentQty - 1 });
    }
  };

  // Add to cart
  const addToCart = (product) => {
    const qty = quantities[product.id] || 0;
    const availableStock = getAvailableStock(product);

    if (qty > availableStock) {
      alert(`Only ${availableStock} items left in stock.`);
      return;
    }
    if (qty === 0) return;

    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + qty } : item
      ));
    } else {
      setCart([...cart, { ...product, qty }]);
    }
    setQuantities({ ...quantities, [product.id]: 0 });
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <h1 className="store-title">🛒 My Mini Store</h1>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product) => {
          const availableStock = getAvailableStock(product);
          const qty = quantities[product.id] || 0;

          return (
            <div className="product-card" key={product.id}>
              <div className="favorite">♡</div>
              <img src={product.image} alt={product.name} className="product-img" />
              <h2 className="product-title">{product.name}</h2>
              <div className="tags">
                <span className="tag">{product.size}</span>
                <span className="tag">{product.color}</span>
              </div>
              <p className="description">{product.description}</p>
              <p><b>Available:</b> {availableStock} left</p>
              <p className="price">${product.price.toFixed(2)}</p>

              <div className="counter">
                <button onClick={() => handleQuantity(product.id, "dec")} disabled={qty === 0}>➖</button>
                <span>{qty}</span>
                <button onClick={() => handleQuantity(product.id, "inc")} disabled={qty >= availableStock}>➕</button>
              </div>

              <button
                className="add-btn"
                onClick={() => addToCart(product)}
                disabled={qty === 0}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      {/* Cart Section */}
      <div className="cart-section">
        <h2>🛍️ Cart Items</h2>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - Qty: <b>{item.qty}</b>
                <button onClick={() => removeFromCart(item.id)}>❌ Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
