import "./App.scss";
import React from "react";
import { Content } from "carbon-components-react";
import CarbonHeader from "./components/CarbonHeader";
import { Route, Switch } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  return (
    <div className="App">
      <CarbonHeader />
      <Content>
        <Switch>
          <Route exact path="/" component={ShoppingCart} />
        </Switch>
      </Content>
    </div>
  );
}

export default App;
