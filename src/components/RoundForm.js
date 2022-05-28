import React, { Component } from "react";
import { connect } from "react-redux";
import { addRound } from "../actions/rounds";

export class RoundForm extends Component {
  state = {
    title: '',
    pick_one: '',
    pick_two: '',
    pick_three: '',
    pick_four: '',
    pick_five: '',
    pick_six: '',
    user_id: ''
  };

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
      pick_one: e.target.value,
      pick_two: e.target.value,
      pick_three: e.target.value,
      pick_four: e.target.value,
      pick_five: e.target.value,
      pick_six: e.target.value,
      user_id: e.target.value,
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
        <form className="ui tiny form" onSubmit={this.handleSubmit}>
          <div>
            <input className="ui small input"
              type="text" name="title" id="title" placeholder="Game Title"
              value={this.state.title}
              onChange={this.handleChange}/>
          </div><br />
          <div>
            <input className="ui small input"
              type="number" name="pick_one" id="pick_one" placeholder="Pick 1"
              value={this.state.pick_one}
              onChange={this.handleChange}/>
          </div><br />
          <div>
            <input className="ui small input"
              type="number" name="pick_two" id="pick_two" placeholder="Pick 2"
              value={this.state.pick_two}
              onChange={this.handleChange}/>
          </div><br />
          <div>
            <input className="ui small input"
              type="number" name="pick_three" id="pick_three" placeholder="Pick 3"
              value={this.state.pick_three}
              onChange={this.handleChange}/>
          </div><br />
          <div>
            <input className="ui small input"
              type="number" name="pick_four" id="pick_four" placeholder="Pick 4"
              value={this.state.pick_four}
              onChange={this.handleChange}/>
          </div><br />
          <div>
            <input className="ui small input"
              type="number" name="pick_five" id="pick_five" placeholder="Pick 5"
              value={this.state.pick_five}
              onChange={this.handleChange}/>
          </div><br />
          <div>
            <input className="ui small input"
              type="number" name="pick_six" id="pick_six" placeholder="Pick 6"
              value={this.state.pick_six}
              onChange={this.handleChange}/>
          </div><br />
            <input type="hidden" name="user_id" id="user_id" 
            value={this.state.user_id} onChange={this.handleChange}/>

          <input type="submit" className="ui inverted yellow button" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRound: (round) => {
      dispatch(addRound(round))
      
      let newRound = { ...round };
      newRound.ids = newRound.ids.split(',');
      const newArr = this.state.users.concat(newRound);
      
      this.setState({
        users: newArr,
      });
    }
  }
};

export default connect(null, mapDispatchToProps)(RoundForm);





// handleOnSubmit = event => {
//   event.preventDefault();
//   const round = {...this.state, id: uuid() };
//   this.props.addRound(round);
//   this.setState({
  //      title: "",
  //      pick_one: "",
  //      pick_two: "",
  //      pick_three: "",
  //      pick_four: "",
  //      pick_five: "",
  //      pick_six: "",
  //      user_id: "",
  //   });
  // }