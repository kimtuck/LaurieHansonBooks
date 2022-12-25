import { BookDetails } from './BookDetails';
import BookType from './BookType';

export default class OrderDetails {
    books: number;

    bookDetails: BookDetails[];

    constructor() {
        this.books = 1;
        this.bookDetails = [{ bookType: BookType.GoodGirlKarma, dedication: '' }];
    }
}