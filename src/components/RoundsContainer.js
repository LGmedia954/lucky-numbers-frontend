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
// Maps the redux store state to the props of the Rounds component 
// that are related to the data from the redux store. 

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}
// Maps the dispatch method of the store to the callback props of Round component.
// It specifies the behavior. That is, which callback prop dispatches which action.

export default connect(mapStateToProps, mapDispatchToProps)(RoundsContainer)
// by using the { connect } function provided by react-redux library, 
// we pass MapsStateToProps as the first argument and MapDispatchTheProps as the second. 
// For the connect method to work, we have to pass the component that I wanted to wrap and pass the props to.





// import React from 'react'
// import Rounds from './Rounds';

// const RoundsContainer = () => {
//   return (
//     <div className="viewable">
//       <Rounds />
//     </div>
//   )
// }

// export default RoundsContainer;



// const mapDispatchToProps = dispatch => ({ addRound: round => dispatch({ type: "ADD_ROUND", round }) })