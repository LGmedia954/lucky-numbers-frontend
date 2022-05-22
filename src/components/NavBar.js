import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function NavBar() {
  return (
    <div className="nav">
      <Link to="/" className="ui inverted yellow button">Home</Link>

      <Link to="/users/new" className="ui inverted yellow button">New User</Link>

      <Link to="/users" className="ui inverted yellow button">Users</Link>

      <Link to="/rounds/new" className="ui inverted yellow button">New Round</Link>

      <Link to="/rounds" className="ui inverted yellow button">Rounds</Link>
    </div>
  );
}

export default NavBar;