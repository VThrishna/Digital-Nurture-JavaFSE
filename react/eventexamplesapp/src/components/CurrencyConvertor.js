import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const conversionRate = 80; // 1 Euro = 80 Rupees (approx, for demo)

  const handleSubmit = () => {
    const euros = (amount / conversionRate).toFixed(2);
    setCurrency('Euro');
    alert(`Converting to: Euro Amount is ${amount * conversionRate}`);
  };

  return (
    <div>
      <div>
        <label>Amount: </label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Currency: </label>
        <input type="text" value={currency} readOnly />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CurrencyConvertor;