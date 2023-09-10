import {TBook} from "../../../app/types";
import {useNavigate} from "react-router-dom";

type BookCardProps = {
    data: TBook
}

const BookCard = ({data}: BookCardProps) => {
    const navigate = useNavigate()
    return (
        <li className='animate__animated' onClick={() => navigate(`book/${data.id}`)} style={{cursor: 'pointer'}}>
            <div className="card h-100 rounded-4 shadow-sm bg-light" style={{width: '16rem'}}>
                <div
                    className={`
                        align-self-center
                        pt-4
                        pb-2
                        ${!data.image && 'opacity-0'}
                    `}
                    style={{
                        maxWidth: '200px',
                        height: '230px',
                    }}
                >
                    <img
                        src={data.image}
                        alt={`${data.title} cover`}
                        className="object-fit-contain w-100 h-100"
                        style={{
                            boxShadow: '5px 5px 15px 0 #222',
                        }}
                    />
                </div>
                <div className="d-flex flex-column card-body">
                    <p className="card-text flex-grow-1 text-secondary"><u>{data.categories && data.categories[0]}</u></p>
                    <h5 className="card-title flex-grow-1">{data.title}</h5>
                    <p className="card-text flex-grow-1 text-secondary">{!!data.authors.length && data.authors.join(', ')}</p>
                </div>
            </div>
        </li>
    );
};

export default BookCard;