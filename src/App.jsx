import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import Slider from "./components/Slider";
const Styles = styled.div``;

class App extends Component {
  render() {
    return (
      <Styles>
        <div className="App">
          <Slider initialValue={5000} />
        </div>
      </Styles>
    );
  }
}

export default App;
