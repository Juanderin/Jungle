import { Route, Switch } from "react-router-dom/";
import LoginPage from "./components/LoginFormPage";
import { Link } from "react-router-dom/"
// import UserIndex from "./components/Navigation/userIndex";
import Navigation from "./components/Navigation";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom/";

const App = () => {
  const sessionUser = useSelector(state => state.session.id)

  // if (!sessionUser) return <Redirect to='/login' />

  return (
  <div>
    <h1>Welcome to Jungle</h1>
   <Switch>
    <Route path='/login' component={LoginPage}/>
    <Route path='/' component={Navigation}/>
    <LoginPage />
    </Switch> 
  </div>

  )
}

export default App;
