import React, { Component } from 'react'
import Users from './Users';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/users'

export class UsersContainer extends Component {
  render() {
    return (
      <div className="viewable">
        <Users users={this.props.users}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  if (state.users.users.length > 0) {
    return {
      userId: state.users.users.id
    }
  }

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

connect(mapStateToProps, mapDispatchToProps)(UsersContainer)





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

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)