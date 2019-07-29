import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Create from '../src/component/create';
import Edit from '../src/edit';
import Index from '../src/index.component';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
console.log(history);
function App() {
  return (
      <Router history={history}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2>Welcome to React CRUD Tutorial</h2> <br/>
          <Switch>
            <Route exact path='/create' component={ Create } />
            <Route path='/edit/:id' component={ Edit } />
            <Route path='/index' component={ Index } />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
