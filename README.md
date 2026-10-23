# Jay Balaji Trading (JBT) — React Web Application

A modern, responsive, high-performance business website for **Jay Balaji Trading (JBT)**, a dedicated supplier of PVC garden pipes, heavy-duty suction hoses, petrol pipes, braided reinforced pipes, and metallic spiral pipes based in Morbi, Gujarat, India.

---

## 🌟 Brand Identity & Color Palette

Derived directly from the official visiting card reference:
- **Primary Teal:** `#147582` / `#196F7D`
- **Dark Deep Teal:** `#105864` / `#0A343B`
- **Brand Orange:** `#EE7E21` / `#F58220`
- **Dark Neutral Text:** `#252B2D`
- **Light Grey Background:** `#F3F5F5`
- **Tagline:** *"Quality Pipes. Reliable Supply."*

---

## 🚀 Key Features

1. **Brand-Faithful Design:**
   - Accurate JBT vector emblem with signature water-droplet cutout in the 'J' letterform.
   - Deep teal hero header, structured 4-column footer, and orange call-to-action highlights.

2. **Full Product Catalogue (20 Products):**
   - **Petrol Pipe:** 3 sizes (3/4", 1", 1 1/4")
   - **Braided Pipe:** 3 sizes (3/4", 1", 1 1/4")
   - **Suction Pipe:** 13 sizes (3/4", 1", 1 1/4", 1 1/2", 2", 2 1/2", 3", 3 1/2", 4", 4 1/2", 5", 5 1/2", 6")
   - **Metallic Pipe:** 3/4" with metal spiral wire reinforcement
   - Preserves verified approximate weight values and 30m / 50m coil lengths from `Product_Details.xlsx`.

3. **Multi-Facet Search & Filtering:**
   - Real-time text search across product names, sizes, materials, and descriptions.
   - Dynamic category pills and responsive dropdown size filter.
   - Reactive result counters and empty-state reset.

4. **Interactive Featured Product Carousel:**
   - Smooth desktop/tablet/mobile horizontal scrolling with touch swipe support.
   - Accessible left/right arrow controls and active slide indicators.
   - Gentle autoplay with pause-on-hover and `prefers-reduced-motion` compliance.

5. **Direct Wholesale Enquiry Flow:**
   - Validated customer inquiry form with pre-filled product & size parameters.
   - Instant 1-click **WhatsApp** inquiry transmission with formatted specifications.
   - **Email** fallback link and embedded Morbi Google Maps direction integration.
   - Decoupled `EnquiryService` for easy backend API / CRM connection.

6. **Responsive & Accessible:**
   - Fully tested across viewports (360px mobile, 768px tablet, 1024px laptop, 1440px desktop).
   - Semantic HTML5, accessible ARIA dialogs, and smooth keyboard navigation.

---

## 🛠 Tech Stack

- **React 19**
- **TypeScript 5.7**
- **Vite 6**
- **Tailwind CSS 3.4**
- **React Router 7**
- **Framer Motion 12**
- **Lucide React** (feather-weight icons)
- **ESLint 9**

---

## 📂 Project Structure

```
jay-balaji-trading/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── branding/
│       │   ├── jbt-logo.svg
│       │   ├── jbt-logo-transparent.png
│       │   └── card-brand-crop.png
│       ├── hero/
│       │   └── pipe-hero.png
│       └── products/
│           ├── petrol-pipe/
│           ├── braided-pipe/
│           ├── suction-pipe/
│           └── metallic-pipe/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── BrandLogo.tsx
│   │   │   ├── Breadcrumbs.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── LoadingState.tsx
│   │   │   └── SectionHeading.tsx
│   │   ├── forms/
│   │   │   └── ContactForm.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── MainLayout.tsx
│   │   │   └── MobileMenu.tsx
│   │   └── products/
│   │       ├── CategoryCard.tsx
│   │       ├── ProductCard.tsx
│   │       ├── ProductCarousel.tsx
│   │       ├── ProductFilters.tsx
│   │       └── ProductGrid.tsx
│   ├── data/
│   │   ├── categories.ts
│   │   ├── company.ts
│   │   └── products.ts
│   ├── hooks/
│   │   └── useProductFilters.ts
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   └── ProductsPage.tsx
│   ├── services/
│   │   └── enquiryService.ts
│   ├── styles/
│   │   └── index.css
│   ├── types/
│   │   ├── company.ts
│   │   └── product.ts
│   ├── utils/
│   │   ├── formatters.ts
│   │   └── productHelpers.ts
│   ├── App.tsx
│   └── main.tsx
├── Product_Details.xlsx
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js `v18.x` or higher (tested on `v26.10.0`)
- npm `v9.x` or higher

### Installation & Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Run code quality & linting check:**
   ```bash
   npm run lint
   ```

4. **Compile TypeScript & generate production build:**
   ```bash
   npm run build
   ```

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 📞 Company Contact Details

- **Company Name:** Jay Balaji Trading (JBT)
- **Category:** Garden Pipe and Suction Pipe Supplier
- **Contact Representative:** Meet Kundariya (`+91 99749 28731`)
- **Email:** `jaybalajitrading999@gmail.com`
- **Address:** 5/6, Lati Plot, Morbi - 363641, Gujarat, India
