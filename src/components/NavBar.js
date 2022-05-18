import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="ui raised very padded segment">
      <nav className="ui left floated header">
        <Link exact to="/" className="ui button">Home</Link>

        <Link exact to="/rounds/new" className="ui button">New Round</Link>

        <Link exact to="/rounds" className="ui button">Rounds</Link>
      </nav>
    </div>
  );
}

export default NavBar;