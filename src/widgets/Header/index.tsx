import Background from './bg-books.jpg';
import BooksSearch from "../../features/BooksSearch";

const Header = () => {
    return (
        <header className="py-4 pb-5 position-relative" style={{background: 'rgba(0,0,0,0.35)'}}>
            <img
                src={Background}
                alt="books backround"
                className='
                    position-absolute
                    top-0
                    start-0
                    w-100
                    h-100
                    z-n1
                    object-fit-cover
                '
                style={{
                    height: '17.1rem',
                    filter: 'grayscale(30%)'
                }}
            />
            <h1
                className="mb-4 text-light text-center"
                style={{
                    textShadow: '0 0 10px #010101'
                }}
            >
                Search for books
            </h1>
            <BooksSearch/>
        </header>
    );
};

export default Header;