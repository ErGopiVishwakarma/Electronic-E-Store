import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';

import { reducer as cartReducer } from './CartReducer/reducer';
import thunk from 'redux-thunk';
import { reducer as authReducer } from './Authentication/reducer';
import { reducer as adminReducer } from './Admin/reducer';
import { reducer as productReducer } from './Product/reducer';
import {reducer as checkoutReducer} from './CheckoutReducer/reducer';



const rootReducer=combineReducers({
  checkoutReducer,
  productReducer,
  authReducer,
  cartReducer,
  adminReducer
})



export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
