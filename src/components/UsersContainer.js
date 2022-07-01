import React, { Component } from 'react'
import Users from './Users';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/users'

class UsersContainer extends Component {
  render() {
    return (
      <div className="viewable">
        <Users users={this.props.users}/>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users })
// Maps the redux store state to the props of the Users component 
// that are related to the data from the redux store. 
// MapsStateToProps takes the redux store state and returns the props that I need
// to parse through the presentation for this component, to render it with the current state.
// The above is shorthand without breaking out the props details.
// It returns the props that depend on the current state of the redux store. 
// In this case, we only want usernames.

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}
// Maps the dispatch method of the store to the callback props of Users component.
// It specifies the behavior. That is, which callback prop dispatches which action.
// The MapDispatchToProps function accepts the dispatch method from the store as the only argument 
// and returns the props that should be passed to the users component and that depends on the dispatch method.

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
// by using the { connect } function provided by react-redux library, 
// we pass MapsStateToProps as the first argument and MapDispatchTheProps as the second. 
// For the connect method to work, we have to pass the component that I wanted to wrap and pass the props to.





// import React from 'react'
// import Users from './Users';

// const UsersContainer = () => {
//   return (
//     <div className="viewable">
//       <Users />
//     </div>
//   )
// }

// export default UsersContainer;


// const mapStateToProps = ({ users }) => ({ users })
// const mapDispatchToProps = dispatch => ({ addUser: user => dispatch({ type: "ADD_USER", user }) })



// const mapStateToProps = (state) => {
//   return { id: state.user.id }
// }

// const mapDispatchToProps = (dispatch) => {
//   return { actions: bindActionCreators(actions, dispatch) }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)



// from https://react-redux.js.org/api/connect
// const mapStateToProps = (state, ownProps) => ({
//   user: state.users[ownProps.id],
// })



// from https://react-redux.js.org/using-react-redux/connect-mapstate
// const mapStateToProps = (state, ownProps) => {
//   const { userSearch } = state
   // ownProps would look like { "id" : 123 }
//   const { id } = ownProps
//   const user = getUserById(state, id)
   // component receives additionally:
//   return { user, userSearch }
// };



// Dan Abramov thread
// const mapStateToProps = (state, ownProps) => {
//   const id = ownProps.params.id;
//   return { id };
// };



// function mapStateToProps(state, ownProps) {
//   if (state.users.users.length > 0) {
//     return {
//       id: state.user.id,
//       email: state.user.email,
//       username: state.user.username
//     }
//   } else {
//     return {
//       user_id: ownProps.match.params.id,
//     }
//   }
// }



// from CodeGrepper
// const mapStateToProps = (state, ownProps) => {
//   return {
//     user: state.users[ownProps.id]
//   };
// };



// https://stackoverflow.com/questions/41198842/
// what-is-the-use-of-the-ownprops-arg-in-mapstatetoprops-and-mapdispatchtoprops
// const mapStateToProps = (state, props) =>
  // Get user data from the store for this user ID.
//   fetchUserDetails(state, props.id)