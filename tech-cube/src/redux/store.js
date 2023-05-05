import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer as productReducer } from './Product/reducer';
const rootReducer = combineReducers({
  productReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
