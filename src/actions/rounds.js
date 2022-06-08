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
  id = JSON.parse(localStorage.getItem('id'))
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
        console.log(round)
        dispatch({ type: "ADD_ROUND", round });
      });
  };
};

export const findUserRound = (id, round) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${id}/rounds/${round}`, {
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
//     fetch(`http://localhost:3000/api/v1/users/${id}/rounds/${round}`, {
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





// export const addRound = (round) => {
//   return {
//     type: 'ADD_ROUND',
//     round
//   };
// };



      // body: JSON.stringify({
      //   user: id,
      //   round: round
      // })