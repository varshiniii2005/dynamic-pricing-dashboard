import "../App.css";

const PricingCard = ({ plan, billing, currency, rate }) => {
  const basePrice =
    billing === "monthly"
      ? plan.price.monthly
      : plan.price.yearly;

  const convertedPrice = basePrice * rate;

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