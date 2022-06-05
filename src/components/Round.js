import React, { Component } from "react";

export class Round extends Component {
  render() {
    const { title, pick_one, pick_two, pick_three, pick_four, pick_five, pick_six } = this.props;
    return (
      <div className="viewable">
        <li>
          <h2>
          {title} &nbsp;&nbsp;
          {pick_one} &bull;&nbsp;&nbsp;
          {pick_two} &bull;&nbsp;&nbsp;
          {pick_three} &bull;&nbsp;&nbsp;
          {pick_four} &bull;&nbsp;&nbsp;
          {pick_five} &bull;&nbsp;&nbsp;
          {pick_six}
          </h2>
        </li>
      </div>
    );
  }
}

export default Round;



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