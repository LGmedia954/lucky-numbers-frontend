import uuid from "uuid"; 

const initialState = {
  rounds: [],
  loading: true,
};

const rounds = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_ROUNDS":
      return {
        ...state,
        loading: false,
        rounds: action.rounds
      };
    case "ADD_ROUND":
      state.filter(
        user => user.id === action.round.user_id
      );
      return {
        ...state,
        rounds: [...state.rounds, action.round]
      };
    case "FIND_USER_ROUND":
      state.findIndex(round => round.id === action.id);
      return {
        ...state,
        rounds: [...state.rounds, action.round]
      };

    default:
      return state;
  }
};
    
export default rounds;



// export default function rounds(state = {
//   rounds: []
// }, action) {
//   switch (action.type) {

//     case 'ADD_ROUND':
//       return {
//         ...state,
//         rounds: [...state.rounds, action.round]
//       }

//     default:
//       return state;

//   }
// };



// case "ADD_ROUND":
//   return {
//     ...state,
//     rounds: [...state.rounds, action.round],
//   };


