import "./App.scss";
import React from "react";
import { Button, Content } from "carbon-components-react";
import TutorialHeader from "./components/TutorialHeader";

function App() {
  return (
    <div className="App">
      <TutorialHeader />
      <Content>
        <Button>Button</Button>
      </Content>
    </div>
  );
}

export default App;
