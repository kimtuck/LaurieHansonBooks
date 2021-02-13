import { loadScript } from '@paypal/paypal-js';

// const sandboxAccount = 'sb-1nykf590489@business.example.com';

// const clientId = 'Ae3nrUHnL2vj1mBZcmMUSMZe4xf7CY7Wzft3VXpJJhEHPVR8kPrr3_M4mW4MZWI21xsO-B6W9jTnT9ZE';
// const sbClientId = 'sb';
// const secret = 'ENkAlAuCOgcI6X0rY5R9RWizwzaQTPl8Q2PXLz4-qIAKAJZZ3SI7HRjl72o1K07iCS5eTNUBrCRLweKF';

const installPayPal = function() {
    loadScript({ 'client-id': 'sb' }).then(paypal => {
        if (paypal && paypal.Buttons) {
            paypal.Buttons().render('#paypal-buttons');
        }
    });
};

export default installPayPal;
