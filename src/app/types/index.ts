import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";
import {ReactNode} from "react";

export type TResponseArrayOfBooks = {
    kind: string,
    totalItems: number,
    items: []
}

export type TResponseBook = {
    id: string,
    selfLink: string,
    volumeInfo: {
        title: string,
        authors: string[],
        categories: string[],
        description: string,
        imageLinks: {
            thumbnail: string
        }
    }
}

export type TBook = {
    id: string,
    selfLink: string,
    image: string,
    categories: string[],
    title: string,
    authors: string[],
    description: string
}

export type TState = {
    currentBooks: TBook[] | [],
    amountBooks: number,
    currentPosition: number,
    currentQuery: string,
    category: string,
    sortBy: string,
    booksIsLoading: boolean,
    booksError: FetchBaseQueryError | SerializedError | undefined
}

export type TSelectProps = {
    label: string,
    id: string,
    options: string[],
    value: string,
    onChange: ((category: string) => {payload: any; type: string}) | ((category: string) => Promise<void>)
}

export type TNewBooks = {
    books: TBook[],
    amount: number
}

export type TGetBooksByQuery = {
    currentQuery: string,
    paginationStep: number,
    newPosition: number,
    sortBy?: string,
    category?: string
}

export type TError = {
    data: {
        error: {
            message: string
        }
    },
    status: number
}

export type TErrorProps = {
    error: TError | {status: string, error: string},
    children: ReactNode
}
