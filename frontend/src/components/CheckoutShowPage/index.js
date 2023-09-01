import { useSelector } from "react-redux/";
import { useEffect } from "react"
import { useDispatch } from "react-redux/"
import { fetchCarts } from "../../store/cart";
import { useHistory } from "react-router-dom/";
import MainPage from "../MainPageForm";
import { fetchProducts } from "../../store/products";
import './CheckoutShowPage.css'

const Checkout = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const cart = useSelector(state => state.carts)
    const user = useSelector(state => state.session.user)
    const name = user?.username
    const upperName = name.charAt(0).toUpperCase() + user.username.slice(1).toLowerCase();

    useEffect(() => {
        dispatch(fetchProducts())
    },[])


    return (

        <>
            <MainPage />
            <div id='finalCheckoutContainer'>
                <div id='checkout'>

                    {/* <h1>Hello</h1> */}

                    <div id='checkoutContainer'>
                            <div id='checkoutContent'> Thank you for your purchase {upperName}, 
                                your items should arrive 
                                <div id='checkoutDate'>January 1st, 1900</div>
                                <div id='otherOffers'>
                                    Please feel free to browse for other great offers!
                                </div>
                            </div>

                    </div>

                </div>
            </div>
        </>

    )


}


export default Checkout