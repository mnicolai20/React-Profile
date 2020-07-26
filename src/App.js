import React from "react";
import { BrowserRouter as Router, Route } from "../node_modules/react-router-dom";
import NavBar from "./components/navbar/index";
import Portfolio from "./components/pages/portfolio";
import About from "./components/pages/about";
// import Contact from "./components/Pages/Contact";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        {/* catch all route route remove Path */}
      </div>
    </Router>
  );
}

export default App;