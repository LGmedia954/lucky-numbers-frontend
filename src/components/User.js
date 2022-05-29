import React, { Component } from "react";
export class User extends Component {
  render() {
    const { username } = this.props;
    return (
      <div className="viewable">
        <h2>Good Luck {username}!</h2>
        <p className="loot">&#128176;</p>
      </div>      
    );
  }
}

export default User;