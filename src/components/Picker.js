// import React from 'react';
// import { render } from 'react-dom';
import React, { Component } from "react";

// class Picker extends React.Component {
export class Picker extends Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { random: 0 };
  }

  handleClick() {
    const min = Math.ceil(1);
    const max = Math.floor(70);
    const rand = Math.floor(Math.random() * (max - min) + min);
    // this.setState({ random: this.state.random + rand });
    // the above line was giving me an added tally
    this.setState({ random: rand });
  }

  render() {
    return (
      <div>
      <h2>Lucky Number Generator</h2>
        <div id='pick'>
          <h1>{this.state.random}</h1>
        </div><br />
      <button className="ui inverted yellow button" onClick={this.handleClick.bind(this)}>Click</button>
        <br /><br />
      </div>
    );
  }
}

// render(<Picker />, document.getElementById('pick'));
export default Picker;

