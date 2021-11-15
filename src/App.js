import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import {BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
import About from './components/Pages/About';
import Services from './components/common/Services';
import Portfolio from './components/common/Portfolio';
import Team from './components/common/Team';
import Contact from './components/common/Contact';

class App extends Component {
  render(){
  return (
    <Router>
      <PageWrapper>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/team" element={<Team />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      </PageWrapper>
   </Router>
  );
  }
}


export default App;
