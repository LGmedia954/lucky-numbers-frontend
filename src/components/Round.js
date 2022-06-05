import React, { Component } from "react";

export class Round extends Component {
  
  render() {
    const { round } = this.props;
    return (
      <div className="viewable">
        <h2>
          {round.title} &nbsp;&nbsp;
          {round.pick_one} &bull;&nbsp;&nbsp;
          {round.pick_two} &bull;&nbsp;&nbsp;
          {round.pick_three} &bull;&nbsp;&nbsp;
          {round.pick_four} &bull;&nbsp;&nbsp;
          {round.pick_five} &bull;&nbsp;&nbsp;
          {round.pick_six}
        </h2>
      </div>
    );
  }
}

export default Round;



// handleOnClick() {
//   this.props.deleteUserRound(this.props.round.id);
// }
// <button className="tiny ui inverted yellow button" onClick={() => this.handleOnClick()}> X </button>



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
//         <button className="tiny ui inverted yellow button">Delete</button>
//       </div>      
//     );
//   };
  
// export default Round;