import discountProps from '@/Library/discountProps';

const discount = {
    state: {
        discountCode: 'SPRING'
    },
    getters: {
        discount: () => discountProps,
        salePrice: () => discountProps.salePrice
    }
};

export default discount;
