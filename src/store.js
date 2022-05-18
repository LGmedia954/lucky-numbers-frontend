import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import users from './reducers/users'
import rounds from './reducers/rounds'

export const store = configureStore({
  reducer: {
    users: users,
    rounds: rounds
  }
}, applyMiddleware(thunk));