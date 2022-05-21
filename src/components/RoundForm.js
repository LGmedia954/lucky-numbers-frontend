import React, { Component } from "react";
import { connect } from "react-redux";
import { addRound } from "./actions/rounds"

export class RoundForm extends Component {
  state = {
    title: "",
    pick_one: "",
    pick_two: "",
    pick_three: "",
    pick_four: "",
    pick_five: "",
    pick_six: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.title]: e.target.value,
      [e.target.pick_one]: e.target.value,
      [e.target.pick_two]: e.target.value,
      [e.target.pick_three]: e.target.value,
      [e.target.pick_four]: e.target.value,
      [e.target.pick_five]: e.target.value,
      [e.target.pick_six]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addRound(this.state, this.props.history);
  };
  render() {
    return (
      <div>
        <h2>Save Your Round!</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Game Title</label>
            <input className="ui small input"
              type="text" name="title" id="title"
              value={this.state.title}
              onChange={this.handleChange}/>
          </div><br />
          <div>
            <label>Pick 1</label>
            <input className="ui small input"
              type="number" name="pick_one" id="pick_one"
              value={this.state.pick_one}
              onChange={this.handleChange}/>
          </div><br />
          <div>
            <label>Pick 2</label>
            <input className="ui small input"
              type="number" name="pick_two" id="pick_two"
              value={this.state.pick_two}
              onChange={this.handleChange}/>
          </div><br />
          <div>
            <label>Pick 3</label>
            <input className="ui small input"
              type="number" name="pick_three" id="pick_three"
              value={this.state.pick_three}
              onChange={this.handleChange}/>
          </div><br />
          <div>
            <label>Pick 4</label>
            <input className="ui small input"
              type="number" name="pick_four" id="pick_four"
              value={this.state.pick_four}
              onChange={this.handleChange}/>
          </div><br />
          <div>
            <label>Pick 5</label>
            <input className="ui small input"
              type="number" name="pick_five" id="pick_five"
              value={this.state.pick_five}
              onChange={this.handleChange}/>
          </div><br />
          <div>
            <label>Pick 6</label>
            <input className="ui small input"
              type="number" name="pick_six" id="pick_six"
              value={this.state.pick_six}
              onChange={this.handleChange}/>
          </div><br />
          <input type="hidden" id="user_id"></input>
          <input type="submit" className="ui inverted yellow button" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addRound })(RoundForm);