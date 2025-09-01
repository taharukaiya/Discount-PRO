# 🛍️ Discount PRO - Coupon Collecting Application

![Discount PRO Banner](https://i.imgur.com/placeholder.png)

## 🌐 Live Application

**🔗 [Visit Discount PRO](https://discount-pro-54b5b.web.app/)**

_Experience the live application deployed on Firebase Hosting_

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Installation & Setup](#-installation--setup)
- [Project Structure](#-project-structure)
- [Features in Detail](#-features-in-detail)
- [Security & Performance](#-security--performance)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

---

## 🎯 Project Overview

**Discount PRO** is a modern, full-featured coupon collecting application designed specifically for Bangladeshi e-commerce enthusiasts. Our platform aggregates verified discount coupons and promotional codes from popular online stores, enabling users to save money effortlessly while shopping.

### 🎪 Purpose

- **Centralized Coupon Hub** - One-stop destination for all discount codes
- **Money-Saving Platform** - Help users find the best deals and offers
- **User-Friendly Experience** - Intuitive interface for easy coupon discovery
- **Secure Shopping** - Verified coupons from trusted brands

---

## ✨ Key Features

### 🔐 **Advanced Authentication System**

- ✅ **Firebase Authentication** with email/password
- ✅ **Google Sign-In** integration for quick access
- ✅ **Password Reset** functionality via email
- ✅ **Private Route Protection** for authenticated users
- ✅ **Persistent Login Sessions** across browser sessions
- ✅ **Real-time Authentication State** management

### 🏪 **Comprehensive Brand Management**

- ✅ **6+ Featured E-commerce Brands** (Daraz, Pickaboo, AjkerDeal, etc.)
- ✅ **Interactive Brand Cards** with ratings and descriptions
- ✅ **Advanced Search & Filter** functionality
- ✅ **Category-Based Organization** for easy browsing
- ✅ **Sale Status Indicators** for active promotions
- ✅ **Brand Detail Pages** with complete coupon listings

### 🎫 **Smart Coupon System**

- ✅ **One-Click Copy Functionality** using react-copy-to-clipboard
- ✅ **Detailed Coupon Information** (expiry, conditions, terms)
- ✅ **Multiple Coupon Types** (Percentage, Fixed Amount, Free Shipping)
- ✅ **Success Toast Notifications** for user feedback
- ✅ **Direct Store Redirection** for immediate use
- ✅ **Coupon Usage Instructions** and terms display

### 🎨 **Modern User Experience**

- ✅ **Fully Responsive Design** (Mobile-first approach)
- ✅ **Smooth Animations** using AOS (Animate On Scroll)
- ✅ **Interactive UI Elements** with hover effects
- ✅ **Password Toggle Visibility** for better UX
- ✅ **Dynamic Page Titles** based on current route
- ✅ **Custom Favicon** for brand recognition
- ✅ **Toast Notifications** for all user actions

### 📱 **Complete Page Collection**

- ✅ **Home Page** - Hero slider, featured brands, promotions
- ✅ **Brands Page** - Complete brand listing with search
- ✅ **Brand Details** - Individual brand coupon collections
- ✅ **User Profile** - Account management and updates
- ✅ **Authentication Suite** - Login, Register, Forgot Password
- ✅ **Custom 404 Page** - Animated error page with navigation

---

## 🛠️ Technology Stack

### **Frontend Framework**

```javascript
React 18.3.1              // Modern React with Hooks
React Router DOM 7.7.1    // Client-side routing
```

### **Authentication & Backend**

```javascript
Firebase 11.1.0           // Authentication & Hosting
```

### **Styling & UI**

```css
Tailwind CSS 3.4.17       // Utility-first CSS framework
DaisyUI 4.12.14          // Pre-built component library
```

### **Animation & Effects**

```javascript
AOS 2.3.4                 // Animate On Scroll library
React Fast Marquee 1.7.0  // Smooth scrolling marquee
```

### **User Experience Packages**

```javascript
React Copy to Clipboard 5.1.0    // Clipboard functionality
React Toastify 11.0.2            // Toast notifications
```

### **Development Tools**

```javascript
Vite 6.0.5                // Fast build tool & dev server
ESLint 9.17.0            // Code linting & quality
```

---

## 🚀 Installation & Setup

### **Prerequisites**

- Node.js (v16 or higher)
- npm or yarn package manager
- Firebase account for authentication

### **Environment Configuration**

Create a `.env.local` file in the root directory:

```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id
VITE_measurementId=your_firebase_measurement_id
```

### **Installation Steps**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/taharukaiya/Discount-PRO.git
   cd Discount-PRO
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment**

   ```bash
   # Add your Firebase configuration to .env.local
   cp .env.example .env.local
   ```

4. **Start Development Server**

   ```bash
   npm run dev
   ```

5. **Build for Production**

   ```bash
   npm run build
   ```

6. **Deploy to Firebase**
   ```bash
   npm run deploy
   ```

---

## 🏗️ Project Structure

```
Discount-PRO/
├── 📁 public/
│   ├── brands.json           # Brand data & coupon information
│   ├── favicon.svg          # Custom favicon
│   └── index.html           # Entry HTML file
├── � src/
│   ├── 📁 components/
│   │   ├── 📁 auth/         # Authentication components
│   │   │   └── ForgotPassword.jsx
│   │   ├── 📁 brands/       # Brand-related components
│   │   │   ├── Brands.jsx
│   │   │   └── BrandDetails.jsx
│   │   ├── 📁 home/         # Homepage components
│   │   │   ├── Header.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── TopBrands.jsx
│   │   │   └── OnSale.jsx
│   │   ├── 📁 login/        # Login functionality
│   │   │   └── Login.jsx
│   │   ├── 📁 profile/      # User profile management
│   │   │   └── Profile.jsx
│   │   ├── 📁 register/     # Registration functionality
│   │   │   └── Register.jsx
│   │   ├── ErrorPage.jsx    # 404 error page
│   │   └── Footer.jsx       # Footer component
│   ├── � hooks/            # Custom React hooks
│   │   └── useDocumentTitle.js # Dynamic page titles
│   ├── 📁 layouts/          # Layout components
│   │   ├── HomeLayout.jsx   # Main application layout
│   │   └── AuthLayout.jsx   # Authentication pages layout
│   ├── 📁 provider/         # Context providers
│   │   └── AuthProvider.jsx # Authentication context
│   ├── 📁 routes/           # Routing configuration
│   │   ├── router.jsx       # Main router setup
│   │   └── PrivateRoute.jsx # Private route protection
│   ├── 📁 firebase/         # Firebase configuration
│   │   └── firebase.config.js
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── 📄 .env.local           # Environment variables
├── 📄 package.json         # Dependencies & scripts
├── 📄 tailwind.config.js   # Tailwind configuration
├── 📄 vite.config.js       # Vite configuration
└── 📄 README.md           # Project documentation
```

---

## 🔍 Features in Detail

### **Authentication Flow**

```javascript
// Firebase Authentication Implementation
- User Registration with email validation
- Secure login with password hashing
- Google OAuth integration
- Password reset via email verification
- Persistent authentication state
- Automatic session management
```

### **Coupon Management System**

```javascript
// Smart Coupon Features
- Copy to clipboard with single click
- Toast notifications for user feedback
- Expiry date validation and warnings
- Coupon type categorization
- Usage instructions and terms
- Direct store redirection
```

### **Responsive Design**

```css
/* Mobile-First Approach */
- Breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)
- Flexible grid systems
- Touch-friendly UI elements
- Optimized images and assets
- Progressive web app features
```

### **Animation Integration**

```javascript
// AOS Animation Examples
- Fade-in effects on scroll
- Slide animations for cards
- Zoom effects for buttons
- Stagger animations for lists
- Custom timing and easing
```

---

## 🔒 Security & Performance

### **Security Measures**

- ✅ **Environment Variables** for sensitive data protection
- ✅ **Firebase Security Rules** for data access control
- ✅ **Input Validation** on all user forms
- ✅ **XSS Protection** through proper data sanitization
- ✅ **HTTPS Enforcement** in production environment
- ✅ **Authentication State Validation** on every route

### **Performance Optimizations**

- ✅ **Code Splitting** with React Router lazy loading
- ✅ **Image Optimization** with proper sizing and formats
- ✅ **Bundle Size Optimization** using Vite's tree shaking
- ✅ **Efficient State Management** with Context API
- ✅ **Lazy Loading** for heavy components
- ✅ **Caching Strategies** for static assets

---

## 🚀 Deployment

### **Firebase Hosting**

```bash
# Deployed at: https://discount-pro-54b5b.web.app/

# Deployment Commands:
npm run build          # Build production version
firebase login         # Authenticate with Firebase
firebase init          # Initialize Firebase hosting
firebase deploy        # Deploy to production
```
