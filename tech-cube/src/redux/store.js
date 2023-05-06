
import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk from 'redux-thunk';
import {reducer as authReducer} from './Authentication/reducer';
import { reducer as adminReducer } from './Admin/reducer';


const rootReducer=combineReducers({
  authReducer,adminReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


