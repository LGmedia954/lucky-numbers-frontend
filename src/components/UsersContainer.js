import React, { Component } from 'react'
import Users from './Users';
import { connect } from 'react-redux'

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

const mapDispatchToProps = dispatch => ({ addUser: user => dispatch({ type: "ADD_USER", user }) })

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