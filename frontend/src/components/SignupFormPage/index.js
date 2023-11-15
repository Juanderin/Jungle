import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createUser } from "../../store/sessionReducer";
import { Redirect } from "react-router-dom";
import './SignupForm.css'
import { Link } from "react-router-dom";
import { signup } from "../../store/sessionReducer";
import { useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; 

const SignUpForm = () => {

    const dispatch = useDispatch("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passCheck, setpassCheck] = useState("")
    const sessionUser = useSelector(state => state.session.user)
    const [errors, setErrors] = useState([])



    if (sessionUser) return <Redirect to='/' />

    const handleSubmit = (e) => {
        e.preventDefault();
        
    
        if (password === passCheck) {
            setErrors([]);
      
            dispatch(signup({username: username, email: email, password: password}))
            .catch(async (res) => {
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }
                if (data?.errors) {
                    setErrors(data.errors)
                } else if (data) {
                    setErrors([data])
                } else {
                    setErrors([res.statusText])
                } 

              
            })
        }

       return setErrors(['Passwords do not match'])
    };


    const getErrorField = (field) => {
      
        if (errors) {
        return errors.find((error) => {
            return error.includes(field)
        })
    } 
    }

    

    return (

        <>
        
        <div id='logo'>
            <img src='Jungle-7-24-2023.png'></img>
        </div>
        
        <div id='signFormContents'>

            <div id='signBox'>

                <form id='formSignUp' onSubmit={handleSubmit}>
                    <h2 id='createHeader'>Create Account</h2>
                    
                    <div id='signButtons'>

                        <label id='textText'>Your Name
                            <input id={getErrorField("Username")? "signupFieldErrors" : 'nameText' } placeholder="First and last name" 
                            type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </label>
                        {getErrorField("Username")? <span id='signupError'><i id="a-icon a-icon-alert" >!</i> {getErrorField('Username')}</span> : null}
                        <br/>

                        <label id='textText' >Email
                            <input id={getErrorField("Email")? "signupFieldErrors" : 'emailsText' } 
                            type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </label>
                        {getErrorField("Email")? <span id='signupError'><i id="a-icon a-icon-alert" >!</i> {getErrorField('Email')}</span> : null}
                        <br/>

                        <label id='textText' >Password
                            <input id={getErrorField("Password")? "signupFieldErrors" : 'passTexts' } placeholder="At least 6 characters" 
                            type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </label>
                        {getErrorField("Password")? <span id='signupError'><i id="a-icon a-icon-alert" >!</i> {getErrorField('Password')}</span> : null}
                        <br/>

                        <label id='textText' >Re-enter password
                            <input id='passTexts'  type='password' value={passCheck} onChange={(e) => setpassCheck(e.target.value)}/>
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
            
        </div>

        </>

    )

}


export default SignUpForm;