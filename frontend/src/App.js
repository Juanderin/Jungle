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


const App = () => {
  const sessionUser = useSelector(state => state.session.user)


  return (
  <>
    {/* <h1>Welcome to Jungle</h1> */}
    {/* <div id='logo'>
    <img src='Jungle-7-24-2023.png'></img>
    </div> */}

   <Switch>
   {/* <Route path='/' component={LoginPage}/> */}
    {/* <Route exact path='/' component={Navigation}/> */}
    {/* <Route path='/home' component={HomePage} /> */}
    
    <Route exact path='/' component={HomePage} />
    <Route path='/login' component={LoginPage}/>
    <Route path={"/products/:productId"}><ProductShow/></Route>
    <Route path={'/review/:productId'} component={ReviewForm}/>
    <Route path='/search'><SearchShowPage /></Route>
    <Route path='/main' component={MainPage} />
    <Route path='/cart' component={CartShow} />
    <Route path='/signup' component={SignUpForm}/>
    <Route path='/tester' component={ProductsIndex} />
    </Switch> 
  </>

  )
}

export default App;
