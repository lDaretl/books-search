import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "../../pages/MainPage";
import BooksList from "../../widgets/BooksList";
import BookInfo from "../../widgets/BookInfo";
import ErrorPage from "../../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        children: [
            {
                path: "",
                element: <BooksList/>
            },

            {
                path: "book/:id",
                element: <BookInfo/>
            }
        ]
    },

    {
        path: '*',
        element: <ErrorPage/>
    }
]);

export const RoutesProvider = () => {
    return (
        <RouterProvider
            router={router}
            fallbackElement={
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
        />
    )
}