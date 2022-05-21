import React from 'react'
import Picker from './Picker';
import RoundForm from './RoundForm';

const NewGameContainer = () => {
  return (
    <div className="viewable">
      <div>
        <Picker />
      </div>
        <br /><br />
      <div>
        <RoundForm />
      </div>
    </div>
  )
}

export default NewGameContainer;