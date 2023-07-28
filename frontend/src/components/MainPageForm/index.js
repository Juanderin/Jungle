import React from "react"
import './MainPageForm.css'
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import { useSelector } from "react-redux";

const MainPage = () => {
    const sessionUser = useSelector(state => state.session.user)


// debugger 

    return (

        <>
        
        <div id='mainPageBox'>

            <img id='mainLogo' src='/Jungle-7-25-2023.png'/>
                <div id='searchBoxContainer'>
                    <input id='searchBox' type='text' placeholder="Search The Jungle"/>
                    <button id='searchButton'>
                        <div>
                        <i className="fa-solid fa-magnifying-glass" >
                        </i> 
                        </div>
                        </button>
                </div>

                <button>
                    Hello, sign in {sessionUser && sessionUser.username}
                   <br></br>
                    <span id="AccountLists">Account & Lists</span>
                </button>
           
    
        </div>
        
        </>

    )

}



export default MainPage