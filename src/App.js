import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'
// import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'
import { connect } from 'react-redux'

import HatsPage from './pages/Itempages/hats.componet'
import JacketsPage from './pages/Itempages/jackets.componet'
import SneakersPage from './pages/Itempages/sneakers.componet'
import MensPage from './pages/Itempages/mens.componet'
import WomensPage from './pages/Itempages/womens.componet'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount () {
    setCurrentUser(this.props.currentUser)
  }

  componentWillUnmount () {
    //	this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/shop/hats' exact component={HatsPage} />
          <Route path='/shop/jackets' exact component={JacketsPage} />
          <Route path='/shop/sneakers' exact component={SneakersPage} />
          <Route path='/shop/womens' exact component={WomensPage} />
          <Route path='/shop/mens' exact component={MensPage} />
          <Route path='/shop' exact component={ShopPage} />
          <Route path='/contact' exact component={ContactPage} />
          <Route
            path='/signin'
            exact
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    )
  }
}

const ContactPage = () => (
  <div>
    <center>
      <h1>CONTACTS PAGE</h1>
    </center>
  </div>
)
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
