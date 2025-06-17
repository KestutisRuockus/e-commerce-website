# 💳 E-commerece-website

## 🚀 Project Purpose

Build a fully functional ecommerce platform using modern web technologies such as Next.js 15, Tailwind CSS v4, Stripe for payments, and Zustand for state management. This project focuses on building a sleek, responsive frontend with a secure payment flow

## 🧩 Features

- **Dynamic Product Carousel**: A landing page featuring an auto‑cycling carousel that showcases your top products.

- **Responsive Product Pages**: Detailed pages with interactive plus/minus buttons to adjust item quantities in the cart.

- **Real‑Time Cart State**: A live-updating cart icon in the navbar using Zustand.

- **Seamless Stripe Checkout**: A secure checkout process powered by Stripe's API.

- **Modern UI**: A sleek, professional design built with Tailwind CSS v4 and shadcn‑inspired UI components.

## ⚙️ Tech Stack

- **Next.js 15** — For server components and modern routing
- **TypeScript** — For type safety and modern JavaScript features
- **Tailwind CSS v4** — For rapid, responsive styling using a CSS‑first configuration
- **Zustand** — For lightweight client‑side state management
- **Stripe** — For product management and payment processing

## 📁 Data & Context

All product data (name, price, image, etc.) is managed in Stripe and fetched dynamically using the [Stripe API](https://dashboard.stripe.com/test/dashboard).

This project also uses Stripe for handling payments.

To enable it, you need to set the following environment variables in a .env file:

STRIPE_SECRET_KEY=your_stripe_secret_key

NEXT_PUBLIC_BASE_URL=http://localhost:3000
S
State management is handled via Zustand to track shopping cart list.

## 🌐 Live Demo

Check out the live version of the project here: [E-commerce-website](https://e-commerce-website-brown-alpha.vercel.app/)
