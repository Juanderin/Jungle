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

const App = () => {
  const sessionUser = useSelector(state => state.session.user)


  return (
  <div>
    {/* <h1>Welcome to Jungle</h1> */}
    {/* <div id='logo'>
    <img src='Jungle-7-24-2023.png'></img>
    </div> */}

   <Switch>
   {/* <Route path='/' component={LoginPage}/> */}
    <Route exact path='/' component={Navigation}/>
    <Route path='/login' component={LoginPage}/>
    <Route path='/main' component={MainPage} />
    <Route path='/signup' component={SignUpForm}/>
    </Switch> 
  </div>

  )
}

export default App;
