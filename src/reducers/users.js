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
        users: action.users,
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.user]
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