import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/Footer";
import AppNavbar from "./components/layout/AppNavbar";
import Dashboard from "./components/home/Dashboard";

function App() {
  return (
    <Router>
      <AppNavbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
