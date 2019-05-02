import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/Footer";
import AppNavbar from "./components/layout/AppNavbar";

function App() {
  return (
    <Router>
      <AppNavbar />
      <Switch />
      <Footer />
    </Router>
  );
}

export default App;
