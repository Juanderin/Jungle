import { Route, Switch } from "react-router-dom/";
import { useSelector } from "react-redux";
import LoginPage from "./components/LoginFormPage";
import SignUpForm from "./components/SignupFormPage";
import MainPage from "./components/MainPageForm";
import HomePage from "./components/HomePage";
import ProductShow from "./components/ProductShowPage";
import CartShow from "./components/CartShowPage";
import ProductsIndex from "./components/ProductsIndex";
import SearchShowPage from "./components/SearchShowPage";
import ReviewForm from "./components/ReviewFormPage";
import Navigation from "./components/Navigation";
import { Redirect } from "react-router-dom/";
import './index.css';
import Checkout from "./components/CheckoutShowPage";


const App = () => {
  const sessionUser = useSelector(state => state.session.user)


  return (
  <>

   <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/login' component={LoginPage}/>
    <Route path={"/products/:productId"} component={ProductShow}/>
    <Route path={'/review/:productId'} component={ReviewForm}/>
    <Route path='/search' component={SearchShowPage}/>
    <Route path='/main' component={MainPage} />
    <Route path='/cart' component={CartShow} />
    <Route path='/signup' component={SignUpForm}/>
    <Route path='/checkout' component={Checkout} />
    </Switch> 
  </>

  )
}

export default App;
