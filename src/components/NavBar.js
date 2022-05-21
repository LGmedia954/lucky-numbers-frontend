import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/" className="ui inverted yellow button">Home</Link>

        <Link to="/users/create" className="ui inverted yellow button">New User</Link>

        <Link to="/users/index" className="ui inverted yellow button">Users</Link>

        <Link to="/rounds/new" className="ui inverted yellow button">New Round</Link>

        <Link to="/rounds/index" className="ui inverted yellow button">Rounds</Link>
      </div>
    );
  }
}

export default Navbar;