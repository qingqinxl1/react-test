import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import {
  Switch,
  Route
} from 'react-router';
import Home from './public/home';
import List from './public/list';
import Nav from './public/nav';
import Details from './public/details';

ReactDom.render(
  <Router>
    <div>
      <Nav />
      <hr />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/list" component={List}/>
        <Route path="/details" component={Details}/>
      </Switch>
    </div>
  </Router>, document.getElementById('app'));
