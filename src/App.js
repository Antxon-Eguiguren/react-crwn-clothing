import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';
import Header from './components/header/header.component';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

import './App.css';

const App = ({ setCurrentUser, currentUser }) => {

  const unsubscribeFromAuth = null;

  useEffect(() => {
    // ComponentDidMount
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        // User is Logged In, add user data to currentUser through action setCurrentUser
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        // Add null to the currentUser through action setCurrentUser (meaning that is Logged Out)
        setCurrentUser(userAuth);
      }
    });
    return () => {
      // ComponentWillUnmount
      unsubscribeFromAuth();
    }
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/sign-in' render={() => currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />} />
      </Switch>
    </div >
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
