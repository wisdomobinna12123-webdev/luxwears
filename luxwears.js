// ============================================================
// LUXWEARS - Premium Men's Boutique Template
// Configuration & Product Data
// ============================================================

// ===== CONFIG =====
// Buyers: Edit these values to customize the template
const CONFIG = {
    brandName: 'Luxwears',
    whatsappNumber: 'YOUR_WHATSAPP_NUMBER', // e.g. '2348012345678' (country code + number, no +)
    currency: '₦',
    locale: 'en-NG',
    storagePrefix: 'luxwears', // localStorage keys prefix
};

// ===== PRODUCT DATA =====
// Buyers: Add, edit, or remove products here
// Categories must match the data-category attributes in index.html
const PRODUCTS = {
    bags: [
        { id: 'bag1', name: 'Leather Tote Bag', price: 45000, tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop&q=80' },
        { id: 'bag2', name: 'Crossbody Sling', price: 28000, tag: 'New', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop&q=80' },
        { id: 'bag3', name: 'Vintage Leather Backpack', price: 55000, tag: 'Premium', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop&q=80' },
        { id: 'bag4', name: 'Canvas Weekend Bag', price: 38000, tag: 'Classic', image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=600&h=800&fit=crop&q=80' },
        { id: 'bag5', name: 'Slim Laptop Briefcase', price: 48000, tag: 'Business', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop&q=80' },
        { id: 'bag6', name: 'Nylon Crossbody Pack', price: 22000, tag: 'Street', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop&q=80' },
        { id: 'bag7', name: 'Designer Duffel Bag', price: 65000, tag: 'Luxury', image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=600&h=800&fit=crop&q=80' },
        { id: 'bag8', name: 'Minimal Card Holder', price: 15000, tag: 'Essential', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=800&fit=crop&q=80' },
        { id: 'bag9', name: 'Travel Messenger Bag', price: 42000, tag: 'Travel', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop&q=80' }
    ],
    shoes: [
        { id: 'shoe1', name: 'Black Chelsea Boots', price: 60000, tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=800&fit=crop&q=80' },
        { id: 'shoe2', name: 'White Sneakers', price: 35000, tag: 'Classic', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop&q=80' },
        { id: 'shoe3', name: 'Brown Oxford Shoes', price: 55000, tag: 'Formal', image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&h=800&fit=crop&q=80' },
        { id: 'shoe4', name: 'Grey Running Shoes', price: 40000, tag: 'Sport', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop&q=80' },
        { id: 'shoe5', name: 'Tan Loafers', price: 48000, tag: 'Elegant', image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&h=800&fit=crop&q=80' },
        { id: 'shoe6', name: 'Suede Desert Boots', price: 52000, tag: 'Trending', image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&h=800&fit=crop&q=80' },
        { id: 'shoe7', name: 'Classic Monk Strap', price: 58000, tag: 'Premium', image: 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=600&h=800&fit=crop&q=80' },
        { id: 'shoe8', name: 'Navy Canvas Shoes', price: 28000, tag: 'Casual', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=800&fit=crop&q=80' },
        { id: 'shoe9', name: 'Black Derby Shoes', price: 50000, tag: 'Classic', image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=600&h=800&fit=crop&q=80' }
    ],
    trousers: [
        { id: 'trouser1', name: 'Olive Baggy Pants', price: 25000, tag: 'Trending', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop&q=80' },
        { id: 'trouser2', name: 'Black Cargo Baggy', price: 27000, tag: 'Street', image: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600&h=800&fit=crop&q=80' },
        { id: 'trouser3', name: 'Beige Wide-Leg Trousers', price: 30000, tag: 'Minimal', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop&q=80' },
        { id: 'trouser4', name: 'Grey Pleated Baggy', price: 28000, tag: 'Classic', image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=600&h=800&fit=crop&q=80' },
        { id: 'trouser5', name: 'Navy Parachute Pants', price: 32000, tag: 'New', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop&q=80' },
        { id: 'trouser6', name: 'Brown Corduroy Baggy', price: 29000, tag: 'Vintage', image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=800&fit=crop&q=80' },
        { id: 'trouser7', name: 'White Linen Trousers', price: 35000, tag: 'Summer', image: 'https://images.unsplash.com/photo-1594938328870-9623159c8c99?w=600&h=800&fit=crop&q=80' },
        { id: 'trouser8', name: 'Charcoal Wool Pants', price: 40000, tag: 'Premium', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop&q=80' },
        { id: 'trouser9', name: 'Khaki Utility Cargo', price: 31000, tag: 'Utility', image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=600&h=800&fit=crop&q=80' }
    ],
    watches: [
        { id: 'watch1', name: 'Minimal Green Dial', price: 80000, tag: 'Limited', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&h=800&fit=crop&q=80' },
        { id: 'watch2', name: 'Silver Chronograph', price: 95000, tag: 'Premium', image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&h=800&fit=crop&q=80' },
        { id: 'watch3', name: 'Gold Mesh Strap', price: 85000, tag: 'Elegant', image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&h=800&fit=crop&q=80' },
        { id: 'watch4', name: 'Black Steel Sports', price: 120000, tag: 'Sport', image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&h=800&fit=crop&q=80' },
        { id: 'watch5', name: 'Blue Dive Watch', price: 150000, tag: 'Adventure', image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600&h=800&fit=crop&q=80' },
        { id: 'watch6', name: 'Leather Strap Classic', price: 70000, tag: 'Classic', image: 'https://images.unsplash.com/photo-1548171916-c0c5b0dbbd7e?w=600&h=800&fit=crop&q=80' },
        { id: 'watch7', name: 'Rose Gold Minimal', price: 90000, tag: 'Trending', image: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=600&h=800&fit=crop&q=80' },
        { id: 'watch8', name: 'Titanium Chrono', price: 180000, tag: 'Luxury', image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=600&h=800&fit=crop&q=80' },
        { id: 'watch9', name: 'Vintage Bronze Case', price: 110000, tag: 'Vintage', image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=600&h=800&fit=crop&q=80' }
    ]
};

// ===== STATE =====
let cart = [];
let currentTheme = 'dark';

// ===== DOM ELEMENTS =====
const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const themeToggle = document.getElementById('themeToggle');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartFooter = document.getElementById('cartFooter');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const chatToggle = document.getElementById('chatToggle');
const chatBox = document.getElementById('chatBox');
const chatMessages = document.getElementById('chatMessages');
const newsletterForm = document.getElementById('newsletterForm');

// ===== PRODUCT RENDERING =====
function renderProducts() {
    Object.entries(PRODUCTS).forEach(([category, items]) => {
        const grid = document.querySelector(`.product-grid[data-category="${category}"]`);
        if (!grid) return;
        
        grid.innerHTML = items.map(product => `
            <article class="product-card" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-category="${category}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy"
                         onerror="this.onerror=null;this.src='https://placehold.co/600x800/1a1a1a/ffffff?text=${encodeURIComponent(product.name)}'">
                    ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ''}
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">${formatPrice(product.price)}</p>
                    <div class="product-actions">
                        <button class="btn-add-to-cart" onclick="addToCart('${product.name.replace(/'/g, "\\'")}', ${product.price})">Add to Cart</button>
                        <button class="btn-whatsapp" onclick="orderOnWhatsApp('${product.name.replace(/'/g, "\\'")}', ${product.price})">Order on WhatsApp</button>
                    </div>
                </div>
            </article>
        `).join('');
    });
}

// ===== STORAGE =====
function saveCart() {
    localStorage.setItem(`${CONFIG.storagePrefix}-cart`, JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem(`${CONFIG.storagePrefix}-cart`);
    if (saved) {
        try { cart = JSON.parse(saved); } catch { cart = []; }
    }
}

// ===== THEME =====
function initTheme() {
    const saved = localStorage.getItem(`${CONFIG.storagePrefix}-theme`) || 'dark';
    setTheme(saved);
}

function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(`${CONFIG.storagePrefix}-theme`, theme);
    
    const sunIcon = document.querySelector('.icon-sun');
    const moonIcon = document.querySelector('.icon-moon');
    
    if (theme === 'dark') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}

themeToggle.addEventListener('click', () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// ===== MOBILE MENU =====
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// ===== CART =====
function addToCart(productName, price) {
    const existing = cart.find(item => item.name === productName);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: Date.now() + Math.random(),
            name: productName,
            price: price,
            quantity: 1
        });
    }
    saveCart();
    updateCartUI();
    showNotification(`${productName} added to cart!`);
    setTimeout(openCart, 300);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    if (cart.length === 0) showNotification('Cart is empty');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) { removeFromCart(productId); return; }
    saveCart();
    updateCartUI();
}

function clearCart() {
    if (cart.length === 0) return;
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        saveCart();
        updateCartUI();
        showNotification('Cart cleared');
    }
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function getCartItemCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function formatPrice(price) {
    return `${CONFIG.currency}${price.toLocaleString(CONFIG.locale)}`;
}

function updateCartUI() {
    const totalItems = getCartItemCount();
    cartCount.textContent = totalItems;
    
    if (totalItems > 0) {
        cartCount.style.display = 'flex';
        cartCount.style.animation = 'none';
        setTimeout(() => { cartCount.style.animation = 'pulse 0.3s ease-out'; }, 10);
    } else {
        cartCount.style.display = 'none';
    }
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty-state">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 16px; color: var(--muted-foreground);">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <p class="cart-empty">Your cart is empty</p>
                <p class="cart-empty-sub">Browse our collection and add items you love</p>
            </div>
        `;
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-info">
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-price">${formatPrice(item.price)} each</p>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-control">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)" aria-label="Decrease">−</button>
                        <span class="qty-display">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)" aria-label="Increase">+</button>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div class="cart-item-subtotal">Subtotal: ${formatPrice(item.price * item.quantity)}</div>
            </div>
        `).join('');
        
        cartTotal.textContent = formatPrice(getCartTotal());
        cartFooter.style.display = 'block';
    }
}

function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCart();
        chatBox.classList.remove('active');
    }
});

// ===== WHATSAPP ORDER =====
function isWhatsAppConfigured() {
    return CONFIG.whatsappNumber && CONFIG.whatsappNumber !== 'YOUR_WHATSAPP_NUMBER';
}

function orderOnWhatsApp(productName, price) {
    if (!isWhatsAppConfigured()) {
        showNotification('⚠️ Configure your WhatsApp number in luxwears.js', 'error');
        return;
    }
    const message = `Hello ${CONFIG.brandName}! 👋\n\nI want to order:\n\n*Product:* ${productName}\n*Price:* ${formatPrice(price)}\n*Quantity:* 1\n\nPlease confirm availability. Thank you!`;
    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function checkoutCart() {
    if (cart.length === 0) {
        showNotification('Your cart is empty');
        return;
    }
    if (!isWhatsAppConfigured()) {
        showNotification('⚠️ Configure your WhatsApp number in luxwears.js', 'error');
        return;
    }
    
    let message = `🛍️ *New Order - ${CONFIG.brandName}* 🛍️\n\n`;
    message += '━━━━━━━━━━━━━━━━━━\n\n';
    
    cart.forEach((item, i) => {
        const subtotal = item.price * item.quantity;
        message += `*${i + 1}. ${item.name}*\n`;
        message += `   • Quantity: ${item.quantity}\n`;
        message += `   • Unit Price: ${formatPrice(item.price)}\n`;
        message += `   • Subtotal: ${formatPrice(subtotal)}\n\n`;
    });
    
    message += '━━━━━━━━━━━━━━━━━━\n';
    message += `*Total Items:* ${getCartItemCount()}\n`;
    message += `*Total Amount:* ${formatPrice(getCartTotal())}\n\n`;
    message += 'Please confirm my order and provide payment details. Thank you! 🙏';
    
    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    
    cart = [];
    saveCart();
    updateCartUI();
    closeCart();
    showNotification('Order sent on WhatsApp! ✅');
}

// ===== CHAT WIDGET =====
chatToggle.addEventListener('click', () => {
    chatBox.classList.toggle('active');
    if (chatBox.classList.contains('active')) {
        setTimeout(() => { chatMessages.scrollTop = chatMessages.scrollHeight; }, 100);
    }
});

function sendQuickMessage(message) {
    chatMessages.innerHTML += `<div class="message user" style="background-color: var(--accent); color: #000; align-self: flex-end;">${message}</div>`;
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    setTimeout(() => {
        chatMessages.innerHTML += `<div class="message assistant typing"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>`;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 300);
    
    setTimeout(() => {
        const typing = document.querySelector('.message.typing');
        if (typing) typing.remove();
        
        let response = '';
        if (message.includes('delivery')) {
            response = '🚚 We deliver nationwide!\n\n• Lagos: 24-48 hours\n• Other states: 3-5 business days\n• Free delivery on orders above ₦50,000';
        } else if (message.includes('size')) {
            response = '📏 Size Guide:\n\n• Trousers: S-XXL\n• Shoes: EU 40-46\n• Bags: Standard/Large\n\nContact us for personalized sizing help!';
        } else if (message.includes('order')) {
            response = '🛍️ How to Order:\n\n1. Browse products\n2. Add to cart\n3. Adjust quantities\n4. Checkout via WhatsApp\n\nWe\'ll confirm your order immediately!';
        } else if (message.includes('return')) {
            response = '↩️ Return Policy:\n\n• 7-day returns\n• Unused items in original packaging\n• Contact us within 48 hours of delivery';
        } else {
            response = 'Thank you for your message! Our team will respond shortly.';
        }
        
        chatMessages.innerHTML += `<div class="message assistant">${response}</div>`;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1500);
}

// ===== NEWSLETTER =====
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = e.target.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    if (email) {
        showNotification('Thank you for subscribing! 🎉');
        emailInput.value = '';
        const subs = JSON.parse(localStorage.getItem(`${CONFIG.storagePrefix}-subscribers`) || '[]');
        subs.push({ email, date: new Date().toISOString() });
        localStorage.setItem(`${CONFIG.storagePrefix}-subscribers`, JSON.stringify(subs));
    }
});

// ===== NOTIFICATIONS =====
function showNotification(message, type = 'success') {
    document.querySelectorAll('.notification').forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    let icon = '';
    if (type === 'success') {
        icon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
    } else if (type === 'error') {
        icon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
    }
    
    notification.innerHTML = `<div class="notification-content">${icon}<span>${message}</span></div>`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translate(-50%, 0)';
    }, 10);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translate(-50%, 20px)';
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}

// Inject notification + dynamic cart styles
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    .notification {
        position: fixed; bottom: 24px; left: 50%;
        transform: translate(-50%, 20px);
        background-color: var(--accent); color: #000;
        padding: 12px 20px; border-radius: 12px;
        font-weight: 600; z-index: 2000;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        max-width: 90vw; opacity: 0;
        transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
    }
    .notification-content { display: flex; align-items: center; gap: 8px; font-size: 0.9rem; }
    .notification-error { background-color: #ef4444; color: #fff; }
    @keyframes pulse { 0%{transform:scale(1)} 50%{transform:scale(1.3)} 100%{transform:scale(1)} }
    .cart-empty-state { text-align: center; padding: 40px 20px; }
    .cart-empty { font-weight: 600; margin-bottom: 8px; color: var(--muted-foreground); }
    .cart-empty-sub { font-size: 0.85rem; color: var(--muted-foreground); opacity: 0.7; }
    .cart-item { display: flex; flex-direction: column; gap: 12px; padding: 16px;
        border: 1px solid var(--border); border-radius: 8px; margin-bottom: 12px;
        background-color: var(--card-bg); transition: all 0.3s ease; }
    .cart-item:hover { border-color: var(--accent); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    .cart-item-info { flex: 1; }
    .cart-item-name { font-weight: 600; font-size: 0.9rem; margin-bottom: 4px; color: var(--foreground); }
    .cart-item-price { color: var(--muted-foreground); font-size: 0.85rem; }
    .cart-item-controls { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
    .quantity-control { display: flex; align-items: center; gap: 8px; background-color: var(--muted); border-radius: 8px; padding: 4px; }
    .qty-btn { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;
        background-color: var(--background); border: 1px solid var(--border); border-radius: 6px;
        color: var(--foreground); font-size: 1.2rem; font-weight: 600;
        transition: all 0.2s ease; cursor: pointer; }
    .qty-btn:hover { background-color: var(--accent); color: #000; border-color: var(--accent); }
    .qty-btn:active { transform: scale(0.9); }
    .qty-display { min-width: 30px; text-align: center; font-weight: 600; font-size: 0.9rem; }
    .cart-item-remove { background: none; border: none; color: #ef4444; transition: all 0.2s ease;
        width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;
        border-radius: 6px; cursor: pointer; }
    .cart-item-remove:hover { background-color: rgba(239,68,68,0.1); transform: scale(1.1); }
    .cart-item-subtotal { font-weight: 700; color: var(--accent); font-size: 0.95rem;
        text-align: right; padding-top: 8px; border-top: 1px solid var(--border); }
    .typing-dot { display: inline-block; width: 6px; height: 6px; background-color: var(--muted-foreground);
        border-radius: 50%; margin: 0 2px; animation: typingAnimation 1s infinite; }
    .typing-dot:nth-child(2) { animation-delay: 0.2s; }
    .typing-dot:nth-child(3) { animation-delay: 0.4s; }
    @keyframes typingAnimation {
        0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
        30% { transform: translateY(-4px); opacity: 1; }
    }
`;
document.head.appendChild(dynamicStyles);

// ===== HEADER SCROLL =====
let lastScroll = 0;
let scrollTimeout;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (scrollTimeout) window.cancelAnimationFrame(scrollTimeout);
    scrollTimeout = window.requestAnimationFrame(() => {
        header.style.transform = (currentScroll > lastScroll && currentScroll > 150)
            ? 'translateY(-100%)' : 'translateY(0)';
        lastScroll = currentScroll;
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const headerOffset = 70;
            const offset = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    });
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initTheme();
    loadCart();
    updateCartUI();
    
    // Keyboard shortcut: Ctrl/Cmd + K
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            cartSidebar.classList.contains('active') ? closeCart() : openCart();
        }
    });
});

// ===== GLOBAL EXPORTS =====
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.clearCart = clearCart;
window.orderOnWhatsApp = orderOnWhatsApp;
window.checkoutCart = checkoutCart;
window.sendQuickMessage = sendQuickMessage;
window.openCart = openCart;
window.closeCart = closeCart;
window.CONFIG = CONFIG;
window.PRODUCTS = PRODUCTS;