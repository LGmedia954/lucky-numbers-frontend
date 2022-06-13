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

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)





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