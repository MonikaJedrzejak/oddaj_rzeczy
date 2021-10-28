import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home.js';

function App() {
  return (
    <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    {/* <Route exact path="/pokemons/:pokemonName" component={Pokemon}/> */}
                    {/* <Route component={NotFound}/> */}
                </Switch>
            </BrowserRouter>
            </>
  );
}

export default App;
