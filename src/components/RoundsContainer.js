import React, { Component } from 'react'
import Rounds from './Rounds';
import { connect } from 'react-redux'

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

const mapDispatchToProps = dispatch => ({ addRound: round => dispatch({ type: "ADD_ROUND", round }) })

export default connect(mapStateToProps, mapDispatchToProps)(RoundsContainer)





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