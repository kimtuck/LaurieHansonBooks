import { loadScript } from '@paypal/paypal-js';
import OrderDetails from './OrderDetails';
import { formatPrice, newPricing } from './pricing';

const liveClientId = 'AZST4alfX8Pm2K1Iw55j7-QfRdCdSi-Yt4WuOLJ9orkmIhMC-obTIcVhtC82Bl9LnQJsJ0Jihtq6XDpR';
// const secret = 'ENbbjmSsyF5bAiW8sdlMjDJSNuNxYkka10gd34juHPrR_jbRnkOV1gqVoFWly9dl07BQk9tgSrJMVlNR';

let useSandbox = false;
// eslint-disable-next-line
if (window.location.search.includes('sandbox')) {
    // eslint-disable-next-line
    console.log('Use sandbox');
    useSandbox = true;
}

const clientId = useSandbox ? 'sb' : liveClientId;

const installPayPal = async function() {
    return await loadScript({ 'client-id': clientId, 'disable-funding': 'credit', 'enable-funding': 'venmo' });
};

const money = (value: number, key: string) => ({ currency_code: 'USD', [key]: formatPrice(value) });

const amount = (priceInfo: any) => ({
    ...money(priceInfo.price + priceInfo.shipping, 'value'),
    breakdown: {
        item_total: money(priceInfo.price, 'value'),
        shipping: money(priceInfo.shipping, 'value')
    }
});
const items = (selectedOption: any) => [
    {
        name: "Treasure's Gift book",
        unit_amount: money(selectedOption.price / selectedOption.quantity, 'value'),
        quantity: selectedOption.quantity
    }
];

const purchaseConfig = (orderId: any, selectedOption: any) => {
    const payload = {
        purchase_units: [
            {
                reference_id: orderId,
                description: 'description',
                custom_id: 'my-order-number',
                invoice_id: orderId,
                soft_descriptor: "Treasure's Gift",
                amount: amount({ price: selectedOption.price, shipping: selectedOption.shipping }),
                items: items(selectedOption)
            }
        ]
    };
    return payload;
};

const purchaseConfigNew = (orderId: any, orderDetails: OrderDetails, orderForm: Object) => {
    const actualBooks = orderDetails.bookDetails.slice(0, orderDetails.books);
    const itemsNew = actualBooks.map(orderDetailItem => ({
        name: orderDetailItem.bookId,
        unit_amount: money(newPricing.bookPrice[orderDetailItem.bookId].actualPrice, 'value'),
        quantity: 1
    }));
    const amounts = amount({
        price: newPricing.totalBookPrice(orderDetails),
        shipping: newPricing.totalShipping(orderDetails)
    });

    const invoiceMetadata = {
        reference_id: orderId,
        description: 'Book Purchase from LaurieHansonBooks.com',
        invoice_id: orderId,
        soft_descriptor: 'Book Purchase'
    };
    const payload = { purchase_units: [{ ...invoiceMetadata, amount: amounts, items: itemsNew, contact: orderForm }] };
    return payload;
};

export { installPayPal, purchaseConfig, purchaseConfigNew };

/*
[{
    "reference_id": "pu1_forward fashions",
    "description": "pu1_description",
    "amount": {
      "currency": "USD",
      "total": "71.50"
      "details": {
        "subtotal": "65.00",
        "shipping": "0.00",
        "tax": "6.50"
      },
    },
    "payee": {
      "email": "seller@example.com"
    },
    "items":[
    {
      "currency":"USD",
      "name":"Denim Woven Shirt",
      "price":"20.00",
      "tax":"2.00"
      "quantity":"1",
      "sku":"SKU1",
    },
    {
      "currency":"USD",
      "name":"Casual Boots",
      "price":"45.00",
      "tax":"4.50"
      "quantity":"1",
      "sku":"SKU2"
    }
    ],
    "shipping_address": {
      "recipient_name": "John Doe",
      "line1": "2211 N First Street",
      "line2": "Building 17",
      "city": "San Jose",
      "country_code": "US",
      "postal_code": "95131",
      "state": "CA",
      "phone": "(123) 456-7890"
    },
    "shipping_method": "United Postal Service",
    "invoice_number": "INV5511231",
    "payment_descriptor": "My Shop"
  }],
  "redirect_urls": {
    "return_url": "https://example.com/return",
    "cancel_url": "https://example.com/cancel"
  },
}'
BASHcopy
*/
