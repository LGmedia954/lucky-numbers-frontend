const initialState = {
  users: [],
  loading: true,
};

// Use the initialState as a default value
const users = (state = initialState, action) => {
// The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_USERS": 
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case "ADD_USER":
      // We need to return a new state object
      return {
        // that has all the existing state data
        ...state,
        // but has a new array for the `users` field
        users: [
        // with all of the old users, and the new user object
          ...state.users, action.user],
      };
    // If this reducer doesn't recognize the action type, or doesn't
    // care about this specific action, return the existing state unchanged
    default:
      return state;
  }
};

export default users;



// REACT/REDUX flow...
// A Component dispatches an action.
// An Action hits the reducer.
// The Reducer will update the state depending on the action that was dispatched.
// The Reducer will pass the updated state to the store.
// The Component will receive new state.



// export default function users(state = {
//   users: []
// }, action) {
//   switch (action.type) {

//     case 'ADD_USER':
//       return {
//         ...state,
//         users: [...state.users, action.user]
//       }

//     default:
//       return state;

//   }
// };



// case "ADD_USER":
//   return {
//     ...state,
//     users: [...state.users, action.user],
//   };



// state.users.lastIndexOf(user => user.id && action.id)



    // case "SHOW_USER":
    //   return {
    //     ...state,
    //     users: [...state.users.slice(-1)]
    //   };
    // // frontend difficulty recognizing the user
    // case "FETCH_USER_DETAILS":
    //   return {
    //     id: action.user.id,
    //     email: action.user.email,
    //     username: action.user.username,
    //   };