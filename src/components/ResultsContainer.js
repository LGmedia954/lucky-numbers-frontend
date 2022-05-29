import React from 'react'
import User from './User';
import Round from './Round';

const ResultsContainer = () => {
  return (
    <div className="viewable">
      <div>
        <Round />
      </div>
      <div>
        <User />
      </div>
    </div>
  )
}

export default ResultsContainer;