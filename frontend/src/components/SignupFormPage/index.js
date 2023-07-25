import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createUser } from "../../store/sessionReducer";
import { Redirect } from "react-router-dom";
import './SignupForm.css'


const SignUpForm = () => {

    const dispatch = useDispatch("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const sessionUser = useSelector(state => state.session.user)
    const [errors, setErros] = useState([])

    if (sessionUser) return <Redirect to='/' />

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser({username: username, email: email, password: password}))

    }

    return (

        <>
        <div id='signBox'>
        <form onSubmit={handleSubmit}>
        <h2 id='createHeader'>Create Account</h2>
        <div id='signButtons'>
        <label id='textText'>Your Name
            <input id='nameText' type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <br/>
        <label id='textText' >Email
            <input id='emailsText' type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <br/>
        <label id='textText' >Password
            <input id='passTexts' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        </div>
        <br/>
        <input type='submit' value='Signup' id='signupButton'/>
        </form>
        </div>
        </>

    )

}


export default SignUpForm;