import "../App.css";

const PricingCard = ({ plan, billing, currency, rate }) => {

  // ✅ Ensure monthly price is always a number
  const monthlyPrice = Number(plan?.price?.monthly || 0);

  // ✅ Ensure rate is always a number (fallback = 1)
  const safeRate = Number(rate || 1);

  // ✅ Calculate base price safely
  let basePrice = monthlyPrice;

  if (billing === "yearly") {
    basePrice = monthlyPrice * 12 * 0.8; // 20% discount
  }

  // ✅ Final converted price (never NaN)
  const convertedPrice = (basePrice * safeRate).toFixed(2);

  return (
    <div className={`card ${plan.recommended ? "recommended" : ""}`}>

      {plan.recommended && <div className="badge">Recommended</div>}

      <h2>{plan.name}</h2>

      <h3>
        {currency} {convertedPrice}
        <span> /{billing}</span>
      </h3>

      <ul>
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <button>Select Plan</button>

    </div>
  );
};

export default PricingCard;