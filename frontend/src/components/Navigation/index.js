import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom/";
import { logoutUser } from "../../store/sessionReducer";
import LoginPage from "../LoginFormPage";
import SignUpForm from "../SignupFormPage";


const Navigation = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)

    // if (!sessionUser) return <Redirect to='/login' />


    const handleClick = (e) => {
        e.preventDefault();

        dispatch(logoutUser())
    }

    return(
        <>
        {sessionUser &&  <> <p>Hey {sessionUser.username}</p> 
        <button onClick={handleClick}>Logout</button></>}

        {!sessionUser && <> {<LoginPage/ >} </>}
           
        </>

    )

}


export default Navigation