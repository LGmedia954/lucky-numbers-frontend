import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import users from './reducers/users'
import rounds from './reducers/rounds'

export const store = configureStore({
  reducer: {
    users: users,
    rounds: rounds
  }
}, composeWithDevTools(applyMiddleware(thunk)));

// Redux-Thunk Middleware allows us to slightly alter the behavior of our actions, 
// allowing us to add in asynchronous requests.



// import { configureStore } from '@reduxjs/toolkit'
// import { applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import rootReducer from './reducers/rootReducer';

// const store = configureStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk)))
  
// export default store



// import { configureStore } from '@reduxjs/toolkit'
// import { applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import users from './reducers/users'
// import rounds from './reducers/rounds'

// export const store = configureStore({
//   reducer: {
//     users: users,
//     rounds: rounds
//   }
// }, applyMiddleware(thunk));