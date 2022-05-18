import React, { Component } from 'react';

export class Instructions extends Component {
  render() {
    return (
      <div className='ui raised very padded text container segment' style={{marginTop: '80px'}}>
        <h2 className='ui header'>Instructions</h2>
          <ol>
            <li>Enter the name of your game.</li>
            <li>Pick up to 6 numbers.</li>
            <li>Save your round.</li>
          </ol>
      </div>
    );
  }
};

export default Instructions;