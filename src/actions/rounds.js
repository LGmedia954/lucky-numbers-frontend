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
      .then((rounds) => {
        console.log(rounds)
        dispatch({ type: "SET_ROUNDS", rounds })
      });
  };
};

export const addRound = (round, id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${id}/rounds`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ round }),
    })
      .then((resp) => resp.json())
      .then((round) => {
        localStorage.setItem('id', round["data"]["id"])
        dispatch({ type: "ADD_ROUND", round });
        console.log(round)
        dispatch(getRounds());
      });
  };
};

export const showUserRound = (id, roundId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${id}/rounds/${roundId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((round) => { 
        dispatch({ type: "SHOW_USER_ROUND", round });
      });
  };
};
