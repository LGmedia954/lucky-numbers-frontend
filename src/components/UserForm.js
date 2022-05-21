import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/users';


export class UserForm extends Component {

  state = {
    email: '',
    username: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addUser(this.state);
  }

  render() {
    return(
      <div className="viewable">
      <form className="ui small form" onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input className="ui small input"
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="email"
            placeholder="Email" />
        </p>
        <p>
          <input className="ui small input"
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="username"
            placeholder="Username" />
        </p>
        <input type="submit" className="ui inverted yellow button" />
      </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addUser: (newUser) => {
      dispatch(addUser(newUser))
    }
  };
};

export default connect(null, mapDispatchToProps)(UserForm);