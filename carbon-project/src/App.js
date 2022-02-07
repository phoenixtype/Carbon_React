import "./App.scss";
import React from "react";
import { Content } from "carbon-components-react";
import TutorialHeader from "./components/TutorialHeader";
import { Route, Switch } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  return (
    <div className="App">
      <TutorialHeader />
      <Content>
        <Switch>
          <Route exact path="/" component={ShoppingCart} />
        </Switch>
      </Content>
    </div>
  );
}

export default App;
