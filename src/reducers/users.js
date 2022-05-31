import { v4 as uuidv4 } from 'uuid';

const initialState = {
  users: [],
  loading: true,
};

const users = (state = initialState, action) => {
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
      const taguser = { user: action.user, id: uuidv4() };
      return {
        ...state,
        users: [...state.users, taguser]
      };
    case "FIND_USER":
      state.lastIndexOf(user => user.id === action.id)
      return {
        ...state,
        users: [...state.users, action.user, uuidv4()]
      };

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


