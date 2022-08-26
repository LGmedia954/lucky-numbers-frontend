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

