import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USERS,
  GET_REPOS,
  INITIAL_LOAD,
  GET_USER
} from '../types';

// Way to export an anonymous function
export default (state, action) => {
  switch (action.type) {
    case INITIAL_LOAD:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      };
    default:
      return state;
  }
};
