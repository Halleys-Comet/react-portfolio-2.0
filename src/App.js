import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';


function App() {
  return (
    <BrowserRouter>
    <section className="home-img">
    <Nav></Nav>
    <Switch>
      <Route component={Home} path='/' exact  />
      <Route component={About} path='/about' />
      <Route component={Projects} path='/projects' />
      <Route component={Contact} path='/contact' />
      <Route component={Resume} path='/resume' />
    </Switch>
    </section>
    </BrowserRouter>
  );
}

export default App;
