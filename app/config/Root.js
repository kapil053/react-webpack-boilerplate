import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import Contact from '../components/Contact';
import Profile from '../components/Profile';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/productdetails/:id" component={Profile} exact />
        <Route path="/contact/:xyz/:abc" component={Contact} exact />
      </Switch>
    </Router>
  );
};

export default Root;

