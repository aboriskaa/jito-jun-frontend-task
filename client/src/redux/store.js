import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import horsesReducer from './horses_reducer';

let store = configureStore({
    reducer: {
        horsesReducer,
    }
}, applyMiddleware(thunk)
)

export default store;