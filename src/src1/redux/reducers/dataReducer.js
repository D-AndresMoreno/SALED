import {
  SET_APOYOS,
  LIKE_APOYO,
  UNLIKE_APOYO,
  LOADING_DATA,
  DELETE_APOYO,
  POST_APOYO,
  SET_APOYO,
  SUBMIT_COMMENT
} from '../types';

const initialState = {
  apoyos: [],
  apoyo: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_APOYOS:
      return {
        ...state,
        apoyos: action.payload,
        loading: false
      };
    case SET_APOYO:
      return {
        ...state,
        apoyo: action.payload
      };
    case LIKE_APOYO:
    case UNLIKE_APOYO:
      let index = state.apoyos.findIndex(
        (apoyo) => apoyo.apoyoId === action.payload.apoyoId
      );
      state.apoyos[index] = action.payload;
      if (state.apoyo.apoyoId === action.payload.apoyoId) {
        state.apoyo = action.payload;
      }
      return {
        ...state
      };
    case DELETE_APOYO:
      index = state.apoyos.findIndex(
        (apoyo) => apoyo.apoyoId === action.payload
      );
      state.apoyos.splice(index, 1);
      return {
        ...state
      };
    case POST_APOYO:
      return {
        ...state,
        apoyos: [action.payload, ...state.apoyos]
      };
    case SUBMIT_COMMENT:
      return {
        ...state,
        apoyo: {
          ...state.apoyo,
          comments: [action.payload, ...state.apoyo.comments]
        }
      };
    default:
      return state;
  }
}
