import React, { Component } from 'react'
import { connect } from 'react-redux'

class Round extends Component {

  render() {
    return (
      <div className="viewable">
        <h1>
          {this.props.round.title} <br />
          {this.props.round.pick_one} &bull;&nbsp;&nbsp;
          {this.props.round.pick_two} &bull;&nbsp;&nbsp;
          {this.props.round.pick_three} &bull;&nbsp;&nbsp;
          {this.props.round.pick_four} &bull;&nbsp;&nbsp;
          {this.props.round.pick_five} &bull;&nbsp;&nbsp;
          {this.props.round.pick_six}
        </h1>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    round: state.rounds.rounds.filter(round => round.user_id === parseInt(localStorage.getItem('id'))).at(-1)
  }
}

const mapDispatchToProps = dispatch => ({ showUserRound: round => dispatch({ type: "SHOW_USER_ROUND", round }) })

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

