import React from 'react';
import { connect } from "react-redux";
import { addRound } from "../actions/rounds";
import { v4 as uuidv4 } from 'uuid';

// export class RoundForm extends Component {
class RoundForm extends React.Component { 
  constructor(props) {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem('id')) || {
    // checking state for the unique id
      id: uuidv4()
    };
    console.log(this.state());
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  
  state = {
    title: '',
    pick_one: '',
    pick_two: '',
    pick_three: '',
    pick_four: '',
    pick_five: '',
    pick_six: ''
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
    this.props.addRound(this.state)
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h2>Save Your Round!</h2>
        <form className="ui tiny form" onSubmit={this.handleOnSubmit}>
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

export default connect(null, { addRound })(RoundForm);





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

  

  // const mapDispatchToProps = dispatch => {
  //   return {
  //     addRound: (round) => {
  //       dispatch(addRound(round))
        
  //       let newRound = { ...round };
  //       newRound.ids = newRound.ids.split(',');
  //       const newArr = this.state.users.concat(newRound);
        
  //       this.setState({
  //         users: newArr,
  //       });
  //     }
  //   }
  // };
  
  // export default connect(null, mapDispatchToProps)(RoundForm);



// Alternative forms:
// export default connect(null, { addRound })(RoundForm);



// const mapDispatchToProps = dispatch => {
//   return {
//     addRound: formData => dispatch({ type: 'ADD_ROUND', payload: formData })
//   }
// }

// export default connect(null, mapDispatchToProps)(UserForm);



// handleUserIdHidden = event => {
//   this.setState({
//     user_id: event.target.value,
//   });
// };

// <div>
//   <input type="hidden" name="user_id" id="userId" 
//   value={this.state.user_id} onChange={this.handleUserIdHidden}/>
// </div>



  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.props.userID !== prevProps.userID) {
  //     this.fetchData(this.props.userID);
  //   }
  // }
  // You may call setState() immediately in componentDidUpdate() 
  // but note that it must be wrapped in a condition like above, 
  // or you’ll cause an infinite loop.



      // const state = store.getState();