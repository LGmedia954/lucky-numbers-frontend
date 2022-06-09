import React from 'react';

const Rounds = props => {
  
  const rounds = props.rounds.rounds.map((round, id) => {
    return <li key={id}>
    {round.title} &nbsp;&nbsp;
    {round.pick_one}, &nbsp;&nbsp;
    {round.pick_two}, &nbsp;&nbsp;
    {round.pick_three}, &nbsp;&nbsp;
    {round.pick_four}, &nbsp;&nbsp;
    {round.pick_five}, &nbsp;&nbsp;
    {round.pick_six}</li>;
  });

  return (
    <div className="viewable">
      <h2 id="roundList">{rounds}</h2>
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