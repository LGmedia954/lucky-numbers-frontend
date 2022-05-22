import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../index.css";

export class Home extends Component {
  render() {
    return (
      <div className="viewable">
        <h1>Lucky Numbers</h1>
        <h3>1. Enter the name of your lottery.</h3>
        <h3>2. Pick up to 6 numbers.</h3>
        <h3>3. Save your round.</h3>
        <h3>4. Call me if you win.</h3>
        <p className="loot">&#128176;</p>
        <Link to="/users/new" className="ui inverted yellow button">New User</Link>
        <Link to="/rounds/new" className="ui inverted yellow button">New Round</Link>
      </div>
    );
  }
}

export default Home;