// import { v4 as uuidv4 } from 'uuid';

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
      // const round = { round: action.round, id: uuidv4() };
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



// state.lastIndexOf(round => round.id === action.id);
// return {
//   ...state,
//   rounds: [...state.rounds, action.round, uuidv4()]
// };

// console.log(rounds.slice(-1));

// state.lastIndexOf((round) => {return action.round.id === round.id})

// const lastRound = rounds[rounds.length - 1]

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
//     rounds: [...state.rounds, action.round]
//   };



// case "ADD_ROUND":
//   state.filter(
//     user => user.id === action.round.user_id
//   );
//   return {
//     ...state,
//     rounds: [...state.rounds, action.round]
//   };



// case "FIND_USER_ROUND":
//   state.findIndex(round => round.id === action.id);
//   return {
//     ...state,
//     rounds: [...state.rounds, action.round]
//   };



// case "ADD_ROUND":
//   return {
//     ...state,
//     rounds: [...state.rounds, 
//       {
//         user: state.userId,
//         round: action.round
//       },
//     ],
//   }



// case "FIND_USER_ROUND":
//   // state.lastIndexOf((round) => {return action.round.id === round.id})
//   idx = state.lastIndexOf(round => round.id === action.id);
//   return {
//     ...state,
//     rounds: [...state.rounds, action.round, uuidv4()]
//   };


// Got rid of user_id on round
// const round = { round: action.round, userId: action.round.userId, id: uuidv4() };

 // state.lastIndexOf(round => round.id === action.id);