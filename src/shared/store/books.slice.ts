import {createSlice} from "@reduxjs/toolkit";
import {TBook, TState} from "../../app/types";

type TSetNewBooks = {
    payload: {
        books: TBook[],
        amount: number,
        query: string
    }
}

const initialState: TState = {
    currentBooks: [],
    amountBooks: 0,
    currentPosition: 0,
    currentQuery: '',
    category: 'all',
    sortBy: 'relevance',
    booksIsLoading: false,
    booksError: {}
}

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setNewBooks: (state, {payload: {books, amount, query}}: TSetNewBooks) => {
            state.currentBooks = books
            if (amount)
                state.amountBooks = amount
            if (query)
                state.currentQuery = query
        },

        moveToNextPage: (state, {payload: position}) => {
            state.currentPosition = position
        },

        setCategory: (state, {payload: category}) => {
            state.category = category
        },

        setSort: (state, {payload: sortBy}) => {
            state.sortBy = sortBy
        },

        setBooksIsLoading: (state, {payload: value}) => {
            state.booksIsLoading = value
        },

        setBooksError: (state, {payload: value}) => {
            state.booksError = value
        }
    }
})

export const {actions, reducer: booksReducer} = booksSlice