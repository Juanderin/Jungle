import React from "react";
import * as sessionActions from '../../store/sessionReducer'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './LoginForm.css';
import { useHistory } from "react-router-dom";

const LoginPage = () => {
    const dispatch = useDispatch();
    const id = useParams().userId 
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();
    const [errors, setErrors] = useState([])
    // const [error]

    // debugger
    if (sessionUser) return <Redirect to='/'/>
    

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors([])
        dispatch(sessionActions.login({credential, password}))
        .catch(async (res) => {
            let data;
            try {
                data = await res.clone().json();
            } catch {
                data = await res.text();
            }
            if (data?.errors) {
                // debugger
                console.log("done");
                setErrors(data.errors)
            } else if (data) {
                setErrors([data])
            } else {
                setErrors([res.statusText])
            } 

          
        })
    }

    const handleRedirect = (e) => {
        e.preventDefault();

        history.push('/signup')
    }




    return (

        <>
         <div id='logo'>
            <img src='Jungle-7-24-2023.png'></img>
        </div>
      
        <div id='loginFormContents'>
         {(errors.length) ? <div id='loginErrorContainer'>  
         <div id='warningTriangle'>
         <img id="alertPic" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADRUlEQVR4nO2YPWgUURDHf0ZFCRJE8YOIoiIoWARMoYVFLCy0VEsVbWJaUxoQQVNqOo2dSRlT6hUKHrl5l5yQIhAhgiAoBiUgEkSMnycjc3E9br3dvb3bXckfHhzZmbfzz3u7b/YHK1pRNlWEiw4ukGUJHBH4aeMoWVQZVjkoOSjbmC5DG1lTAc6pAYE3Ouz3ebKkPGwQmLeVOOsx9a4EHWRFAoNmYkq3mG0zZ2YGyYImYI+Dz/qAF+Bw5e8C3QI/HCxNwj7SLoFxW4171dccjNiqjJNmCfSYiY8OOquvT8E2gUUzc5w0agxWO5gxI1f84hwMWMyzPKwhbXLQZwW+zMN6v7gcrBN4YbF9pEl52OhgwbbMqXrxDk5b7PunsJm0yMGQFfYkRM4jW5Uh0qAiHBD46uC7QFfQPIGDDr7p0N8kLQc5W407EXKHbVUek6QETlghHwqwpfr6NLQL7NWhD3n1dc3RXJvjZMsKrypyrcCcFXG5VozAbU/3O1ArRnNtRZ/rnE0vvEYB/VbAnF8BDu5WjAhcqxWjZ4meKRbXTyvl3RK6vfzighhR6SlvMYt52N60wv0eUoEHdeICGVEJPLTY4dgL9rlhl71q9ZW7Py4j2hE7WNIOWTvl2AuvUVzeCrsZIDawEZXALYt3+g1Ds1SEM3ajBW1L4jZSgg4HbzVe70UzpI2gNoRWVG+QnLBGVAKXLOe1nkPELU/7PaMte7OMlKFNicu/zp7ImoQd9rGkBfUEzYtiRKUMzFjYJ4FdxCUHo1bQWMi8SEZUAvctd5Q4aaEChSnY3SojE7DTVqRxSllFC6+HzW/EiErgRiyUUslghRYqdGu1kWlod/CqIUpptPA36lRSGGUO/UbxdL9Xo8xR+EMp56P8M73LWop6yhZhq4G57iAHaL3tHZpS+tHCpCRRKaWHFo6QEjk7AgJTynq0MApdiYOWOOisHMoOjoVpD3xpYZS3lv6OYb6BQJQyKC1MykguCKX00kIlgcT3kPbqmIBDcczpjFL6fkpUPmrC0MKk5IxSas1/XdBXmsCXsLQwKYkfpWyEFiYlV00pKyjGjxamVZOwSWn+MqUUmPW8WTI5BGaXqUjGRz7pHbKi/1a/ANZWzq0FAyXlAAAAAElFTkSuQmCC"></img>
         </div>
                <div id='errorWords' >
                 <div id="errorText">There was a problem</div> 
                <div id="errorTextE" >{errors}</div>
                </div>
            </div> : null}
        <div id='formBox'>
        <form onSubmit={handleSubmit}> 
        <h3 id="signHead">Sign In</h3>
        <div id='inputButtons'>
        <label id='emailText'>Email 
            <input id={(errors.length) ? "signupFieldErrorsL" : 'emailButton' } type='text' value={credential} onChange={(e) => setCredential(e.target.value)}/>
        </label>
        <br/>
        <label id="passText">Password
            <input id={(errors.length) ? "signupFieldErrorsL" : 'passButton' }  type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        </div>
        <br/>
        <button type='submit' id='signButton'>Sign In</button>
        </form>
        <p id='bottomText'>By contining you agree to the Jungle's conditions of use and privacy notice</p>
        </div>
        <div id='redirectLink'>
        <p id="newToJungle">New to Jungle?</p>
        <button onClick={handleRedirect} id='signUpButton'>Sign Up</button>
        </div>
        </div>
        </>


    )

}

export default LoginPage