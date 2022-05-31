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

export const addRound = (round, navigate) => {
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
        console.log(round)
        dispatch({ type: "ADD_ROUND", round });
      });
  };
};

export const findUserRound = (userId, id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/rounds/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((round) => {
        console.log(round)
        dispatch({ type: "FIND_USER_ROUND", round });
      });
  };
};



// export const addRound = (round) => {
//   return {
//     type: 'ADD_ROUND',
//     round
//   };
// };



// export const addRound = (user, round) => {
//   return (dispatch) => {
//     fetch("http://localhost:3000/api/v1/rounds", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         user: user, 
//         round: round
//       })
//     })
//       .then((resp) => resp.json())
//       .then((round) => {
//         console.log(round)
//         dispatch({ type: "ADD_ROUND", round });
//       });
//   };
// };