import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useGetBookByIdQuery} from "../../shared/api/books.service.ts";
import Spinner from "../../shared/ui/Spinner";
import ErrorMessage from "../../shared/ui/ErrorMessage";
import {TError} from "../../app/types";

const BookInfo = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true)
    const navigate = useNavigate()
    const {id} = useParams()
    const {data: book, error, isFetching} = useGetBookByIdQuery(id!)


    if (isFetching) {
        return (
            <Spinner/>
        )
    }

    if (error && 'data' in error) {
        return (
            <ErrorMessage error={error as TError}>
                <button
                    type="button"
                    className="btn btn-primary mb-5 mt-4 align-self-end"
                    style={{width: '100px'}}
                    onClick={() => {
                        setTimeout(() => {
                            navigate('/')
                        }, 200)

                        setIsOpen(!open)
                    }}
                >
                    Back
                </button>
            </ErrorMessage>
        )
    }
    console.log(book)
    return (
        <div
            className={`d-flex h-100 animate__animated ${isOpen ? 'animate__zoomIn' : 'animate__zoomOut'} animate__faster `}>
            <div className="d-flex align-items-center w-100 h-100">
                <div className="
                        d-flex
                        flex-wrap
                        justify-content-center
                        mx-auto
                        w-100
                        h-100
                    "
                >
                    <div
                        className='
                            d-flex
                            flex-grow-1
                            justify-content-center
                            p-4
                            py-lg-5
                            bg-light
                        '
                    >
                        <div
                            className="
                                d-flex
                                justify-content-center
                                w-100
                                h-100
                            "
                            style={{
                                maxHeight: '350px',
                            }}
                        >
                            <img
                                src={book!.image}
                                alt={`${book!.title} cover`}
                                className="
                                    img-fluid
                                    object-fit-contain
                                    animate__animated animate__fadeIn
                                    h-100
                                "
                                style={{
                                    boxShadow: '5px 5px 10px 0 #222'
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className="
                            col-lg-8
                            px-4
                            d-flex
                            flex-column
                            me-xl-4
                            animate__animated
                            animate__fadeIn
                        "
                    >
                        <button
                            type="button"
                            className="btn btn-primary mb-3 mt-4 align-self-end"
                            style={{width: '100px'}}
                            onClick={() => {
                                setTimeout(() => {
                                    navigate('/')
                                }, 200)

                                setIsOpen(!open)
                            }}
                        >
                            Back
                        </button>
                        <div className="card-body pb-3">
                            <p>
                                {
                                    !!book!.categories.length
                                    &&
                                    book!.categories.join(' / ')
                                }
                            </p>
                            <h5 className="card-title mb-3">{book!.title}</h5>
                            <p className="card-text">
                                <small className="text-body-secondary">
                                    {
                                        !!book!.authors.length
                                        &&
                                        book!.authors.join(', ')
                                    }
                                </small>
                            </p>
                            <div className='ps-3 pe-4 pt-2 pb-3 me-lg-5 border shadow-sm'>
                                <p className="card-text text-wrap">
                                    {book!.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookInfo;