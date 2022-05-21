import React from 'react'
import Picker from './Picker';
import RoundForm from './RoundForm';
import Round from './Round';

const NewGameContainer = () => {
  return (
    <div className="game">
      <div>
        <Picker />

      </div>
        <br />
      <div>
        <RoundForm />
        <Round />
      </div>
    </div>
  )
}

export default NewGameContainer;