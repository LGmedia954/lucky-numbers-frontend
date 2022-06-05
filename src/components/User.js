import React, { Component } from "react";
export class User extends Component {
  
  render() {
    const { user } = this.props;
    return (
      <div className="viewable">
        <h2>Good Luck {user.username}!</h2>
        <p className="loot">&#128176;</p>
      </div>      
    );
  }
}

export default User;


   
// import React from "react";

// const User = props => {
//     return (
//       <div className="viewable">
//         <li>
//           <h2>Good Luck {props.username}!</h2>
//         </li>
//         <p className="loot">&#128176;</p>
//       </div>      
//     );
//   };
  
// export default User;