import React, { useRef, useEffect, useState } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';


// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Login from './views/Login';
import HomeStudent from './views/HomeStudent';
import HomeEmployer from './views/HomeEmployer';
import SjobBoard from './views/SjobBoard';
import StudentRegister from './views/StudentRegister';
import EmployerRegister from './views/EmployerRegister';
import StudentProfile from './views/StudentProfile';
import Contact from './views/Contact';
import About from './views/About';
import FAQ from './views/FAQ';
import studentProfile from './views/StudentProfile';
import employerProfile from './views/EmployerProfile';
import EjobPost from './views/EjobPost';
import EcurrPosted from './views/EcurrPosted';
import LoginBypass from './views/LoginBypass';
import mapBoard from './views/mapBoard';
import EmployerReviews from './views/EmployerReviews';
import StudentsReview from './views/StudentsReview';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const [user, setUser] = useState();

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/login" component={Login} layout={LayoutDefault} />
          <AppRoute exact path="/HomeStudent" component={HomeStudent} layout={LayoutDefault} />
          <AppRoute exact path="/StudentRegister" component={StudentRegister} layout={LayoutDefault} />
          <AppRoute exact path="/Contact" component={Contact} layout={LayoutDefault} />
          <AppRoute exact path="/About" component={About} layout={LayoutDefault} />
          <AppRoute exact path="/FAQ" component={FAQ} layout={LayoutDefault} />
          <AppRoute exact path="/studentProfile" component={studentProfile} layout={LayoutDefault} />
          <AppRoute exact path="/HomeEmployer" component={HomeEmployer} layout={LayoutDefault} />
          <AppRoute exact path="/SjobBoard" component={SjobBoard} layout={LayoutDefault} />
          <AppRoute exact path="/EmployerRegister" component={EmployerRegister} layout={LayoutDefault} />
          <AppRoute exact path="/StudentProfile" component={StudentProfile} layout={LayoutDefault} />
          <AppRoute exact path="/employerProfile" component={employerProfile} layout={LayoutDefault} />
          <AppRoute exact path="/myJobsPosted" component={EcurrPosted} layout={LayoutDefault} />
          <AppRoute exact path="/newJobPosting" component={EjobPost} layout={LayoutDefault} />
          <AppRoute exact path="/Login/Bypass" component={LoginBypass} layout={LayoutDefault} />
          <AppRoute exact path="/mapBoard" component={mapBoard} layout={LayoutDefault} />
          <AppRoute exact path="/EmployerReviews" component={EmployerReviews} layout={LayoutDefault} />
          <AppRoute exact path="/StudentsReview" component={StudentsReview} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;