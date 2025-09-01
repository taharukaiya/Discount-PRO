# Discount PRO - Coupon Collecting Application

## Project Overview

**Discount PRO** is a comprehensive coupon collecting application designed to help users easily find and use discount coupons for popular e-commerce shops in Bangladesh. The application aggregates vouchers and coupon codes from various stores, enabling users to achieve significant discounts and save money on their purchases.

## 🌐 Live URL

[Visit Discount PRO](https://your-live-url-here.netlify.app) _(Replace with your actual live URL)_

## 🎯 Purpose

To create a centralized platform where users can:

- Browse and discover discount coupons from various Bangladeshi e-commerce stores
- Save money through verified coupon codes
- Access exclusive deals and offers in one convenient location
- Enjoy a seamless and secure authentication experience

## ✨ Key Features

### 🔐 Authentication System

- **Firebase Authentication** with email/password registration and login
- **Google Sign-In** for quick and secure access
- **Password Reset** functionality with email verification
- **Private Routes** protection for authenticated users only
- **Persistent Login** - users remain logged in across sessions

### 🏪 Brand Management

- **Comprehensive Brand Database** with 6+ e-commerce stores
- **Interactive Brand Cards** with logos, ratings, and descriptions
- **Advanced Search Functionality** to find specific brands
- **Category-based Filtering** for better organization
- **Sale Indicators** for brands currently offering special deals

### 🎫 Coupon System

- **One-Click Copy** functionality using react-copy-to-clipboard
- **Detailed Coupon Information** including expiry dates and conditions
- **Coupon Type Classification** (Percentage, Fixed Amount, Free Shipping)
- **Success Notifications** when coupons are copied
- **Direct Store Links** to use coupons immediately

### 🎨 User Experience

- **Fully Responsive Design** optimized for mobile, tablet, and desktop
- **Modern Animations** using AOS (Animate On Scroll) package
- **Interactive UI Elements** with hover effects and transitions
- **Password Toggle** functionality for better usability
- **Toast Notifications** for user feedback

### 📱 Pages & Components

- **Home Page** with slider, top brands marquee, and promotional sections
- **Brands Page** with search and filtering capabilities
- **Brand Details** with complete coupon listings
- **User Profile** with update functionality
- **Authentication Pages** (Login, Register, Forgot Password)
- **404 Error Page** for invalid routes

## 🛠️ NPM Packages Used

### Core Dependencies

- **React** (18.3.1) - Frontend framework
- **React Router DOM** (7.7.1) - Client-side routing
- **Firebase** (11.1.0) - Authentication and backend services

### UI & Styling

- **Tailwind CSS** (3.4.17) - Utility-first CSS framework
- **DaisyUI** (4.12.14) - Component library for Tailwind CSS
- **React Fast Marquee** (1.7.0) - Smooth scrolling marquee component

### Animation & Effects

- **AOS** (2.3.4) - Animate On Scroll library for scroll-triggered animations

### User Experience

- **React Copy to Clipboard** (5.1.0) - One-click coupon code copying
- **React Toastify** (11.0.2) - Toast notifications for user feedback

### Development Tools

- **Vite** (6.0.5) - Fast build tool and development server
- **ESLint** (9.17.0) - Code linting and quality assurance

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Firebase account for authentication setup

### Environment Variables

Create a `.env.local` file in the root directory and add your Firebase configuration:

```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id
VITE_measurementId=your_firebase_measurement_id
```

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/discount-pro.git
   cd discount-pro
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   - Create `.env.local` file with Firebase configuration
   - Ensure all VITE\_ prefixed variables are properly set

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── auth/              # Authentication components
│   ├── brands/            # Brand-related components
│   ├── home/              # Homepage components
│   ├── login/             # Login functionality
│   ├── profile/           # User profile management
│   └── register/          # Registration functionality
├── layouts/               # Layout components
├── provider/              # Context providers (Auth)
├── routes/                # Routing configuration
├── assets/                # Static assets (images, etc.)
└── firebase/              # Firebase configuration
```

## 🔧 Technical Implementation

### Authentication Flow

- **Firebase Authentication** handles user registration and login
- **Context API** manages authentication state across the application
- **Private Routes** protect sensitive pages from unauthorized access
- **Persistent Sessions** maintain user login status

### Data Management

- **JSON Data** stored in public/brands.json for brand information
- **React Router Loaders** for efficient data fetching
- **Local State Management** using React hooks

### Responsive Design

- **Mobile-First Approach** with Tailwind CSS
- **Flexible Grid Systems** that adapt to different screen sizes
- **Touch-Friendly UI** optimized for mobile interactions

## 🎨 Design Features

### Visual Elements

- **Gradient Backgrounds** for modern aesthetics
- **Card-based Layouts** for better content organization
- **Interactive Hover Effects** for enhanced user engagement
- **Consistent Color Scheme** throughout the application

### Animation Integration

- **AOS Animations** for scroll-triggered effects
- **Smooth Transitions** for better user experience
- **Loading States** with animated spinners
- **Micro-interactions** for button clicks and form interactions

## 🔒 Security Features

- **Environment Variables** for sensitive Firebase configuration
- **Input Validation** on all forms
- **XSS Protection** through proper data handling
- **Secure Authentication** via Firebase security rules

## 🚀 Deployment

The application is optimized for deployment on:

- **Netlify** (recommended)
- **Vercel**
- **Firebase Hosting**
- **Surge.sh**

### Deployment Checklist

- [ ] Environment variables configured on hosting platform
- [ ] Firebase authentication domain updated with live URL
- [ ] Build optimization completed
- [ ] 404 redirect rules configured for SPA routing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👨‍💻 Developer

**Your Name**

- Portfolio: [your-portfolio-url](https://your-portfolio.com)
- LinkedIn: [your-linkedin](https://linkedin.com/in/yourprofile)
- GitHub: [your-github](https://github.com/yourusername)

## 🙏 Acknowledgments

- Firebase team for excellent authentication services
- Tailwind CSS community for the amazing framework
- React community for continuous innovation
- All the e-commerce brands featured in the application

---

_Built with ❤️ for the people of Bangladesh to save money on their favorite purchases._
