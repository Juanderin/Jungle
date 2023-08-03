import React from "react"
import './MainPageForm.css'
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import { useSelector } from "react-redux";
import DropProfile from "../DropProfileButton";
import SearchBar from "./Searchbar";

const MainPage = () => {
    const sessionUser = useSelector(state => state.session.user)


// debugger 

    return (

        <>
        
        <div id='mainPageBox'>

            <img id='mainLogo' src='/Jungle-7-25-2023.png'/>
                <div id='searchBoxContainer'>
                    {/* <input id='searchBox' type='text' placeholder="Search The Jungle"/> */}
                    <SearchBar />
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