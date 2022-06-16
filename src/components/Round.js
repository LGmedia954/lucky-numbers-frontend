import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/users'

class Round extends Component {
  render() {
    return (
      <div className="viewable">
        <h2>
          {this.props.title} &nbsp;&nbsp;
          {this.props.pick_one} &bull;&nbsp;&nbsp;
          {this.props.pick_two} &bull;&nbsp;&nbsp;
          {this.props.pick_three} &bull;&nbsp;&nbsp;
          {this.props.pick_four} &bull;&nbsp;&nbsp;
          {this.props.pick_five} &bull;&nbsp;&nbsp;
          {this.props.pick_six}
        </h2>
      </div>
    );
  }
}

const mapStateToProps = ({ rounds }) => ({ rounds })

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Round)





// import React from "react";

// export class Round extends React.Component {
  
//   render() {
//     // const { title, pick_one, pick_two, pick_three, pick_four, pick_five, pick_six } = this.props;
//     return (
//       <div className="viewable">
//         <h2>
//           {this.props.title} &nbsp;&nbsp;
//           {this.props.pick_one} &bull;&nbsp;&nbsp;
//           {this.props.pick_two} &bull;&nbsp;&nbsp;
//           {this.props.pick_three} &bull;&nbsp;&nbsp;
//           {this.props.pick_four} &bull;&nbsp;&nbsp;
//           {this.props.pick_five} &bull;&nbsp;&nbsp;
//           {this.props.pick_six}
//         </h2>
//       </div>
//     );
//   }
// }

// export default Round;





// import React from "react";

// const Round = props => {
//     return (
//       <div className="viewable">
//         <li>
//            <h2>
//              {title} &nbsp;&nbsp;
//              {pick_one} &bull;&nbsp;&nbsp;
//              {pick_two} &bull;&nbsp;&nbsp;
//              {pick_three} &bull;&nbsp;&nbsp;
//              {pick_four} &bull;&nbsp;&nbsp;
//              {pick_five} &bull;&nbsp;&nbsp;
//              {pick_six}
//            </h2>
//         </li>
        
//       </div>      
//     );
//   };
  
// export default Round;



// handleOnClick() {
//   this.props.deleteUserRound(this.props.round.id);
// }
// <button className="tiny ui inverted yellow button" onClick={() => this.handleOnClick()}> X </button>

// <button className="tiny ui inverted yellow button">Delete</button>