import { Link, NavLink, Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import Features from "./Features";
import Home from "./Home";



function App() {
  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="header">
            <div className="col-6">
              <span className="cover">Cover</span>
            </div>
            <div className="col-2">
              <NavLink exact activeClassName="selected" to="/">
                <span className="nav">Home</span>
              </NavLink>  
            </div>
            <div className="col-2">
              <NavLink activeClassName="selected" to="/feature">
                <span className="nav">Features</span>
             </NavLink>
            </div>
            <div className="col-2">
              <NavLink activeClassName="selected"to="/contact">
                <span className="nav">Contact</span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="row justify-content-around">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/feature">
              <Features/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route> 
          </Switch> 
        </div>
      </div>
    </div>
  );
}

export default App;
