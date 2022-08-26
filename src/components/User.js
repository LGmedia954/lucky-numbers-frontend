import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {
  
  render() {
    return (
      <div className="viewable">
        <h2>Good Luck {this.props.user.username}!</h2>
        <p className="cash">&#128181;</p>
      </div>      
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    user: state.users.users.filter(user => user.id === parseInt(localStorage.getItem('id'))).at(-1)
  }
}

const mapDispatchToProps = dispatch => ({ showUser: user => dispatch({ type: "SHOW_USER", user }) })

export default connect(mapStateToProps, mapDispatchToProps)(User)

