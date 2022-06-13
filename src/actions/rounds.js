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

export const addRound = (round, userId) => {
  return (dispatch) => {
    // /api/v1/users/:user_id/rounds(.:format)
    fetch(`http://localhost:3000/api/v1/users/${userId}/rounds`, {
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
        console.log(round)
        dispatch(getRounds());
      });
  };
};

export const findUserRound = (userId, roundId) => {
  return (dispatch) => {
    // /api/v1/users/:user_id/rounds/:id(.:format)
    fetch(`http://localhost:3000/api/v1/users/${userId}/rounds/${roundId}`, {
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



// export const deleteUserRound = (id, round) => {
//   return (dispatch) => {
//     fetch(`http://localhost:3000/api/v1/users/${userId}/rounds/${roundId}`, {
//       method: "DELETE",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     })
//       .then((resp) => resp.json())
//       .then((round) => {
//         dispatch({ type: "DELETE_USER_ROUND", round });
//       });
//   };
// };



      // body: JSON.stringify({
      //   user: id,
      //   round: round
      // })