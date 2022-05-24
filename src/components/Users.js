import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {

  let users = this.state.users.map(user => <li key={user.id}>{user.username}</li>);

    return (
      <div className="viewable">
      <h2>USERS</h2>
        <ul>
          {users}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Users);



// let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);
// let users = this.props.users.map(user => <li key={user.id}>{user.username}</li>);