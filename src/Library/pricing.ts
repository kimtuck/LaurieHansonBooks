const price = 16.95;

const shippingTable = [
    {
        upTo: 4,
        shippingPer: 3.0,
        shippingFixed: 0.0
    },
    {
        upTo: 5,
        shippingPer: 0.0,
        shippingFixed: 10.0
    },
    {
        upTo: 10,
        shippingPer: 0.0,
        shippingFixed: 20.0
    },
    {
        upTo: 50,
        shippingPer: 2.0,
        shippingFixed: 0.0
    }
];

const shipping = (quantity: number) => {
    const entry = shippingTable.find(x => x.upTo <= quantity) || shippingTable[0];
    return quantity * entry.shippingPer + entry.shippingFixed;
};

const pricing = (quantity: number) => ({
    price: quantity * price,
    shipping: shipping(quantity)
});

const formatPrice = (value: number) => `${value.toFixed(2)}`;

export { price, shipping, pricing, formatPrice };