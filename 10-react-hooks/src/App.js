import "./styles.css";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import React from "react";

const App = props => {
  return (
    <Router>
      <div>
        <Header />
        <Route
          render={({ location }) => (
            <TransitionGroup className="container">
              <CSSTransition
                appear={true}
                key={location.key}
                timeout={{ enter: 400, exit: 200 }}
                classNames="fade"
              >
                <div className="inner">
                  <Switch key={location.key} location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/post/:id" component={Post} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    </Router>
  );
};

export default App;
