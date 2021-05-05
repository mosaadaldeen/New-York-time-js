import React from "react";
import "./App.css";
import Articles from "./components/Articles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <>
      <p className="opening">
        Welcome to <code>ReadMe</code>, The place where you read you morning
        newspaper
      </p>
      {/* <Articles /> */}
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Articles} />
          {/* <Route path="/:id" component={Details} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
