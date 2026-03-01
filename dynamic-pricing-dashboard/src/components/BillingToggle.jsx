function BillingToggle({ billing, setBilling }) {
  return (
    <div>
      <label>
        <input
          type="radio"
          checked={billing === "monthly"}
          onChange={() => setBilling("monthly")}
        />
        Monthly
      </label>

      <label>
        <input
          type="radio"
          checked={billing === "yearly"}
          onChange={() => setBilling("yearly")}
        />
        Yearly (Save 20%)
      </label>
    </div>
  );
}

export default BillingToggle;