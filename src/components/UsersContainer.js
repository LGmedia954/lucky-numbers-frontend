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

