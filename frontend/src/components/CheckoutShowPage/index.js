import { useSelector } from "react-redux/";
import { useEffect } from "react"
import { useDispatch } from "react-redux/"
import { fetchCarts } from "../../store/cart";
import { useHistory } from "react-router-dom/";
import MainPage from "../MainPageForm";
import { fetchProducts } from "../../store/products";

const Checkout = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const cart = useSelector(state => state.carts)
    const user = useSelector(state => state.session)
    

    useEffect(() => {
        dispatch(fetchProducts())
    },[])


    return (

        <>

            <div id='checkout'>

                <h1>Hello</h1>

            </div>
        </>

    )


}


export default Checkout