const discountProps = {
    couponCode: 'SPRING',
    salePrice: 7.95,
    originalPrice: 16.95,
    percentSavings: Math.floor((1 - 7.95 / 16.95) * 100)
};

export default discountProps;
