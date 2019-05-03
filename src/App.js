import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Footer from "./components/layout/Footer";
import AppNavbar from "./components/layout/AppNavbar";
import Dashboard from "./components/home/Dashboard";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppNavbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
