import React, { Component } from "react";

export class Round extends Component {
  render() {
    const { title, pick_one, pick_two, pick_three, pick_four, pick_five, pick_six } = this.props;
    return (
      <div className="viewable">
        <h2>Lucky Picks!</h2>
        <table className="">
          <tr>
            <td>{title}</td>
            <td>{pick_one}</td>
            <td>{pick_two}</td>
            <td>{pick_three}</td>
            <td>{pick_four}</td>
            <td>{pick_five}</td>
            <td>{pick_six}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Round;