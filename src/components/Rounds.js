import React from 'react';

const Rounds = props => {
  
  const rounds = props.rounds.rounds.map((round, id) => {
    return <li key={id}>
    {round.title} &nbsp;&nbsp;
    {round.pick_one}, &nbsp;&nbsp;
    {round.pick_two}, &nbsp;&nbsp;
    {round.pick_three}, &nbsp;&nbsp;
    {round.pick_four}, &nbsp;&nbsp;
    {round.pick_five}, &nbsp;&nbsp;
    {round.pick_six}</li>;
  });

  return (
    <div className="viewable">
      <h3 id="roundList">{rounds}</h3>
    </div>
  );
};
  
export default Rounds;

