import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home.js';
import Login from './components/Login.js';

function App() {
  return (
    <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    {/* <Route component={NotFound}/> */}
                </Switch>
            </BrowserRouter>
            </>
  );
}

export default App;
