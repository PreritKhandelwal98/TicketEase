// components/PaymentGateway.js

import React from 'react';

function PaymentGateway() {
  const handlePayment = () => {
    // Handle payment processing (e.g., integrate with payment gateway)
    alert('Processing payment...');
  };

  return (
    <div>
      <h2>Payment Gateway</h2>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default PaymentGateway;
