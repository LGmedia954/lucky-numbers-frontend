import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/users'

class User extends Component {
  
  render() {
    return (
      <div className="viewable">
        {/* <User users={this.props.username}/> */}
        <h2>Good Luck {this.props.username}!</h2>
        <p className="cash">&#128181;</p>
      </div>      
    );
  }
}

const mapStateToProps = ({ user }) => ({ user })

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)





// import React from 'react';

// export class User extends React.Component {
  
//   render() {
//     // const { username } = this.props;
//     return (
//       <div className="viewable">
//         <h2>Good Luck {this.props.username}!</h2>
//         <p className="cash">&#128181;</p>
//       </div>      
//     );
//   }
// }

// export default User;


   
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