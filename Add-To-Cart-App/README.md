React Shopping Cart Demo
A simple, responsive React shopping cart application that displays products in categorized grids, allows adding/removing items to/from the cart, and manages stock availability with visual feedback.

Features
Product Categories: Products are grouped into Fruits, Electronics, Grocery, Beverages, and Home Appliances.

Add to Cart: Users can add products to the cart with stock limitations.

Cart Management: Increment, decrement, or remove items; empty the entire cart.

Stock Handling: Prevents adding more items than available stock, with toast notifications.

UI/UX: Modern, clean design using CSS variables and flexbox grid layout.

Accessibility: Full keyboard support (close cart with Escape key).

Responsive Design: Works well on desktop and mobile screens.

Visual Feedback: Hover effects, stock badges, toast messages.

Getting Started
Prerequisites
Node.js (v14 or later recommended)

npm or yarn package manager

Installation
Clone the repository or download the source files.

Navigate to the project directory:

bash
cd your-project-directory
Install dependencies:

bash
npm install
# or
yarn install
Start the development server:

bash
npm start
# or
yarn start
Open http://localhost:5173 to view it in the browser.

Project Structure
App.jsx - Main React component rendering the product grid, cart panel, and managing cart state.

App.css - Stylesheet defining CSS variables, layout, animations, and responsive design.

Product images are referenced by URLs and shown in product cards.

Cart state is maintained using React's useState hook.

The app leverages CSS flexbox for layout and transitions for smooth interactions.

Usage
Click on the green plus (+) button on a product card to add that item to the cart.

The sticky cart button at the top-right shows the number of items in the cart and toggles the cart panel.

Inside the cart panel, increment or decrement quantities using the respective buttons.

The Empty Cart button removes all products from the cart.

The Checkout button is currently a placeholder for future functionality.

Toast messages briefly show if you try to add more than available stock.

Press ESC key to close the cart panel.

Customization and Extensibility
Add products: Extend the products array in App.jsx with new items.

Stock management: Currently static; you may connect it to a backend or local storage.

Checkout process: Integrate payment gateway or order functionality.

Theming: Modify CSS variables in App.css for easy color and style customizations.

Localization: Adapt text messages as needed.

License
This project is open for personal and educational use. Feel free to modify and distribute.

Acknowledgments
React for the frontend framework

Unsplash and other image sources for product images

Inspiration from modern e-commerce UI designs
