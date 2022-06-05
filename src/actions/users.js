export const getUsers = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    fetch("http://localhost:3000/api/v1/users", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((users) => {
        console.log(users)
        dispatch({ type: "SET_USERS", users })
      });
  };
};

export const addUser = (user) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    })
      .then((resp) => resp.json())
      .then((user) => {
        console.log(user)
        dispatch({ type: "ADD_USER", user });
      });
  };
};

export const findUser = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ user: id }),
    })
      .then((resp) => resp.json())
      .then((user) => {
        console.log(user)
        dispatch({ type: "FIND_USER", user });
      });
  };
};





// export const addUser = (user) => {
//   return {
//     type: 'ADD_USER',
//     user
//   };
// };



// try {
//   findUser();
// } catch (error) {
//   console.error(error);
// }