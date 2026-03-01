# Dynamic Pricing Dashboard

A modern and responsive **Dynamic Pricing Dashboard** built using **React** and **Vite**.  
This application demonstrates dynamic pricing functionality with billing toggles and currency selection powered by JSON data.

---

## Overview

The Dynamic Pricing Dashboard provides an interactive interface to display pricing plans. Users can switch between monthly and yearly billing and dynamically change currency values.

This project demonstrates:
- Component-based architecture
- State management in React
- Dynamic UI rendering
- Clean and responsive design

---

## Features

- Dynamic pricing loaded from JSON
- Monthly / Yearly billing toggle
- Currency selector
- Reusable pricing card components
- Responsive UI
- Fast development with Vite

---

## Tech Stack

- React.js
- Vite
- JavaScript (ES6+)
- CSS
- JSON

---

## Project Structure

```
dynamic-pricing-dashboard/
│
├── public/
│   └── data/pricing.json
│
├── src/
│   ├── components/
│   │   ├── BillingToggle.jsx
│   │   ├── CurrencySelector.jsx
│   │   └── PricingCard.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── style.css
│
├── index.html
├── package.json
└── vite.config.js
```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/varshiniii2005/dynamic-pricing-dashboard.git
```

### 2. Navigate to the Project Folder

```bash
cd dynamic-pricing-dashboard
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

## Production Build

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## How It Works

- Pricing plans are stored in `pricing.json`
- Billing toggle switches between monthly and yearly prices
- Currency selector updates prices dynamically
- Modular components improve scalability and maintainability

---

## Future Enhancements

- Dark mode support
- Payment gateway integration (Stripe / Razorpay)
- UI animations
- Deployment on Vercel or Netlify

---

## Author

Your Name  
GitHub: https://github.com/varshiniii2005

---

## License

This project is licensed under the MIT License.
