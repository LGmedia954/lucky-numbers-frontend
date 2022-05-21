import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div className="viewable">
        <h1 className="h1">Lucky Numbers</h1>
          <ol>
            <li>Enter the name of your lottery.</li>
            <li>Pick up to 6 numbers.</li>
            <li>Save your round.</li>
            <li>Call me if you win. LOL &#128176;</li>
          </ol>
          <Link to="/users/new" className="">New User</Link>
          <Link to="/rounds/new" className="">New Round</Link>
      </div>
    );
  }
};

export default Home;