import React, {Dispatch} from "react";
import searchIcon from './searchIcon.png';

type TSearchProps = {
    label: string,
    query: string,
    setQuery: Dispatch<React.SetStateAction<string>>,
    onSubmitHandler: (e: React.FormEvent) => void
}

const Search = ({label, query, setQuery, onSubmitHandler}: TSearchProps) => {
    return (
        <form
            className='mx-auto'
            style={{
                minWidth: '250px',
                maxWidth: '500px'
            }}
            onSubmit={onSubmitHandler}
        >
            <div className="col-auto position-relative w-100 p-0 shadow">
                <div className="form-floating mb-3">
                    <input
                        id="inputSearch"
                        type="text"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        className="form-control"
                        placeholder="Name of the book"
                        required
                    />
                    <label htmlFor="floatingInput ">{label}</label>
                    <button
                        type="submit"
                        className="
                            btn
                            position-absolute
                            top-0
                            end-0
                            d-flex
                            h-100
                            align-items-center
                        "
                    >
                        <img
                            src={searchIcon}
                            alt="search icon"
                            style={{
                                maxWidth: '22px',
                                marginRight: '0px'
                            }}
                        />
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Search;