import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, showUser } from '../actions/users';

export class UserForm extends Component {

  state = {
    email: '',
    username: ''
  }

  handleOnNameChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  handleOnEmailChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addUser(this.state);
    console.log(this.state)
    // clear form
    this.setState({
      email: '',
      username: ''
    })
  }

  render() {
    return(
      <div className="viewable">
      <h2>SIGN IN</h2>
      <form id="user-form" className="ui small form" onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input className="ui small input"
            type="text" name="email" id="email" placeholder="Email"
            value={this.state.email}
            onChange={this.handleOnNameChange}
             />
        </p>
        <p>
          <input className="ui small input"
            type="text" name="username" id="username" placeholder="Username"
            value={this.state.username}
            onChange={this.handleOnEmailChange}
            />      
        </p>
        <input type="submit" className="ui inverted yellow button" />
      </form>
        <div id="scribe-user"></div>
      </div>
    );
  }
};

// Object Shorthand Form​
const mapDispatchToProps = {
  addUser,
  showUser,
}

export default connect(null, mapDispatchToProps)(UserForm);

