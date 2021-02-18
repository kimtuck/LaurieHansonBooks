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

export default {
    price,
    shipping
};
