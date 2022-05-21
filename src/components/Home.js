import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div className="viewable">
        <h1>Lucky Numbers</h1>
        <h3>
          <ol>
            <li>Enter the name of your lottery.</li>
            <li>Pick up to 6 numbers.</li>
            <li>Save your round.</li>
            <li>Call me if you win. LOL &#128176;</li>
          </ol>
          </h3>
          <Link to="/users/new" className="ui inverted yellow button">New User</Link>
          <Link to="/rounds/new" className="ui inverted yellow button">New Round</Link>
      </div>
    );
  }
}

export default Home;