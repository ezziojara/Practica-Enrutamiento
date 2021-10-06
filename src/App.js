import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './views/Home';
import EnviarEstilo from './views/EnviarEstilo';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/">Enviar Número</Link>
            </li>
            <li>
              <Link to="/">Enviar Palabra</Link>
            </li>
            <li>
              <Link to="/">Enviar Estilo</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/:palabra">
            <EnviarEstilo />
          </Route>
          <Route exact path="/:palabra">
            <EnviarEstilo />
          </Route>
          <Route exact path="/:palabra/:fondo/:colorLetra">
            <EnviarEstilo />
          </Route>
          
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
