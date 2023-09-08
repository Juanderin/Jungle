import React from "react"
import './MainPageForm.css'
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import { useSelector } from "react-redux";
import DropProfile from "../DropProfileButton";
import { useHistory } from "react-router-dom";
import SearchBar from "./Searchbar";



const MainPage = () => {
    const sessionUser = useSelector(state => state.session.user)
    const cartQuantities = useSelector(state => state.carts)
    const history = useHistory();
    const quantities = Object.values(cartQuantities).map((item) => item.quantity)
    const cartQuantity = quantities.reduce((total, quantity) => total + quantity, 0)
    


    const handleClick = () => {

        history.push("/")
    }

    const handleCart = () => {

        history.push('/cart')

    }

    return (

        <>
        
        <div id='mainPageBox'>

                <div id='logoLinkContainer' onClick={handleClick}> 
                    <img id='mainLogo' src='/Jungle-7-25-2023.png'/>
                </div>

                <div id='searchBoxContainer'>
                    <SearchBar />
                </div>

                <div id='myLinks'>

                    <div className='symbol'>
                        <a href='https://github.com/Juanderin'><i className="fa-brands fa-github fa-2xl"
                        style={{fontSize: '3em', color: "#FFFFFF"}}>
                        </i>
                        </a>
                    </div>

                    <div id='linked'className='symbol'> 
                        <a href='https://www.linkedin.com/in/juanavilame/'><i className="fa-brands fa-linkedin fa-2xl" 
                        style={{fontSize: '3em', color: "#0a66c2"}}>
                        </i>
                        </a>
                    </div>
                    
                </div>

                <div id='dropProfile'>
                    <DropProfile user={sessionUser}/>
                </div>


                <div id="cartButton" onClick={handleCart}>
                  <div id='cartAmount' >{cartQuantity}</div> 
                    <img id='cartImg' src="/cart.jpg" /> 
                </div>

           
        </div>

    
        </>

    )

}



export default MainPage