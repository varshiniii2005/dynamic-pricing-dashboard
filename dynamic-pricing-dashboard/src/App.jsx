import { useEffect, useState } from "react";
import PricingCard from "./components/PricingCard";
import BillingToggle from "./components/BillingToggle";
import CurrencySelector from "./components/CurrencySelector";
import "./App.css";

function App() {
  const [plans, setPlans] = useState([]);
  const [billing, setBilling] = useState("monthly");
  const [currency, setCurrency] = useState("USD");

  const exchangeRates = {
    USD: 1,
    INR: 83,
  };

  useEffect(() => {
    fetch("/data/pricing.json")
      .then((res) => res.json())
      .then((data) => setPlans(data.plans))
      .catch((err) => console.error("Error loading pricing:", err));
  }, []);

  return (
    <div className="container">
      <h1>Pricing Plans</h1>

      <div className="controls">
        <BillingToggle billing={billing} setBilling={setBilling} />
        <CurrencySelector currency={currency} setCurrency={setCurrency} />
      </div>

      <div className="pricing-grid">
        {plans.length > 0 &&
          plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billing={billing}
              currency={currency}
              rate={exchangeRates[currency]}
            />
          ))}
      </div>

      {/* Trusted Section */}
      <div className="trusted">
        <h3>Trusted by 10,000+ growing teams worldwide</h3>
        <div className="logos">
          <span>🚀 TechNova</span>
          <span>🌍 CloudSphere</span>
          <span>⚡ NextGen Labs</span>
          <span>💼 ScaleWorks</span>
        </div>
      </div>

      {/* Feature Comparison Section */}
      <div className="comparison">
        <h2>Compare Plans</h2>
        <table>
          <thead>
            <tr>
              <th>Features</th>
              <th>Basic</th>
              <th>Standard</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Storage</td>
              <td>1GB</td>
              <td>10GB</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>Support</td>
              <td>Email</td>
              <td>Priority</td>
              <td>24/7</td>
            </tr>
            <tr>
              <td>Analytics</td>
              <td>Basic</td>
              <td>Advanced</td>
              <td>AI Powered</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CTA Section */}
      <div className="cta">
        <h2>Ready to Elevate Your Experience?</h2>
        <p>Choose a plan and start scaling today.</p>
        <button>Start Free Trial</button>
      </div>
    </div>
  );
}

export default App;