import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Landing from "./Components/layout/Landing";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
      </Fragment>
    </Router>
  );
};

export default App;
