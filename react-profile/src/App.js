import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/navbar/index";
import Portfolio from "./components/pages/portfolio";
import AboutPage from "./components/pages/about";
// import Contact from "./components/pages/Contact";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={AboutPage} />
        <Route exact path="/portfolio" component={Portfolio} />
        {/* catch all route route remove Path */}
      </div>
    </Router>
  );
}

export default App;