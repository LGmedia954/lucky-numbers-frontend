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
// The fetch() method allows us to make an HTTP request to the backend. 
// Here, we are using the GET method to request data from our endpoint, which is a Rails API.
// We populate data with AJAX calls in the componentDidMount lifecycle method. 
// This is so we can use setState to update components when the data is retrieved.

// Asynchronous JavaScript And XML (AJAX) uses a combination of 
// the browser built-in XMLHttpRequest object (to request data from a web server) 
// and JavaScript and HTML DOM (to display or use the data).

// React mounts its basic components first. Remote data is then requested. 
// Since data is being requested after React has mounted its components, 
// componentDidMount works with our initial fetch requests (organized into actions folders) 
// to load users and also load rounds when we launch our application.

// When we dispatch an action, we want the Store to know about it.



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

