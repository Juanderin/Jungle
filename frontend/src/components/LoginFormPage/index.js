import React from "react";
import * as sessionActions from '../../store/sessionReducer'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useState } from "react";


const LoginPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])



    if (sessionUser) return <Redirect to='/'/>


    const handleSubmit = (e) => {
        e.preventDefault();

        // setErrors([])
        return dispatch(sessionActions.loginUser({credential, password}))
    }


    return (

        <>
        <form onSubmit={handleSubmit}> 
            <h1>Please Log In</h1> 
        <label>Username or Email
            <input type='text' value={credential} onChange={(e) => setCredential(e.target.value)}/>
        </label>
        <label>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <input type='submit' value='Login'/>
        </form>

        </>


    )

}

export default LoginPage