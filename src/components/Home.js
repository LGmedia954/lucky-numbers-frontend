import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div className='ui raised very padded text container segment' style={{marginTop: '80px'}}>
        <h2 className='ui header'>Lucky Numbers</h2>
          <ol>
            <li>Enter the name of your lottery.</li>
            <li>Pick up to 6 numbers.</li>
            <li>Save your round.</li>
            <li>Call me if you win. LOL<br /><span style='font-size:50px;'>&#128176;</span></li>
          </ol>
          <Link to="/users/new" className="">Users</Link>
      </div>
    );
  }
};

export default Home;