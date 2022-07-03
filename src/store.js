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
// allowing us to add in asynchronous requests. THUNK means a piece of code that does some delayed work.
// Thunks are the standard approach for writing async logic in Redux apps, and are used for data fetching. 
// Rather than execute some logic now, we can write a function body or code used to perform the work later.
// A thunk function accepts 2 arguments: the Redux store dispatch method, and the Redux store getState method. 
// A thunk function is not directly called by application code. Instead, it is passed to store.dispatch()

// Thunks allow us to write additional Redux-related logic separate from a UI layer. 
// This logic can include side effects, such as async requests or generating random values, 
// as well as logic that requires dispatching multiple actions or access to the Redux store state.





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