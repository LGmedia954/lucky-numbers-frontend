import { v4 as uuidv4 } from 'uuid';

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
      const user = { user: action.user, id: uuidv4() };
      return {
        // that has all the existing state data
        ...state,
        // but has a new array for the `users` field
        users: [
        // with all of the old users, and the new user object
          ...state.users, user]
      };
    case "FIND_USER":
      return {
        ...state,
        users: [...state.users, action.user]
      };
    // If this reducer doesn't recognize the action type, or doesn't
    // care about this specific action, return the existing state unchanged
    default:
      return state;
  }
};

export default users;



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



// state.users.lastIndexOf(user => user.id === action.id)