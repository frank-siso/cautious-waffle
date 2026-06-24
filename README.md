# ShopHub - E-Commerce Store

A modern online shop built with Next.js, TypeScript, React, and Tailwind CSS. Sell clothes, shoes, and accessories with a responsive design and smooth user experience.

## 🚀 Features

- **Product Catalog**: Browse clothes, shoes, and accessories with filtering
- **Search & Filter**: Find products by category, price range, and search query
- **Product Details**: Detailed product pages with ratings and reviews
- **Shopping Cart**: Add/remove products from cart
- **Checkout**: Complete checkout flow with shipping and payment info
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Beautiful, utility-first styling
- **API Routes**: RESTful API endpoints for products

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page with filters
│   ├── layout.tsx         # Root layout
│   ├── products/          # Products pages
│   ├── cart/              # Shopping cart page
│   ├── checkout/          # Checkout page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ProductCard.tsx
├── lib/                   # Utility functions
│   └── products.ts        # Mock product data & helpers
├── types/                 # TypeScript types
│   └── product.ts         # Product interfaces
└── public/                # Static assets
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
- `primary` - Primary color (default: #1f2937)
- `secondary` - Accent color (default: #f59e0b)
- `accent` - Red accent (default: #ef4444)

### Products
Add or modify products in `src/lib/products.ts`. Each product includes:
- Name, category, price, description
- Image URL, stock quantity
- Rating and review count

## 🛒 Products Included

### Categories
- **Clothes**: T-shirts, jeans, dresses, sweaters
- **Shoes**: Sneakers, formal shoes, loafers, hiking boots
- **Accessories**: Sunglasses, belts, watches, scarves

### Mock Data
12 sample products are included for demonstration. Replace with your actual product data.

## 📱 Pages

- **Home** (`/`) - Product listing with filters
- **Products** (`/products`) - All products grid
- **Product Detail** (`/products/[id]`) - Individual product page
- **Cart** (`/cart`) - Shopping cart
- **Checkout** (`/checkout`) - Checkout form
- **About** (`/about`) - About the store
- **Contact** (`/contact`) - Contact form

## 🔌 API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/[id]` - Get specific product

## 🚀 Deployment

This project is ready to deploy on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS**
- **Heroku**
- Any Node.js hosting platform

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 📝 Future Enhancements

- [ ] User authentication and accounts
- [ ] Real payment gateway integration (Stripe)
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Order management system
- [ ] Admin dashboard
- [ ] Wishlist functionality
- [ ] Product reviews and ratings system
- [ ] Email notifications
- [ ] Inventory management
- [ ] Analytics and reporting

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or support, please contact us at info@shophub.com or use the contact form on the website.

---

Built with ❤️ using Next.js, React, and Tailwind CSS
