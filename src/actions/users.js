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
        // we are dispatching an action
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
        // localStorage.setItem('id', JSON.stringify(user));
        // localStorage.setItem('id', JSON.stringify(user["data"]["id"]))
        localStorage.setItem('id', user["data"]["id"])
        // debugger
        dispatch({ type: "ADD_USER", user });
        console.log(user);
        dispatch(getUsers());
      });
  };
};

export const showUser = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: id }),
    })
      .then((resp) => resp.json())
      .then((user) => {
        // debugger
        dispatch({ type: "SHOW_USER", user });
      });
  };
};



// trying to grab user details
// export const fetchUserDetails = (props) => {
//   return (dispatch) => {
//     dispatch({ type: "LOADING" });
//     fetch(`http://localhost:3000/api/users/${props.user.id}`)
//       .then((resp) => resp.json())
//       .then((user) => {
//         // debugger
//         dispatch({ type: "FETCH_USER_DETAILS", user });
//       });
//   };
// };

