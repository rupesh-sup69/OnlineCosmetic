// Cart functionality
let cart = [];
const cartBtn = document.getElementById('cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const emptyCartMessage = document.getElementById('empty-cart-message');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const cartBadge = document.getElementById('cart-badge');
const brandFilterBtns = document.querySelectorAll('.brand-filter-btn');
const categoryTabs = document.querySelectorAll('.category-tab');
const productsGrid = document.getElementById('products-grid');

// Current filters
let currentBrand = 'all';
let currentCategory = 'all';

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
});

// Setup all event listeners
function setupEventListeners() {
    // Cart toggle
    cartBtn.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);
    
    // Brand filter buttons
    brandFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            brandFilterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Update current brand filter
            currentBrand = btn.dataset.brand;
            // Re-render products with new filter
            renderProducts();
        });
    });
    
    // Category tabs
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            // Update current category filter
            currentCategory = tab.dataset.category;
            // Re-render products with new filter
            renderProducts();
        });
    });
    
    // Checkout button
    checkoutBtn.addEventListener('click', handleCheckout);
}

// Toggle cart sidebar
function toggleCart() {
    cartSidebar.classList.toggle('translate-x-full');
    cartOverlay.classList.toggle('hidden');
}

// Render products based on current filters
function renderProducts() {
    // Filter products based on current brand and category
    const filteredProducts = products.filter(product => {
        const brandMatch = currentBrand === 'all' || product.brand === currentBrand;
        const categoryMatch = currentCategory === 'all' || product.category === currentCategory;
        return brandMatch && categoryMatch;
    });
    
    // Clear products grid
    productsGrid.innerHTML = '';
    
    // Add filtered products to grid
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-lg font-medium text-gray-800">${product.name}</h3>
                <p class="text-sm text-gray-500 mb-2">${capitalizeFirstLetter(product.brand)}</p>
                <div class="flex justify-between items-center">
                    <span class="text-pink-500 font-bold">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn bg-pink-500 hover:bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center transition duration-300" data-id="${product.id}">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
        
        // Add event listener to add-to-cart button
        const addToCartBtn = productCard.querySelector('.add-to-cart-btn');
        addToCartBtn.addEventListener('click', () => addToCart(product));
    });
}

// Add product to cart
function addToCart(product) {
    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        // Increment quantity if product is already in cart
        existingItem.quantity += 1;
    } else {
        // Add new item to cart
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Update cart UI
    updateCart();
}

// Remove item from cart
function removeFromCart(productId) {
    // Find item index
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
        // Remove item from cart
        cart.splice(itemIndex, 1);
        
        // Update cart UI
        updateCart();
    }
}

// Update quantity of item in cart
function updateQuantity(productId, newQuantity) {
    // Find item
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        if (newQuantity <= 0) {
            // Remove item if quantity is 0 or less
            removeFromCart(productId);
        } else {
            // Update quantity
            item.quantity = newQuantity;
            
            // Update cart UI
            updateCart();
        }
    }
}

// Update cart UI
function updateCart() {
    // Update cart items
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        // Show empty cart message
        emptyCartMessage.classList.remove('hidden');
        checkoutBtn.disabled = true;
        cartBadge.classList.add('hidden');
    } else {
        // Hide empty cart message
        emptyCartMessage.classList.add('hidden');
        checkoutBtn.disabled = false;
        
        // Show cart badge with item count
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartBadge.textContent = totalItems;
        cartBadge.classList.remove('hidden');
        
        // Add cart items
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item flex items-center border-b border-gray-200 pb-4';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
                <div class="ml-4 flex-grow">
                    <h4 class="text-sm font-medium text-gray-800">${item.name}</h4>
                    <p class="text-xs text-gray-500">${capitalizeFirstLetter(item.brand)}</p>
                    <div class="flex items-center mt-1">
                        <button class="quantity-btn bg-gray-200 text-gray-600 w-6 h-6 rounded-full flex items-center justify-center" data-id="${item.id}" data-action="decrease">
                            <i class="fas fa-minus text-xs"></i>
                        </button>
                        <span class="mx-2 text-sm">${item.quantity}</span>
                        <button class="quantity-btn bg-gray-200 text-gray-600 w-6 h-6 rounded-full flex items-center justify-center" data-id="${item.id}" data-action="increase">
                            <i class="fas fa-plus text-xs"></i>
                        </button>
                    </div>
                </div>
                <div class="text-right">
                    <p class="text-pink-500 font-medium">$${(item.price * item.quantity).toFixed(2)}</p>
                    <button class="remove-btn text-gray-400 hover:text-gray-600 mt-1" data-id="${item.id}">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `;
            
            cartItemsContainer.appendChild(cartItem);
            
            // Add event listeners to quantity buttons
            const decreaseBtn = cartItem.querySelector('[data-action="decrease"]');
            const increaseBtn = cartItem.querySelector('[data-action="increase"]');
            const removeBtn = cartItem.querySelector('.remove-btn');
            
            decreaseBtn.addEventListener('click', () => updateQuantity(item.id, item.quantity - 1));
            increaseBtn.addEventListener('click', () => updateQuantity(item.id, item.quantity + 1));
            removeBtn.addEventListener('click', () => removeFromCart(item.id));
        });
    }
    
    // Update cart totals
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    cartTotal.textContent = `$${subtotal.toFixed(2)}`;
}

// Handle checkout
function handleCheckout() {
    if (cart.length === 0) return; // Silent return if cart is empty
    
    // Create WhatsApp message with cart items
    let message = "🛍️ *New Order from Cosmetic Hub*\n\n";
    
    cart.forEach(item => {
        message += `• ${item.quantity}x ${item.name}\n   💰 $${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    message += `\n*Total Amount: $${subtotal.toFixed(2)}*\n\n`;
    message += "Please confirm my order. Thank you! 😊";
    
    // Create WhatsApp URL
    const whatsappNumber = "9863038840";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Clear cart after opening WhatsApp
    cart = [];
    updateCart();
    toggleCart();
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Initialize Vapi on button click
document.getElementById('voice-assistant').addEventListener('click', () => {
    window.vapi.start();
  });
  
  // Optional: Auto-trigger agent when cart has items
  if (cartItems.length > 0) {
    window.vapi.start({
      context: {
        cart: cartItems, // Pass cart data to agent
        total: totalPrice
      }
    });
  }

  // In your Vapi agent's dashboard, add a custom function:
if (userSays === 'checkout') {
    window.open(`https://wa.me/9863038840?text=${encodeURIComponent(
      `Order Details:\n${cartItems.map(item => `${item.name} - ₹${item.price}`).join('\n')}\nTotal: ₹${totalPrice}`
    )}`);
  }