import React, { Component } from "react";

export class User extends Component {
  render() {
    const { username } = this.props;
    return (
      <div>
        <h3>{username}</h3>
      </div>
    );
  }
}

export default User;