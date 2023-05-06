import {
  ADD_TO_CART,
  PLACE_ORDER_FAILURE,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  UPDATE_CART,
} from './actionType';

const initialState = {
  isLoading: false,
  isError: false,

  cart: [],
  order: [],
  user_details: {},
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, cart: payload };
    case UPDATE_CART:
      return { ...state, cart: payload };

    case PLACE_ORDER_REQUEST:
      return { ...state, isLoading: true };
    case PLACE_ORDER_SUCCESS:
      return { ...state, isLoading: false, order: payload, cart: [] };
    case PLACE_ORDER_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
