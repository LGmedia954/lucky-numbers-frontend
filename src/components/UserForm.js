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
      email: event.target.value
    });
  }

  handleOnEmailChange = event => {
    this.setState({
      username: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addUser(this.state);
  }

  render() {
    return(
      <div className="viewable">
      <h2>SIGN IN</h2>
      <form className="ui small form" onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input className="ui small input"
            type="text" name="email" id="email" placeholder="Email"
            onChange={(event) => this.handleOnNameChange(event)}
             />
        </p>
        <p>
          <input className="ui small input"
            type="text" name="username" id="username" placeholder="Username"
            onChange={(event) => this.handleOnEmailChange(event)}
            />      
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

// Alternative form:

// export default connect(null, { addUser })(UserForm);