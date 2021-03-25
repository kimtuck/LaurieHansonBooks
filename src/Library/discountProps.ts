const discountProps = {
    couponCode: 'SPRING',
    salePrice: 7.95,
    percentSavings: (originalPrice: number) => Math.floor(1 - (discountProps.salePrice / originalPrice) * 100)
};

export default discountProps;
