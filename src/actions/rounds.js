export const getRounds = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    fetch("http://localhost:3000/api/v1/rounds", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((rounds) => dispatch({ type: "SET_ROUNDS", rounds }));
  };
};

export const addRound = (round, history) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/rounds", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ round }),
    })
      .then((resp) => resp.json())
      .then((round) => {
        dispatch({ type: "ADD_ROUND", round });
        history.push("/rounds");
      });
  };
};



// export const addRound = (round) => {
//   return {
//     type: 'ADD_ROUND',
//     round
//   };
// };