import React, { Component } from 'react';
import "../index.css";
import Loot from './Loot';

export class Home extends Component {
  render() {
    return (
      <div className="viewable">
        <h1>LUCKY NUMBERS</h1><br />
        <h3>1. Please sign in to get started.</h3>
        <h3>2. Enter the name of your lottery.</h3>
        <h3>3. Pick up to 6 numbers.</h3>
        <h3>4. Save your round.</h3>
        <h3>5. See your results.</h3>
        <>
        <Loot />
        </>
      </div>
    );
  }
}

export default Home;