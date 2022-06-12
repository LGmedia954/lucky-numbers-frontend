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


      // .then((resp) => resp.json())
      // .then((users) => {
      //   users.forEach(user => {
      //     const userMarkup = `
      //     <div> data-id=${user.id}>
      //       <h3>${user.email}</h3>
      //       <h3>${user.username}</h3>
      //     </div><br><br>`;
      //     document.querySelector('#user-container').innerHTML += userMarkup
      //   })


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
        // user.data.at(user => {
        //   const userMarkup = `
        //   <div> data-id=${user.id}>
        //   <h3>${user.arributes.email}</h3>
        //   <h3>${user.arributes.username}</h3>
        //   </div><br><br>`;
        //   document.querySelector('#scribe-user').innerHTML += userMarkup
        // })
        localStorage.setItem('id', JSON.stringify(user));
        dispatch({ type: "ADD_USER", user });
        dispatch(getUsers());
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