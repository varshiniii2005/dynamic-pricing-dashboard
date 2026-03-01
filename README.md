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

## Design Decisions and Trade-offs

This project was built with clarity, scalability, and performance in mind. Below are the key design decisions and the trade-offs considered during development.

### 1. Component-Based Architecture

**Decision:**  
The application is divided into reusable components such as:
- `PricingCard`
- `BillingToggle`
- `CurrencySelector`

**Why:**  
This improves maintainability, readability, and scalability. Each component has a single responsibility.

**Trade-off:**  
More files and slightly more setup complexity compared to a single-file implementation, but significantly better long-term maintainability.

---

### 2. JSON-Based Pricing Data

**Decision:**  
Pricing information is stored in a separate `pricing.json` file.

**Why:**  
- Separates data from UI logic  
- Makes it easier to update pricing without modifying components  
- Simulates real-world API-based data handling  

**Trade-off:**  
Currently static data. In a production system, this would typically come from a backend API.

---

### 3. State Management Using React Hooks

**Decision:**  
Used React `useState` for managing:
- Billing cycle (monthly/yearly)
- Selected currency

**Why:**  
Hooks provide a clean and simple way to manage local component state without introducing additional libraries.

**Trade-off:**  
For larger applications, a global state management solution (Redux, Context API) may be more appropriate.

---

### 4. Vite for Development Environment

**Decision:**  
Used Vite instead of Create React App.

**Why:**  
- Faster development server startup  
- Improved build performance  
- Lightweight configuration  

**Trade-off:**  
Slightly less beginner familiarity compared to Create React App.

---

### 5. CSS for Styling

**Decision:**  
Used standard CSS instead of UI libraries or frameworks.

**Why:**  
- Full control over styling  
- Keeps dependencies minimal  
- Lightweight bundle size  

**Trade-off:**  
More manual styling effort compared to using frameworks like Tailwind or Material UI.

---

### 6. Client-Side Currency Handling

**Decision:**  
Currency conversion is handled on the client side.

**Why:**  
- Faster interaction  
- No need for API calls  
- Suitable for demonstration purposes  

**Trade-off:**  
Conversion rates are static and not real-time. In production, rates should be fetched from a reliable financial API.

---

## Summary

The overall goal was to create a clean, modular, and scalable pricing dashboard while keeping the architecture simple and easy to understand.

The trade-offs made favor:
- Simplicity over complexity  
- Readability over optimization  
- Demonstration value over production-level backend integration  

This approach makes the project ideal for learning, showcasing frontend skills, and portfolio presentation.

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

Varshini Yadav Nasaram
GitHub: https://github.com/varshiniii2005

---
## 🔗 Live Demo

Check out the live demo of the project here:  
👉 https://dynamicpricing-dashboard.vercel.app/

## License

This project is licensed under the MIT License.
