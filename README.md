# 🛍️ Luxwears — Premium Men's Boutique Template

A production-ready, minimalist e-commerce template for men's fashion boutiques. Built with **pure HTML, CSS, and JavaScript** — no frameworks, no build step, no dependencies.

**[Live Demo →](#)** *(https://gstoreboutique.vercel.app)*

![Luxwears Preview](screenshots/screenshot 1.jpg)

---

## ✨ Features

- 🎨 **Premium Dark UI** — Sleek, minimalist design with green accent
- 🌗 **Dark / Light Mode Toggle** — Persistent via localStorage
- 🛒 **Advanced Cart** — Add, remove, adjust quantities, persistent across sessions
- 💬 **WhatsApp Integration** — Product ordering + full cart checkout
- 👔 **36 Pre-loaded Products** — Across 4 categories (Bags, Shoes, Trousers, Watches)
- 📱 **Fully Responsive** — Mobile-first, works on all screen sizes
- 💌 **Newsletter Signup** — Email capture with localStorage
- 🗨️ **Customer Care Chat Widget** — Interactive quick-reply support
- ⚡ **Zero Dependencies** — No npm, no build tools, no CDN required (except Google Fonts)
- 🔍 **SEO Friendly** — Semantic HTML, meta tags, accessible markup
- ♿ **Accessible** — ARIA labels, keyboard navigation, focus states

---

## 📁 File Structure

```
luxwears/
├── index.html              # Main page structure
├── luxwears.css            # All styling
├── luxwears.js             # Config, products, and all functionality
├── hero.png                # Hero section image (replace with your own)
└── documentation/
    ├── README.md           # This file
    ├── LICENSE.txt         # License terms
    └── CHANGELOG.md        # Version history
```

---

## ⚙️ Requirements

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime, Notepad++)
- A WhatsApp Business number (for orders)
- Optional: any static hosting (Vercel, Netlify, GitHub Pages, cPanel)

**No Node.js, no npm, no build tools required.**

---

## 🚀 Quick Start (5 Minutes)

### Step 1 — Unzip the folder
Extract `luxwears-template-v1.0.zip` to a folder on your computer.

### Step 2 — Open `luxwears.js`
Scroll to the top. You'll see the `CONFIG` block:

```javascript
const CONFIG = {
    brandName: 'Luxwears',
    whatsappNumber: 'YOUR_WHATSAPP_NUMBER',
    currency: '₦',
    locale: 'en-NG',
    storagePrefix: 'luxwears',
};
```

### Step 3 — Set your WhatsApp number
Replace `YOUR_WHATSAPP_NUMBER` with your number in **international format, without the `+`**.

**Example:** if your number is `+234 801 234 5678`, enter:
```javascript
whatsappNumber: '2348012345678',
```

> ⚠️ **Do not include spaces, dashes, or the `+` symbol.**

### Step 4 — Rebrand (optional)
Change `brandName` to your store name. The logo, footer, chat greeting, and WhatsApp messages will all update automatically.

### Step 5 — Open `index.html` in your browser
That's it. Your store is live.

---

## 🎨 Customization Guide

### 1. Changing the Brand Name

Edit `CONFIG.brandName` in `luxwears.js`:

```javascript
brandName: 'YourStoreName',
```

Then update the logo text in `index.html` (2 places — header and footer):

```html
<a href="#" class="logo">Lux<span>wears</span></a>
```

The `<span>` gets the accent color. So `Lux<span>wears</span>` renders as **Lux** in white + **wears** in green.

---

### 2. Adding, Editing, or Removing Products

All products live in the `PRODUCTS` object in `luxwears.js`. Each product has this shape:

```javascript
{
    id: 'bag1',                          // Unique ID (never reuse)
    name: 'Leather Tote Bag',            // Product name
    price: 45000,                        // Number only, no commas/currency
    tag: 'Bestseller',                   // Badge text (optional, set to '' for none)
    image: 'https://...'                 // Full image URL
}
```

#### ➕ To add a product:
Add a new object to the relevant category array:

```javascript
bags: [
    // ... existing products
    {
        id: 'bag10',
        name: 'Weekend Duffle',
        price: 52000,
        tag: 'New',
        image: 'https://your-image-url.jpg'
    }
]
```

#### ✏️ To edit a product:
Change the value directly. The grid re-renders automatically.

#### ➖ To remove a product:
Delete the entire object (from `{` to `}` including the trailing comma).

---

### 3. Adding a New Category

Let's say you want to add a **"Shirts"** category.

**Step 1** — Add the products in `luxwears.js`:

```javascript
const PRODUCTS = {
    // ... existing categories
    shirts: [
        { id: 'shirt1', name: 'Oxford Shirt', price: 28000, tag: 'Bestseller', image: '...' },
        { id: 'shirt2', name: 'Linen Shirt', price: 32000, tag: 'Summer', image: '...' }
    ]
};
```

**Step 2** — Add the section in `index.html` (copy an existing section and change IDs):

```html
<section class="product-section container" id="shirts">
    <div class="section-header">
        <h2 class="section-title">Premium <span>Shirts</span></h2>
        <p class="section-subtitle">Sophisticated tops for every occasion</p>
    </div>
    <div class="product-grid" data-category="shirts"></div>
</section>
```

**Step 3** — Add the nav link in `index.html`:

```html
<li><a href="#shirts" class="nav-link">Shirts</a></li>
```

The grid auto-populates. ✅

---

### 4. Changing the Accent Color

Open `luxwears.css` and edit the CSS variables at the top:

```css
:root {
    --accent: #22C55E;   /* Change to your brand color */
}
```

The color flows through buttons, prices, tags, glows, and the hero badge automatically.

**Recommended combos:**
- Luxury blue: `#3B82F6`
- Royal purple: `#8B5CF6`
- Champagne gold: `#D4AF37`
- Crimson red: `#DC2626`

Also update the light theme accent if you want a different shade:

```css
[data-theme="light"] {
    --accent: #16A34A;
}
```

---

### 5. Changing Fonts

Fonts are loaded from Google Fonts in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Then referenced in `luxwears.css`:

```css
--font-primary: 'Inter', sans-serif;
--font-heading: 'Poppins', sans-serif;
```

Swap for any Google Font — e.g., `'DM Sans'`, `'Sora'`, `'Playfair Display'`.

---

### 6. Replacing the Hero Image

Drop your own `hero.png` into the root folder, **or** edit the `<img>` tag in `index.html`:

```html
<img src="your-image.jpg" alt="..." class="hero-img" onerror="...">
```

**Recommended size:** 600 × 800 px, transparent PNG works best.

---

### 7. Product Images

The template uses **Unsplash URLs** by default. You can:

**Option A** — Keep using Unsplash (free, no hosting needed)

**Option B** — Host your own images:
1. Create an `assets/` folder
2. Drop your images in
3. Update the `image` field: `image: 'assets/your-image.jpg'`

**Option C** — Use any CDN (Cloudinary, ImgBB, etc.)

> 💡 **Tip:** If an image fails to load, the template auto-falls back to a placeholder showing the product name.

---

## 💬 WhatsApp Setup

### Test the integration:
1. Open the site
2. Click **"Order on WhatsApp"** on any product
3. WhatsApp should open with a pre-filled message

### If it doesn't work:
- Check that `CONFIG.whatsappNumber` is set (not still `'YOUR_WHATSAPP_NUMBER'`)
- Make sure it's in international format with no `+` or spaces
- Test on mobile — desktop WhatsApp requires the app to be installed
- Clear browser cache and refresh

### Customizing WhatsApp messages:
Both `orderOnWhatsApp()` and `checkoutCart()` in `luxwears.js` build the message text. Edit freely.

---

## 🌐 Deployment

### Option 1 — Vercel (Recommended, Free)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Push your folder to a GitHub repo, or drag-and-drop the folder into Vercel
4. Done — you get a live URL instantly

### Option 2 — Netlify (Free)

1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag your `luxwears/` folder into the drop zone
3. Live URL in ~10 seconds

### Option 3 — GitHub Pages (Free)

1. Create a GitHub repo
2. Upload your files
3. Settings → Pages → Deploy from `main` branch
4. Site is live at `yourusername.github.io/repo-name`

### Option 4 — cPanel / Shared Hosting

1. Log into cPanel → File Manager
2. Navigate to `public_html/`
3. Upload all files
4. Visit your domain

### Custom Domain

All of the above support custom domains (e.g., `luxwears.com`). Follow each platform's DNS setup guide.

---

## ❓ FAQ

**Q: Do I need a backend?**
A: No. Everything runs client-side. Orders go straight to WhatsApp.

**Q: Can I add payment processing?**
A: Yes — integrate Paystack, Flutterwave, or Stripe in `checkoutCart()`. You'll need a backend or their JS SDK.

**Q: Is the cart persistent?**
A: Yes. Cart and theme preferences are stored in `localStorage`.

**Q: Can I use this on multiple websites?**
A: Depends on your license. See `LICENSE.txt`.

**Q: How do I remove the "Need Help?" chat widget?**
A: Delete the `<div class="chat-widget">...</div>` block in `index.html`, and remove the chat-related code in `luxwears.js`.

**Q: Can I remove the newsletter section?**
A: Yes — delete the `.footer-newsletter` div in `index.html`.

**Q: Can I change the currency?**
A: Yes — edit `CONFIG.currency` and `CONFIG.locale` in `luxwears.js`.

**Q: How do I add more than one WhatsApp number?**
A: Duplicate the `orderOnWhatsApp()` function or add a `waNumber` field per product and reference it.

---

## 🛠️ Troubleshooting

### Cart isn't saving
- Check that you're not in private/incognito mode (localStorage is disabled)
- Open DevTools → Application → Local Storage → look for `luxwears-cart`

### Products aren't rendering
- Open browser console (F12) → check for JS errors
- Verify `luxwears.js` is loaded (not 404)
- Ensure the category key in `PRODUCTS` matches the `data-category` in `index.html`

### Images broken
- The template falls back to a placeholder automatically
- Verify image URLs are publicly accessible (test in a new tab)

### WhatsApp link not opening
- Test on mobile
- Check `CONFIG.whatsappNumber` format
- Try in a fresh incognito window

---

## 📞 Support

**Included:** 30 days of email support for setup and bug fixes.

**Not included:** Custom development, new features, or design changes.

For support, reply to your purchase receipt with:
1. A description of the issue
2. Steps to reproduce
3. Your browser + OS
4. Screenshots (if applicable)

---

## 🔄 Updates

Free updates for 6 months from purchase. Updates are delivered via your original download link. See `CHANGELOG.md` for version history.

---

## 📜 License

See `LICENSE.txt` for full terms. Summary:

| License | Use Case |
|---------|----------|
| Personal | 1 project, personal use |
| Commercial | 1 client project, remove branding |
| Extended | Unlimited projects |
| Exclusive | You + you alone own the template |

---

## 🙏 Credits

- **Fonts:** [Inter](https://fonts.google.com/specimen/Inter) & [Poppins](https://fonts.google.com/specimen/Poppins) via Google Fonts
- **Default Images:** [Unsplash](https://unsplash.com) — free to use
- **Placeholder Fallback:** [placehold.co](https://placehold.co)

---

**Thank you for purchasing Luxwears. Build something great.** 🚀