# E-Commerce Store

A modern, responsive e-commerce storefront built with Next.js App Router, Tailwind CSS, and Zustand. 

## Features

- **Responsive Layout:** Carefully crafted layout that seamlessly adapts from mobile to tablet and wide desktop screens.
- **Dynamic Filtering & Search:** Real-time URL-synced filtering by category and price range (e.g. `?category=electronics&price=0-1000`), beautifully combined with a global search context.
- **Product Details:** Dedicated dynamic routing for product pages (`/product/[id]`) showing expanded details and quantity selectors.
- **Shopping Cart System:** Fully functional cart powered by Zustand.
  - Add to cart directly from the grid or detail page.
  - Adjust quantities and remove items in the Cart view.
  - State persists across page reloads via `localStorage`.
- **Clean UI Components:** Modular UI pieces including standard `Header`, `Footer`, and `ProductCard`.

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment Steps (Vercel)

Deploying this Next.js project on Vercel is the easiest and recommended approach:

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your Git repository.
4. Vercel will automatically detect that it is a Next.js App Router project and configure the correct build settings automatically.
5. Click **Deploy**. Your site will be live within a few minutes and will automatically rebuild on any future branch pushes.
