import React from "react";
import * as sessionActions from '../../store/sessionReducer'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './LoginForm.css';

const LoginPage = () => {
    const dispatch = useDispatch();
    const id = useParams().userId 
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])


    // debugger
    if (sessionUser) return <Redirect to='/'/>
    

    const handleSubmit = (e) => {
        e.preventDefault();

        // setErrors([])
        return dispatch(sessionActions.loginUser({credential, password}))
    }


    return (

        <>
        <div id='formBox'>
        <form onSubmit={handleSubmit}> 
        <h3 id="signHead">Sign In</h3>
        <div id='inputButtons'>
        <label id='emailText'>Email 
            <input id='emailButton'type='text' value={credential} onChange={(e) => setCredential(e.target.value)}/>
        </label>
        <br/>
        <label id="passText">Password
            <input id='passButton' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        </div>
        <br/>
        <button type='submit' id='signButton'>Sign In</button>
        </form>
        <p id='bottomText'>By contining you agree to the Jungles conditions of use and privacy notice</p>
        </div>
        <div id='redirectLink'>
        <p> Dont have an account?</p>
        <Link to='/signup'>
            <p>SignUp</p>
        </Link>
        </div>
        </>


    )

}

export default LoginPage