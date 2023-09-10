import {JSX} from "react";
import {Provider} from "react-redux";
import {booksReducer} from "../../shared/store/books.slice.ts";
import {booksApi} from "../../shared/api/books.service.ts";
import {combineReducers, configureStore} from '@reduxjs/toolkit'

const reducers = combineReducers(
    {
        booksReducer,
        [booksApi.reducerPath]: booksApi.reducer
    }
)

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(booksApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const StoreProvider = ({children}: { children: JSX.Element }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}