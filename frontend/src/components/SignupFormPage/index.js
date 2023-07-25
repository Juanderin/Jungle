import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createUser } from "../../store/sessionReducer";
import { Redirect } from "react-router-dom";
import './SignupForm.css'
import { Link } from "react-router-dom";


const SignUpForm = () => {

    const dispatch = useDispatch("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passCheck, setpassCheck] = useState("")
    const sessionUser = useSelector(state => state.session.user)
    const [errors, setErros] = useState([])

    if (sessionUser) return <Redirect to='/' />

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (password === passCheck) {

            dispatch(createUser({username: username, email: email, password: password}))

        } else {

            throw new Error('Passwords do not match');
        }
    }

    return (

        <>
        <div id='signBox'>
        <form id='formSignUp' onSubmit={handleSubmit}>
        <h2 id='createHeader'>Create Account</h2>
        <div id='signButtons'>
        <label id='textText'>Your Name
            <input id='nameText' placeholder="First and last name" type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <br/>
        <label id='textText' >Email
            <input id='emailsText' type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <br/>
        <label id='textText' >Password
            <input id='passTexts' placeholder="At least 6 characters" type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <br/>
        <label id='textText' >Re-enter password
            <input id='passTexts' type='password' value={passCheck} onChange={(e) => setpassCheck(e.target.value)}/>
        </label>
        </div>
        <br/>
        <div id='signupButtonBox'>
        <input type='submit' value='Continue' id='signupButton'/>
        </div>
        <p id='suDisclaimer'> By contining you agree to the Jungles conditions of use and privacy notice</p>
        <br/>
        <div id='redirectSignIn'>
        <span>Already have an account?</span>
        <span id='reSpacer'></span>
        <Link to='/login'>
            <span>Sign In</span>
        </Link>
        </div>
        </form>
        </div>
        </>

    )

}


export default SignUpForm;