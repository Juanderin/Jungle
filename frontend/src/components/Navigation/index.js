import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom/";
import { logoutUser } from "../../store/sessionReducer";


const Navigation = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)

    if (!sessionUser) return <Redirect to='/login' />


    const handleClick = (e) => {
        e.preventDefault();

        dispatch(logoutUser())
    }

    return(
        <>
        <p>Hey {sessionUser.username}</p>
        <button onClick={handleClick}>Logout</button>
        </>

    )

}


export default Navigation