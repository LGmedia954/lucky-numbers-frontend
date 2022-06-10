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
        rounds: action.rounds,
      };
    case "ADD_ROUND":
      return {
        ...state,
        rounds: [...state.rounds, action.round],
      };
    case "FIND_USER_ROUND":
      return {
        ...state,
        rounds: [...state.rounds.slice(-1)],
      };

    default:
      return state;
  }
};
    
export default rounds;



// case "ADD_ROUND":
//   return {
//     ...state,
//     rounds: [...state.rounds,
//     {
//       user: state.user,
//       round: action.round
//     },
//   ],
// }



// return {
//   ...state,
//   rounds: [...state.rounds, action.round]
// };

// state.lastIndexOf((round) => {return action.round.id === round.id})
 // state.lastIndexOf(round => round.id === action.id);

// const lastRound = rounds[rounds.length - 1]
// console.log(rounds.slice(-1));



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



// case "FIND_USER_ROUND":
//   state.findIndex(round => round.id === action.id);

// case "FIND_USER_ROUND":
//   // state.lastIndexOf((round) => {return action.round.id === round.id})
//   idx = state.lastIndexOf(round => round.id === action.id);
//   return {
//     ...state,
//     rounds: [...state.rounds, action.round]
//   };



// case "DELETE_USER_ROUND":
//   return {
//     rounds: [
//       ...state.rounds.filter(round => round !== action.round)
//     ]
//   };

// case "DELETE_USER_ROUND":
//   const rounds = state.rounds.filter(round => round.id !== action.id);
//   return {...state, rounds }



// Stack Overflow
// export const create = (id) => {
//   return async (dispatch, getState) => {
//        const currentState= getState().example;
//       console.log(currentState) 
//   };
// };

// export const grabId = (id) => {
//   return async (dispatch, getState) => {
//     const id= getState().user.id;
//     console.log(id)};
// };