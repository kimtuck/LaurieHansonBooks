const originalPrice = 16.95;
const salePrice = 7.95;
const percentSavings = Math.floor((1 - 7.95 / 16.95) * 100);
const couponCode = 'SPRING';

const discountProps = {
    couponCode,
    description: `Spring Sale! Use coupon code ${couponCode} to save ${percentSavings}%`,
    salePrice,
    originalPrice,
    percentSavings
};

export default discountProps;
