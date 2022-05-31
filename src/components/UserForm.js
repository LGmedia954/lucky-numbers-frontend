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
  };

  handleOnEmailChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addUser(this.state);
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
      <form className="ui small form" onSubmit={(event) => this.handleOnSubmit(event)}>
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
      </div>
    );
  }
};

export default connect(null, { addUser })(UserForm);





// handleOnSubmit = event => {
//   event.preventDefault();
//   const user = {...this.state, id: uuidv4() };
//   this.props.addUser(user);
//   console.log(uuidv4());
//   // clear form
//   this.setState({
//     email: '',
//     username: ''
//   });
// }



// const mapDispatchToProps = dispatch => {
//   return {
//     addUser: (user) => {
//       dispatch(addUser(user))
      
      // let newUser = { ...user };
      // newUser.ids = newUser.ids.split(',');
      // const newArr = this.state.users.concat(newUser);
      
      // this.setState({
      //   users: newArr,
      // });
//     }
//   }
// };

// export default connect(null, mapDispatchToProps)(UserForm);



// Alternative form:
// export default connect(null, { addUser })(UserForm);



// const mapDispatchToProps = dispatch => {
//   return {
//     addUser: formData => dispatch({ type: 'ADD_USER', payload: formData })
//   }
// }

// export default connect(null, mapDispatchToProps)(UserForm);