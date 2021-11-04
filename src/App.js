import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Logout from './components/Logout';

function App() {
  return (
    <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/logout" component={Logout}/>
                    {/* <Route component={NotFound}/> */}
                </Switch>
            </BrowserRouter>
            </>
  );
}

export default App;
