import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {
  
  render() {
    // console.log(this.props)
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



// const mapStateToProps = ({ user }) => ({ user })

// const mapDispatchToProps = (dispatch) => {
//   return { actions: bindActionCreators(actions, dispatch) }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(User)

// const mapDispatchToProps = dispatch => ({ fetchUserDetails: user => dispatch({ type: "FETCH_USER_DETAILS", user }) })