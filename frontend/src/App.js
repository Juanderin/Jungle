import { Route, Switch } from "react-router-dom/";
import LoginPage from "./components/LoginFormPage";
import { Link } from "react-router-dom/"
// import UserIndex from "./components/Navigation/userIndex";
import Navigation from "./components/Navigation";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom/";
import SignUpForm from "./components/SignupFormPage";
import MainPage from "./components/MainPageForm";
import './index.css';
import HomePage from "./components/HomePage";
import ProductShow from "./components/ProductShowPage";

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
    <Route exact path='/' component={HomePage} />
    <Route path='/login' component={LoginPage}/>
    <Route path={"/products/:productId"}><ProductShow/></Route>
    {/* <Route path='/home' component={HomePage} /> */}
    <Route path='/main' component={MainPage} />
    {/* <Route path='/cart' component= */}
    <Route path='/signup' component={SignUpForm}/>
    </Switch> 
  </>

  )
}

export default App;
