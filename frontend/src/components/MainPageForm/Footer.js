import { Link } from "react-router-dom/";
import { useSelector } from "react-redux";

const Footer = () => {
const user = useSelector(state => state.session.user)


    return (

        <div id='footer'>
            <div id='footerItems'>
                <div id='footerText'> Thank you for visiting Jungle </div>
                <Link className="footerLinks"to='/'>HomePage</Link>

                {!user ? <>
                <Link className="footerLinks"to='/login'>Login</Link>
                <Link className="footerLinks"to='/signup'>SignUp</Link>
                </>
                : null }
                
            </div>
        </div>

    )



}



export default Footer;