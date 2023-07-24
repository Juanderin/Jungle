import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom/";


const Navigation = () => {

    const sessionUser = useSelector(state => state.session.id)

    if (!sessionUser) return <Redirect to='/login' />

    return(
        <h1>Hey</h1>
    )

}


export default Navigation