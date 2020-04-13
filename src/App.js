import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign-in' component={SignInAndSignUpPage} />
          <Route path='/shop/hats' />
          <Route path='/shop/jackets' />
          <Route path='/shop/sneakers' />
          <Route path='/shop/womens' />
          <Route path='/shop/mens' />
        </Switch>
      </div >
    );
  }
}

export default App;
