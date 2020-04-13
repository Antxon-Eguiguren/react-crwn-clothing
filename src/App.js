import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path='/shop/hats' />
        <Route path='/shop/jackets' />
        <Route path='/shop/sneakers' />
        <Route path='/shop/womens' />
        <Route path='/shop/mens' />
      </Switch>
    </div>
  );
}

export default App;