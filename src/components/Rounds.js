import React, { Component } from 'react';
import { connect } from 'react-redux';

class Rounds extends Component {

  render() {

    let rounds = this.props.rounds.map((round, index) => <li key={index}>{round.title}</li>);
  
    return (
      <div className="viewable">
      <h2>ROUNDS</h2>
        <ul>
          {rounds}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { rounds: state.rounds }
}

export default connect(mapStateToProps)(Rounds);