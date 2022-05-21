import React from 'react'
import Picker from './Picker';
import RoundForm from './RoundForm';

const NewGameContainer = () => {
  return (
    <div className="container">
      <div>
        <Picker />
      </div>
        <br />
      <div>
        <RoundForm />
      </div>
    </div>
  )
}

export default NewGameContainer;