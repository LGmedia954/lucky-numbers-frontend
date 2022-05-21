export const getUsers = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    fetch("http://localhost:3000/users")
      .then((resp) => resp.json())
      .then((users) => dispatch({ type: "SET_USERS", users }));
  };
};

export const addUser = (user, history) => {
  return (dispatch) => {
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    })
      .then((resp) => resp.json())
      .then((user) => {
        dispatch({ type: "ADD_USER", user });
        history.push("/users");
      });
  };
};



// export const addUser = (user) => {
//   return {
//     type: 'ADD_USER',
//     user
//   };
// };