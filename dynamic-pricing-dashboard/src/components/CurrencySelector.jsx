function CurrencySelector({ currency, setCurrency }) {
  return (
    <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
      <option value="USD">USD</option>
      <option value="INR">INR</option>
    </select>
  );
}

export default CurrencySelector;