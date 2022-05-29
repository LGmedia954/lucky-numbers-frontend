import React, { Component } from "react";

export class Round extends Component {
  render() {
    const { title, pick_one, pick_two, pick_three, pick_four, pick_five, pick_six } = this.props;
    return (
      <div className="viewable">
        <h2>Your Lucky Picks!</h2>
        <h3>
          {title} &nbsp;&nbsp;
          {pick_one} &bull;&nbsp;&nbsp;
          {pick_two} &bull;&nbsp;&nbsp;
          {pick_three} &bull;&nbsp;&nbsp;
          {pick_four} &bull;&nbsp;&nbsp;
          {pick_five} &bull;&nbsp;&nbsp;
          {pick_six}
        </h3>
      </div>
    );
  }
}

export default Round;