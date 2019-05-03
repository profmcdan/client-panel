import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import "./App.css";
import Footer from "./components/layout/Footer";
import AppNavbar from "./components/layout/AppNavbar";
import Dashboard from "./components/home/Dashboard";
import store, { rrfProps } from "./store";

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <AppNavbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
