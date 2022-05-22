const initialState = {
  rounds: [],
  loading: true,
};

const roundsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_ROUNDS":
      return {
        ...state,
        rounds: action.rounds
      };
    case "ADD_ROUND":
      return {
        ...state,
        rounds: [...state.rounds, action.round],
      };

    default:
      return state;
  }
};
    
export default roundsReducer;



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
