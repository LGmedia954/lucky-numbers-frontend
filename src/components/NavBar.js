import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function NavBar() {
  return (
    <div className="nav">
      <Link exact to="/" className="ui inverted yellow button">Home</Link>

      <Link exact to="/users/new" className="ui inverted yellow button">New User</Link>

      <Link exact to="/users/index" className="ui inverted yellow button">Users</Link>

      <Link exact to="/rounds/new" className="ui inverted yellow button">New Round</Link>

      <Link exact to="/rounds/index" className="ui inverted yellow button">Rounds</Link>
    </div>
  );
}

export default NavBar;