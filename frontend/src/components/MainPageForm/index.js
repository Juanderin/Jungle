import React from "react"
import './MainPageForm.css'
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import { useSelector } from "react-redux";
import DropProfile from "../DropProfileButton";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const MainPage = () => {
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory();

    const handleClick = () => {

        history.push("/")
    }


// debugger 

    return (

        <>
        
        <div id='mainPageBox'>

                <div id='logoLinkContainer' onClick={handleClick}> 
                    <img id='mainLogo' src='/Jungle-7-25-2023.png'/>
                </div>

                <div id='searchBoxContainer'>
                    <input id='searchBox' type='text' placeholder="Search The Jungle"/>
                    <button id='searchButton'>
                        <div>
                        <i id='mag' className="fa-solid fa-magnifying-glass" >
                        </i> 
                        </div>
                        </button>
                </div>

                <div id='dropProfile'>
                    <DropProfile user={sessionUser}/>
                </div>
           
    
        </div>
        
        </>

    )

}



export default MainPage