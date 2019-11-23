import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUPPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop/hats" exact component={HatsPage} />
          <Route path="/shop/jackets" exact component={JacketsPage} />
          <Route path="/shop/sneakers" exact component={SneakersPage} />
          <Route path="/shop/womens" exact component={WomensPage} />
          <Route path="/shop/mens" exact component={MensPage} />
          <Route path="/shop" exact component={ShopPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/signin" component={SignInAndSignUPPage} />
        </switch>
      </div >
    );
  }
}

const HatsPage = () => (
  <div>
    <center>
      <h1>HATS PAGE</h1>
    </center>
  </div>
);
const JacketsPage = () => (
  <div>
    <center>
      <h1>JACKETS PAGE</h1>
    </center>
  </div>
);
const SneakersPage = () => (
  <div>
    <center>
      <h1>SNEAKERS PAGE</h1>
    </center>
  </div>
);
const MensPage = () => (
  <div>
    <center>
      <h1>MENS PAGE</h1>
    </center>
  </div>
);
const WomensPage = () => (
  <div>
    <center>
      <h1>WOMENS PAGE</h1>
    </center>
  </div>
);
const ContactPage = () => (
  <div>
    <center>
      <h1>CONTACTS PAGE</h1>
    </center>
  </div>
);
export default App;
