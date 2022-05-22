import React, { Component } from "react";

export class Round extends Component {
  render() {
    const { title, pick_one, pick_two, pick_three, pick_four, pick_five, pick_six } = this.props;
    return (
      <div className="viewable">
        <h2>Lucky Picks!</h2>
        <table className="ui celled table">
          <tr>
            <td data-label>{title}</td>
            <td data-label>{pick_one}</td>
            <td data-label>{pick_two}</td>
            <td data-label>{pick_three}</td>
            <td data-label>{pick_four}</td>
            <td data-label>{pick_five}</td>
            <td data-label>{pick_six}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Round;