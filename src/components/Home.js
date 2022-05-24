import React, { Component } from 'react';
import "../index.css";

export class Home extends Component {
  render() {
    return (
      <div className="viewable">
        <h1>LUCKY NUMBERS</h1><br />
        <h3>1. Enter the name of your lottery.</h3>
        <h3>2. Pick up to 6 numbers.</h3>
        <h3>3. Save your round.</h3>
        <h3>4. Call me if you win.</h3><br />
        <p className="loot">&#128176;</p>
      </div>
    );
  }
}

export default Home;