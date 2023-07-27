import React from "react"
import './MainPageForm.css'

const MainPage = () => {


//

    return (

        <>
        
        <div id='mainPageBox'>

            <img id='mainLogo' src='Jungle-7-25-2023.png'/>
                <div id='searchBoxContainer'>
                    <input id='searchBox' type='text' placeholder="Search The Jungle"/>
                    <button id='searchButton'>
                        <div>
                        <i className="fa-solid fa-magnifying-glass">
                            Mag
                        </i> 
                        </div>
                        </button>
                </div>

                <button>
                    Hello, sign in
                   <br></br>
                    <span id="AccountLists">Account & Lists</span>
                </button>
           
    
        </div>
        
        </>

    )

}



export default MainPage