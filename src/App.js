import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";

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
function App() {
  return (
    <div>
      <switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
        <Route exact path="/shop/jackets" component={JacketsPage} />
        <Route exact path="/shop/sneakers" component={SneakersPage} />
        <Route exact path="/shop/womens" component={WomensPage} />
        <Route path="/shop/mens" component={MensPage} />
      </switch>
    </div>
  );
}
export default App;
