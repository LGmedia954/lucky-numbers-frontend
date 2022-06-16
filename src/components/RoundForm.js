import React from 'react';
import { connect } from "react-redux";
import { addRound, showUserRound } from "../actions/rounds";
class RoundForm extends React.Component {
  
  state = {
    title: '',
    pick_one: '',
    pick_two: '',
    pick_three: '',
    pick_four: '',
    pick_five: '',
    pick_six: '',
    user_id:JSON.parse(localStorage.getItem('id'))
  }

  handleTitleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleNumOneChange = event => {
    this.setState({
      pick_one: event.target.value,
    });
  };

  handleNumTwoChange = event => {
    this.setState({
      pick_two: event.target.value,
    });
  };

  handleNumThreeChange = event => {
    this.setState({
      pick_three: event.target.value,
    });
  };

  handleNumFourChange = event => {
    this.setState({
      pick_four: event.target.value,
    });
  };

  handleNumFiveChange = event => {
    this.setState({
      pick_five: event.target.value,
    });
  };

  handleNumSixChange = event => {
    this.setState({
      pick_six: event.target.value,
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRound(this.state, this.state.user_id)
    console.log(this.state)
    // clear form
    this.setState({
      title: '',
      pick_one: '',
      pick_two: '',
      pick_three: '',
      pick_four: '',
      pick_five: '',
      pick_six: ''
    })
  }

  render() {
    return (
      <div>
        <h2>Save Your Round!</h2>
        <form id="round-form" className="ui tiny form" onSubmit={this.handleOnSubmit}>
          <div>
            <input className="ui small input"
              type="text" name="title" id="title" placeholder="Game Title"
              value={this.state.title}
              onChange={this.handleTitleChange}/>
          </div><br />
          <div>
            <input className="ui small input"
              type="text" name="pick_one" id="pick_one" placeholder="Pick 1"
              value={this.state.pick_one}
              onChange={this.handleNumOneChange}/>
          </div><br />
          <div>
            <input className="ui small input"
              type="text" name="pick_two" id="pick_two" placeholder="Pick 2"
              value={this.state.pick_two}
              onChange={this.handleNumTwoChange}/>
          </div><br />
          <div>
            <input className="ui small input"
              type="text" name="pick_three" id="pick_three" placeholder="Pick 3"
              value={this.state.pick_three}
              onChange={this.handleNumThreeChange}/>
          </div><br />
          <div>
            <input className="ui small input"
              type="text" name="pick_four" id="pick_four" placeholder="Pick 4"
              value={this.state.pick_four}
              onChange={this.handleNumFourChange}/>
          </div><br />
          <div>
            <input className="ui small input"
              type="text" name="pick_five" id="pick_five" placeholder="Pick 5"
              value={this.state.pick_five}
              onChange={this.handleNumFiveChange}/>
          </div><br />
          <div>
            <input className="ui small input"
              type="text" name="pick_six" id="pick_six" placeholder="Pick 6"
              value={this.state.pick_six}
              onChange={this.handleNumSixChange}/>
          </div><br />
          <input type="submit" className="ui inverted yellow button" />
        </form>
      </div>
    );
  }
}

// Object Shorthand Form​
// mapDispatchToProps may be an object where each field is an action creator.
const mapDispatchToProps = {
  addRound,
  showUserRound
}

export default connect(null, mapDispatchToProps)(RoundForm);



// Dan Abramov thread
// connect(mapStateToProps, mapEmptyToProps)(connect(mapStateToProps, mapDispatchToProps)(MyComponent))
// connect({ fetchUserDetails }, {})(connect(null, { addRound })(RoundForm))



// Alternative forms:
// export default connect(null, { addRound })(RoundForm);



// const mapDispatchToProps = dispatch => {
//   return {
//     addRound: formData => dispatch({ type: 'ADD_ROUND', payload: formData })
//   }
// }

// export default connect(null, mapDispatchToProps)(RoundForm);



  // componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
  //   if (this.props.user.id !== prevProps.user.id) {
  //     this.fetchData(this.props.user.id);
  //   }
  // }
  // You may call setState() immediately in componentDidUpdate() 
  // but note that it must be wrapped in a condition like above, 
  // or you’ll cause an infinite loop.



// export class RoundForm extends Component {

// const state = store.getState();

// class RoundForm extends React.Component { 

// constructor(props) {
//   super(props);
//   this.state = {
//     user:JSON.parse(localStorage.getItem('id'))
//   };
//   this.handleOnSubmit = this.handleOnSubmit.bind(this);
// }