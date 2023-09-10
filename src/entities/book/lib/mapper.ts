import {TResponseBook, TBook} from "../../../app/types";

export function mapBookResponseToBook(book: TResponseBook): TBook {
    return {
        id: book.id,
        selfLink: book.selfLink,
        image: book.volumeInfo.imageLinks?.thumbnail ?? '',
        categories: book.volumeInfo?.categories ?? '',
        title: book.volumeInfo?.title ?? '',
        authors: book.volumeInfo?.authors ?? '',
        description: book.volumeInfo?.description ?? ''
    }
}

export function mapArrayResponseBooksToArrayBooks(books: TResponseBook[]): TBook[] {
    return books.map((book: TResponseBook) => mapBookResponseToBook(book))
}