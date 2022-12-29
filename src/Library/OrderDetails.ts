import BookId from '@/types/BookId';
import OrderDetailItem from '@/types/OrderDetailItem';

export default class OrderDetails {
    books: number;

    // eslint-disable-next-line no-undef
    bookDetails: OrderDetailItem[];

    constructor(maxBooksPerOrder: number) {
        this.books = 1;
        this.bookDetails = [...Array(maxBooksPerOrder).keys()].map(index => ({
            index,
            bookId: BookId.GoodGirlKarma,
            dedication: ''
        }));
    }
}
