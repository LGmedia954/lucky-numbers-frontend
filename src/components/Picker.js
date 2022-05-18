import React from 'react';

class Picker extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { random: 0 };
  }

  handleClick() {
    const min = Math.ceil(1);
    const max = Math.floor(70);
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    this.setState({ random: this.state.random + rand });
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h3 className="text-center">Lucky Number Generator</h3>
          <br /><br />
          <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Click</button>
          <div className="card" style={{marginTop:"10px"}}>
            <div className="card-block">
              The number is: {this.state.random}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Picker;