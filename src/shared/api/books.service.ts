import {Environment} from "../utils";
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {TBook, TResponseArrayOfBooks, TResponseBook} from "../../app/types";
import {mapArrayResponseBooksToArrayBooks, mapBookResponseToBook} from "../../entities/book/lib";
import {TNewBooks} from "../../app/types";
import {TGetBooksByQuery} from "../../app/types";

export const booksApi = createApi({
    reducerPath: 'bookApi',
    tagTypes: ['Book'],
    baseQuery: fetchBaseQuery(
        {
            baseUrl: 'https://www.googleapis.com/books/v1/'
        }
    ),
    endpoints: (builder) => ({
        getBookById: builder.query<TBook, string>({
            query: (id: string) => `volumes/${id}`,
            transformResponse: (response: TResponseBook): TBook =>
                mapBookResponseToBook(response)
        }),

        getBooks: builder.query<TNewBooks, TGetBooksByQuery>({
            query: (
                {
                    currentQuery: query,
                    paginationStep: amount,
                    newPosition: position,
                    sortBy = 'relevance',
                    category = 'all'
                }
            ) =>
                `volumes?q=${query}${category !== 'all' ? `+subject:${category}` : ''}&startIndex=${position}&maxResults=${amount}&orderBy=${sortBy}&key=${import.meta.env[Environment.GOOGLE_BOOKS_API_KEY]}`,
            keepUnusedDataFor: 600,

            transformResponse: (response: TResponseArrayOfBooks) => {
                return {
                    amount: response.totalItems,
                    books: mapArrayResponseBooksToArrayBooks(response.items),
                }
            }
        })
    }),
})

export const {useGetBookByIdQuery, useLazyGetBooksQuery} = booksApi