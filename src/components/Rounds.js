import React from 'react';

const Rounds = props => {
  
  const rounds = props.rounds.rounds.map((round, index) => {
    return <li key={index}>{round.title}
    {round.pick_one}{round.pick_two}{round.pick_three}{round.pick_four}{round.pick_five}{round.pick_six}</li>;
   });

  return (
    <div className="viewable">
      <div>
        <h2>{rounds}</h2>
      </div>
    </div>
  );
};
  
export default Rounds;





// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// class Rounds extends Component {

//   render() {

//     let rounds = this.props.rounds.map((round, index) => <li key={index}>{round.title}</li>);
  
//     return (
//       <div className="viewable">
//       <h2>ROUNDS</h2>
//         <ul>
//           {rounds}
//         </ul>
//       </div>
//     );
//   }
// };

// const mapStateToProps = state => {
//   return { rounds: state.rounds }
// }

// export default connect(mapStateToProps)(Rounds);