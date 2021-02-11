// const sandboxAccount = 'sb-1nykf590489@business.example.com';

// const clientId = 'Ae3nrUHnL2vj1mBZcmMUSMZe4xf7CY7Wzft3VXpJJhEHPVR8kPrr3_M4mW4MZWI21xsO-B6W9jTnT9ZE';
const sbClientId = 'sb';
// const secret = 'ENkAlAuCOgcI6X0rY5R9RWizwzaQTPl8Q2PXLz4-qIAKAJZZ3SI7HRjl72o1K07iCS5eTNUBrCRLweKF';

const installPayPal = function() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = `https://www.paypal.com/sdk/js?client-id=${sbClientId}`;
    document.head.appendChild(s);
};

export default installPayPal;
