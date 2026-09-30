# Changelog

All notable changes to the **Luxwears** template are documented here.

Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Versioning follows [Semantic Versioning](https://semver.org/).

---

## [1.0.0] — 2026-09-27

### 🎉 Initial Release

The first public release of the Luxwears premium men's boutique template.

#### Added
- **Full e-commerce UI** — Hero, product sections, footer, sticky header
- **4 product categories** — Bags, Shoes, Trousers, Watches (36 products total)
- **Dynamic product rendering** — All products rendered from `PRODUCTS` object in `luxwears.js`
- **Configuration system** — Single `CONFIG` object controls brand, WhatsApp, currency, locale
- **Advanced cart system**
  - Add/remove items
  - Quantity +/− controls
  - Real-time subtotal per item
  - Persistent across sessions via `localStorage`
  - Keyboard shortcut (Ctrl/Cmd + K to open)
- **WhatsApp integration**
  - Per-product "Order on WhatsApp" button
  - Full cart checkout with itemized message
  - Auto-formatted with quantity, unit price, subtotal, totals
- **Dark / Light theme toggle**
  - Persistent preference via `localStorage`
  - Smooth transitions
- **Customer care chat widget**
  - Quick-reply buttons (Delivery, Size Guide, How to Order, Returns)
  - Typing animation
  - Auto-scroll messages
- **Newsletter subscription**
  - Email capture
  - Stored in `localStorage` under `luxwears-subscribers`
- **Responsive design**
  - Mobile-first
  - Breakpoints: 480px, 768px, 1024px
  - Fluid typography with `clamp()`
- **Animations**
  - Hero glow pulse
  - Product card fade-in
  - Hover scaling on images
  - Floating hero image
- **Accessibility**
  - Semantic HTML
  - ARIA labels
  - Focus states
  - `prefers-reduced-motion` support
- **Documentation**
  - README.md (setup + customization)
  - LICENSE.txt (usage terms)
  - CHANGELOG.md (this file)

#### Technical
- Pure HTML5 / CSS3 / Vanilla JavaScript (ES6+)
- No frameworks, no build tools, no dependencies
- Google Fonts: Inter + Poppins
- Unsplash image URLs with `placehold.co` fallback
- Total size: < 100 KB (excluding images)

---

## [Unreleased] — Planned

### Planned for v1.1
- 🎯 Add "Shirts" and "Caps" categories pre-loaded
- 🎯 Product search / filter bar
- 🎯 Size selector on product cards
- 🎯 Wishlist feature (localStorage-based)
- 🎯 Discount code system
- 🎯 Instagram feed integration section
- 🎯 Testimonial / reviews section
- 🎯 Improved SEO meta tags + structured data (JSON-LD)

### Planned for v1.2
- 🎯 Multi-currency support
- 🎯 Paystack / Flutterwave checkout option (alongside WhatsApp)
- 🎯 Product detail page template
- 🎯 Admin-editable products via JSON file
- 🎯 Built-in analytics hook (GA4 + Meta Pixel)

---

## Version History

| Version | Date | Type | Notes |
|---------|------|------|-------|
| 1.0.0 | 2026 | Major | Initial release |

---

## How to Update

Updates are delivered via your original download link. To update:

1. **Back up your customized files** (especially `CONFIG` and `PRODUCTS`)
2. Download the new version
3. Compare `luxwears.js` and `luxwears.css` for changes
4. Merge carefully — do **not** overwrite your custom config

---

## Support

Bugs? Feature requests? Reply to your purchase receipt or email `williamsnolan12123@gmail.com`.