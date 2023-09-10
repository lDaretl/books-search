import {useNavigate} from "react-router-dom";
const ErrorPage = () => {
    const navigate = useNavigate()

    return (
        <div className='container d-flex flex-column justify-content-center align-items-center h-100'>
            <p className='fs-1 fw-bold text-secondary'>Error 404: Page not found</p>
            <button
                type='button'
                className='btn btn-primary'
                onClick={() => navigate('/')}
            >
                Back to main page
            </button>
        </div>
    );
};

export default ErrorPage;