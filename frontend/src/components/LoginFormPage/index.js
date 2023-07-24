import React from "react";
import * as sessionActions from '../../store/sessionReducer'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import './LoginForm.css';

const LoginPage = () => {
    const dispatch = useDispatch();
    const id = useParams().userId 
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])


    // debugger
    if (sessionUser) return <Redirect to='/index'/>
    

    const handleSubmit = (e) => {
        e.preventDefault();

        // setErrors([])
        return dispatch(sessionActions.loginUser({credential, password}))
    }


    return (

        <>
        <form onSubmit={handleSubmit}> 
            <h3>Please Log In</h3> 
        <label>Username or Email:
            <input type='text' value={credential} onChange={(e) => setCredential(e.target.value)}/>
        </label>
        <br/>
        <label>Password:
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <br/>
        <input type='submit' value='Login'/>
        </form>

        </>


    )

}

export default LoginPage