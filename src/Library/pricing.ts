import BookId from '@/types/BookId';
import OrderDetailItem from '@/types/OrderDetailItem';
import OrderDetails from './OrderDetails';

const newPricing = {
    baseShipping: 3.0,
    shippingPerBook: 1.0,
    bookPrice: {
        [BookId.GoodGirlKarma]: {
            listPrice: 13.95,
            actualPrice: 9,
            priceNote: 'Good Girl, Karma: $9.00 -- Normally $13.95'
        },
        [BookId.TreasuresGift]: {
            listPrice: 16.95,
            actualPrice: 5.0,
            priceNote: "Treasure's Gift: $5.00 -- Normally $16.95"
        }
    },
    shipping: (books: number) => 4.0 + (books - 1) * 1.0,
    actualBooks: (orderDetails: OrderDetails): OrderDetailItem[] => orderDetails.bookDetails.slice(0, orderDetails.books),
    totalBookPrice: (orderDetails: OrderDetails): number =>
        newPricing
            .actualBooks(orderDetails)
            .reduce((accum, entry) => accum + newPricing.bookPrice[entry.bookId].actualPrice, 0),
    totalShipping: (orderDetails: OrderDetails): number =>
        newPricing.baseShipping + orderDetails.books * newPricing.shippingPerBook,
    total: (orderDetails: OrderDetails): number =>
        newPricing.totalBookPrice(orderDetails) + newPricing.totalShipping(orderDetails)
};

const price = 16.95;

const shippingTable = [
    {
        upTo: 3,
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
    const entry = shippingTable.find(x => quantity <= x.upTo) || shippingTable[0];
    return quantity * entry.shippingPer + entry.shippingFixed;
};

const pricing = (quantity: number, discount: any) => ({
    price: quantity * discount.salePrice,
    shipping: shipping(quantity)
});

const formatPrice = (value: number) => `${value.toFixed(2)}`;

export { newPricing, price, shipping, pricing, formatPrice };
