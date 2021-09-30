
import './App.css';
import React from 'react';

import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import ListJob from './pages/ListJob';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/list-job" exact component={ListJob} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
