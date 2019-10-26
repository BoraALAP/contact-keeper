import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactState from "./context/ContactState";
import AuthState from "./context/auth/AuthState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <div>
            <NavBar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
              </Switch>
            </div>
          </div>
        </Router>
      </ContactState>
    </AuthState>
  );
};

export default App;
