import {useEffect} from "react";
import useBooks from "../../shared/hooks/useBooks.tsx";
import useActions from "../../shared/hooks/useActions.tsx";
import {useLazyGetBooksQuery} from "../../shared/api/books.service.ts";
import BookCard from "../../shared/ui/BookCard";
import {TBook, TError} from "../../app/types";
import {paginationStep} from "../../entities/book/pagination";
import Spinner from "../../shared/ui/Spinner";
import ErrorMessage from "../../shared/ui/ErrorMessage";

const BooksList = () => {
    const {moveToNextPage, setBooksIsLoading, setNewBooks} = useActions()

    const {
        amountBooks,
        booksIsLoading,
        category,
        currentBooks,
        currentQuery,
        currentPosition,
        sortBy,
        booksError
    } = useBooks()

    const [trigger, {data, isFetching}] = useLazyGetBooksQuery()

    useEffect(() => {
        if (data) {
            setNewBooks({books: data!.books, amount: amountBooks, query: currentQuery})
        }
    }, [data])

    useEffect(() => {
        setBooksIsLoading(isFetching)
    }, [isFetching])

    const onClickHandler = async (position: number) => {
        trigger({currentQuery, paginationStep, newPosition: position, sortBy, category})
        moveToNextPage(position)
    }

    if (booksIsLoading) {
        if (currentBooks.length !== paginationStep)
            return (
                <Spinner/>
            )

        return (
            <div className='animate__animated animate__fadeInUpBig animate__faster h-100'>
                    <Spinner/>
            </div>
        )
    }

    if (!!booksError && !booksIsLoading) {
        return (
            <ErrorMessage error={booksError as TError}>
                <></>
            </ErrorMessage>
        )
    }

    return (
        <div className='px-4'>
            {
                !!amountBooks
                &&
                <h5 className='text-center py-3 animate__animated animate__fadeIn animate__fast'>Found {amountBooks} results</h5>
            }

            {
                !!currentBooks?.length
                &&
                <>
                    {
                        !!currentBooks.length
                        &&
                        <>
                            <ul className='d-flex justify-content-center flex-wrap mb-5 p-0 animate__animated animate__fadeInUpBig animate__fast'
                                style={{columnGap: '4rem', rowGap: '2rem'}}>
                                {
                                    currentBooks.map((book: TBook) =>
                                        <BookCard key={book.id} data={book}/>
                                    )
                                }
                            </ul>
                            {
                                currentBooks.length === paginationStep
                                    ?
                                    <div className="d-flex justify-content-center mb-5">
                                        <a href='#'>
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={() => {
                                                    const newPosition = currentPosition + paginationStep
                                                    onClickHandler(newPosition)
                                                }}
                                            >
                                                Load more
                                            </button>
                                        </a>
                                    </div>
                                    :
                                    <>
                                        <p className='text-center py-4 fw-semibold fs-4'>
                                            There are no more books with the specified parameters
                                        </p>
                                        <div className="d-flex justify-content-center mb-5">
                                            <a href='#'>
                                                <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    onClick={() => {
                                                        const newPosition = 0
                                                        onClickHandler(newPosition)
                                                    }}
                                                >
                                                    Back to the beginning
                                                </button>
                                            </a>
                                        </div>
                                    </>

                            }
                        </>
                    }
                </>
            }
        </div>
    );
};

export default BooksList;