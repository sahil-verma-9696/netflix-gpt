import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import moviesReducer from './moviesSlice'
import appStatesReducer from './appStatesSlice'
const store = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        appStates : appStatesReducer
    }
})

export default store;