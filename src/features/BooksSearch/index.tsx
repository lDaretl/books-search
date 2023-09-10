import React, {useEffect, useState} from "react";
import useBooks from "../../shared/hooks/useBooks.tsx";
import useActions from "../../shared/hooks/useActions.tsx";
import {useLazyGetBooksQuery} from "../../shared/api/books.service.ts";
import Search from "../../shared/ui/Search";
import Select from "../../shared/ui/Select";
import {paginationStep} from "../../entities/book/pagination";
import {categoriesOptions, sortOptions} from "../../entities/book/options";

const BooksSearch = () => {
    const [query, setQuery] = useState<string>('')

    const {
        setNewBooks,
        setCategory,
        setSort,
        setBooksIsLoading,
        setBooksError
    } = useActions()

    const {
        currentQuery,
        category,
        sortBy,
    } = useBooks()

    const [trigger, {data, isFetching, error}] = useLazyGetBooksQuery()

    useEffect(() => {
        if (data)
            setNewBooks({books: data!.books, amount: data!.amount, query})
    }, [data])

    useEffect(() => {
        setBooksIsLoading(isFetching)
    }, [isFetching])

    useEffect(() => {
        setBooksError(error)
    }, [error])
    const changeCategory = async (category: string) => {
        if (currentQuery) {
            trigger({currentQuery, paginationStep, newPosition: 0, sortBy, category})
        }
        setCategory(category)
    }

    const changeSort = async (sortBy: string) => {
        if (currentQuery) {
            trigger({currentQuery, paginationStep, newPosition: 0, sortBy, category})
        }
        setSort(sortBy)
    }

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        trigger({currentQuery: query, paginationStep, newPosition: 0, sortBy, category})
    }

    const searchProps = {
        label: 'Name of the book',
        query,
        setQuery,
        onSubmitHandler
    }

    return (
        <div className='container px-4'>
            <Search  {...searchProps}/>
            <div className='mx-auto'>
                <div className='d-flex justify-content-center gap-3'>
                    <Select
                        label='Categories'
                        id='categories'
                        options={categoriesOptions}
                        value={category}
                        onChange={changeCategory}
                    />
                    <Select
                        label='Sorting By'
                        id='sort'
                        options={sortOptions}
                        value={sortBy}
                        onChange={changeSort}
                    />
                </div>
            </div>
        </div>
    );
};

export default BooksSearch;