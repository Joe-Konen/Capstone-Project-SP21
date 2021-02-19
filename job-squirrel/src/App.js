import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, HomeStudent, HomeEmployer, About, Login, StudentRegister, EmployerRegister, Help, StudentProfile, EmployerProfile, SjobBoard, SjobSelect, SjobsToDo, EjobPost, EcurrPosted } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/StudentHome" exact component={() => <HomeStudent />} />
          <Route path="/EmployerHome" exact component={() => <HomeEmployer />} />
          <Route path="/About" exact component={() => <About />} />
          <Route path="/" exact component={() => <Login />} />
          <Route path="/Register/StudentRegister" exact component={() => <StudentRegister />} />
          <Route path="/Register/EmployerRegister" exact component={() => <EmployerRegister />} />
          <Route path="/Help" exact component={() => <Help />} />
          <Route path="/Student/Profile" exact component={() => <StudentProfile />} />
          <Route path="/Employer/Profile" exact component={() => <EmployerProfile />} />
          <Route path="/Student/JobBoard" exact component={() => <SjobBoard />} />
          <Route path="/Student/JobSelect" exact component={() => <SjobSelect />} />
          <Route path="/Student/JobsToDo" exact component={() => <SjobsToDo />} />
          <Route path="/Employer/JobPosting" exact component={() => <EjobPost />} />
          <Route path="/Employer/CurrentlyPosted" exact component={() => <EcurrPosted />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;