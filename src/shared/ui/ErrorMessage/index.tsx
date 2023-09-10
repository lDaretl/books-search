import {TErrorProps} from "../../../app/types";

const ErrorMessage = ({error, children}: TErrorProps ) => {
    if (error && 'data' in error) {
        return (
            <div className='d-flex flex-column align-items-center justify-content-start h-100 container animate__animated animate__fadeIn'>
                {children}
                <p className='text-danger fs-2 fw-semibold'>{`Error ${error.status}: ` + error.data.error.message}</p>
            </div>
        )
    }

    if (error && 'error' in error) {
        return (
            <div className='d-flex flex-column align-items-center justify-content-center h-100 container animate__animated animate__fadeIn'>
                {children}
                <p className='text-danger fs-2 fw-semibold'>{`Error ${error.status}: ` + error.error}</p>
            </div>
        )
    }
};

export default ErrorMessage;