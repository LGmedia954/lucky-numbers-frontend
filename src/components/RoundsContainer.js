import React, { Component } from 'react'
import Rounds from './Rounds';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/users'

class RoundsContainer extends Component {
  render() {
    return (
      <div className="viewable">
        <Rounds rounds={this.props.rounds}/>
      </div>
    )
  }
}

const mapStateToProps = ({ rounds }) => ({ rounds })

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundsContainer)

