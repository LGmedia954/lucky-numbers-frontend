import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li><Link exact to="/" className="ui button">Home</Link></li>

          <li><Link exact to="/users/new" className="ui button">New User</Link></li>

          <li><Link exact to="/users" className="ui button">Users</Link></li>

          <li><Link exact to="/rounds/new" className="ui button">New Round</Link></li>

          <li><Link exact to="/rounds" className="ui button">Rounds</Link></li>
          </ul>
      </div>
    );
  }
}

export default Navbar;