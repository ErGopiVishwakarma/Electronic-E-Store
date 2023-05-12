import {
  ADD_TO_CART,
  PLACE_ORDER_FAILURE,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  UPDATE_CART,
  ADD_PAYMENT_DETAILS,
  GET_CART_SERVER_REQUEST,
  GET_CART_SERVER_SUCCESS,
  GET_CART_SERVER_FAILD,
} from './actionType';

const initialState = {
  isLoading: false,
  isError: false,

  cart: [],
  order: [],
  paymentDetails: {},
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CART_SERVER_REQUEST:
      return { ...state, isLoading: true };
    case GET_CART_SERVER_SUCCESS:
      return { ...state, isLoading: false, cart: payload };

    case GET_CART_SERVER_FAILD:
      return { ...state, isLoading: false, isError: true };
    case ADD_TO_CART:
      return { ...state, cart: payload };
    case UPDATE_CART:
      return { ...state, cart: payload };

    case ADD_PAYMENT_DETAILS:
      return { ...state, paymentDetails: payload };

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
