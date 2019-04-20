import React, { Component } from "react";
import styled from "styled-components";

const Styles = styled.div``;

export default class Slider extends Component {
  state = {
    value: 5000
  };

  handleOnChange = e => this.setState({ value: e.target.value });

  render() {
    return (
      <Styles>
        <input
          type="range"
          min={0}
          max={10000}
          value={this.state.value}
          className="slider"
          onChange={this.handleOnChange}
        />
        <div className="value">{this.state.value}</div>
      </Styles>
    );
  }
}
