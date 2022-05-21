import React, { Component } from "react";
import Round from './Round';

export class User extends Component {
  render() {
    const { username } = this.props;
    return (
      <div className="viewable">
        <h2>Good Luck {username}!</h2>
        <div>
          <Round />
        </div>
      </div>      
    );
  }
}

export default User;