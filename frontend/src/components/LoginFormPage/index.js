import React from "react";
import * as sessionActions from '../../store/sessionReducer'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";



const loginPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.sessionReducer.user);
    const [credential, setCredential] = useState("")
    const [password, setPassword] = useState("")



}