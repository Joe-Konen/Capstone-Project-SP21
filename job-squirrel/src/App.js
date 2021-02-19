import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, HomeStudent, HomeEmployer, About, Contact } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/StudentHome" exact component={() => <HomeStudent />} />
          <Route path="/EmployerHome" exact component={() => <HomeEmployer />} />
          <Route path="/About" exact component={() => <About />} />
          <Route path="/Contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;