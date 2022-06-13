// This detected ids
// if(JSON.stringify(users).indexOf("id") > -1 ) {
//   console.log("Id Found");
// }
// else{
//   console.log("Id not Found");
// }

// export const getUsers = () => {
//   return (dispatch) => {
//     dispatch({ type: "LOADING" });
//     fetch("http://localhost:3000/api/v1/users", {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     })
//       .then((resp) => resp.json())
//       .then((users) => {
//         console.log(users)
//         dispatch({ type: "SET_USERS", users })
//       });
//   };
// };

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
        var userHash = [] 
        var keys = [];
        var values = [];
        
        for (var i = 0; i < userHash.length; i++) {
            for (var key in userHash[i]) {
                if (userHash[i].hasOwnProperty(key)) {
                    keys.push(key);
                    values.push(userHash[i][key]);
                }
            }
        }
        
        console.log(keys);
        console.log(values);
        console.log(users)
        dispatch({ type: "SET_USERS", users })
      });
  };
};

// export const addUser = (user) => {
//   return (dispatch) => {
//     fetch("http://localhost:3000/api/v1/users", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ user }),
//     })
//       .then((resp) => resp.json())
//       .then((user) => {
//         localStorage.setItem('id', JSON.stringify(user));
//         dispatch({ type: "ADD_USER", user });
//         dispatch(getUsers());
//       });
//   };
// };

export const addUser = (user) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({user: {
        id: user.id,
        email: user.email,
        username: user.username
      }})
    }
      .then((resp) => resp.json())
      .then((user) => {
        localStorage.setItem('id', JSON.stringify(user));
        dispatch({ type: "ADD_USER", user });
        dispatch(getUsers());
      })
    )
  }
}

export const findUser = (id) => {
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
        console.log(user)
        dispatch({ type: "FIND_USER", user });
      });
  };
};

// trying to grab user details
export const fetchUserDetails = (props) => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    return fetch(`http://localhost:3000/api/users/${props.userId}`)
      .then(resp => resp.json())
      .then(user => dispatch({
        type: 'FETCH_USER_DETAILS',
        user: user
      }))
  }
}

// for above
// componentDidMount() {
//   this.props.actions.fetchUserDetails(this.props)
// }
//   render() {
  // const userDetails = this.props.userDetails