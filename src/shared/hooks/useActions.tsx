import {useMemo} from "react";
import {useDispatch} from "react-redux";
import {actions} from "../store/books.slice.ts";
import {bindActionCreators} from "@reduxjs/toolkit";
import {AppDispatch} from "../../app/providers";

const rootActions = {
    ...actions
}

export const useActions = () => {
    const dispatch: AppDispatch = useDispatch()

    return useMemo(() => {
        return bindActionCreators(rootActions, dispatch)
    }, [dispatch])
};

export default useActions;