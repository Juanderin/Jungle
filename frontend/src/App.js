import { Route, Switch } from "react-router-dom/";
import loginPage from "./components/LoginFormPage";
import { Link } from "react-router-dom/"


const App = () => {


  return (
  <div>
    <h1>hello</h1>
   <Switch>
    <Route path='/login' component={loginPage}/>
    </Switch> 
  </div>

  )
}

export default App;
