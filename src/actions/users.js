export const getUsers = () => {
  console.log("users checkpoint")
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

export const addUser = (user, history) => {
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
        console.log("user added")
        dispatch({ type: "ADD_USER", user });
        history.push("/users");
      });
  };
};

export const findUser = (id) => {
  console.log("user search")
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    fetch(`http://localhost:3000/api/v1/users/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
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