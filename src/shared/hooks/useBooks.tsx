import {useSelector} from "react-redux";
import {RootState} from "../../app/providers";

const UseBooks = () => {
    const currentBooks = useSelector((state: RootState) => state.booksReducer.currentBooks)
    const amountBooks = useSelector((state: RootState) => state.booksReducer.amountBooks)
    const currentPosition = useSelector((state: RootState) => state.booksReducer.currentPosition)
    const currentQuery = useSelector((state: RootState) => state.booksReducer.currentQuery)
    const sortBy = useSelector((state: RootState) => state.booksReducer.sortBy)
    const category = useSelector((state: RootState) => state.booksReducer.category)
    const booksIsLoading = useSelector((state: RootState) => state.booksReducer.booksIsLoading)
    const booksError = useSelector((state: RootState) => state.booksReducer.booksError)


    return {
        amountBooks,
        category,
        currentBooks,
        currentQuery,
        currentPosition,
        sortBy,
        booksIsLoading,
        booksError
    }
};

export default UseBooks;