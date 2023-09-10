import Header from "../../widgets/Header";
import {Outlet} from "react-router-dom";

const MainPage = () => {
    return (
        <div className='animate__animated animate__fadeIn'>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainPage;