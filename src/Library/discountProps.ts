const originalPrice = 16.95;
const salePrice = 5.0;
const percentSavings = Math.floor((1 - 5.0 / 16.95) * 100);
const couponCode = 'STATEFAIR';

const discountProps = {
    couponCode,
    description: `State Fair Sale! Use coupon code ${couponCode} to save ${percentSavings}%`,
    salePrice,
    originalPrice,
    percentSavings
};

export default discountProps;
