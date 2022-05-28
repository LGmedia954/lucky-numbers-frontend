import React from 'react'
import User from './User';
import Round from './Round';

const ResultsContainer = () => {
  return (
    <div className="viewable">
      <div>
        <User />
      </div>
        <br /><br />
      <div>
        <Round />
      </div>
    </div>
  )
}

export default ResultsContainer;