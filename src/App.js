import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop/hats' />
      <Route path='/shop/jackets' />
      <Route path='/shop/sneakers' />
      <Route path='/shop/womens' />
      <Route path='/shop/mens' />
    </Switch>
  );
}

export default App;