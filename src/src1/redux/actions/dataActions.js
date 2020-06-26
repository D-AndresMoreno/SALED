import {
  SET_APOYOS,
  LOADING_DATA,
  LIKE_APOYO,
  UNLIKE_APOYO,
  DELETE_APOYO,
  SET_ERRORS,
  POST_APOYO,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_APOYO,
  STOP_LOADING_UI,
  SUBMIT_COMMENT
} from '../types';
import axios from 'axios';

// Get all apoyos
export const getApoyos = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get('/apoyos')
    .then((res) => {
      dispatch({
        type: SET_APOYOS,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_APOYOS,
        payload: []
      });
    });
};
export const getApoyo = (apoyoId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/apoyo/${apoyoId}`)
    .then((res) => {
      dispatch({
        type: SET_APOYO,
        payload: res.data
      });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch((err) => console.log(err));
};
// Post a apoyo
export const postApoyo = (newApoyo) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post('/apoyo', newApoyo)
    .then((res) => {
      dispatch({
        type: POST_APOYO,
        payload: res.data
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};
// Like a apoyo
export const likeApoyo = (apoyoId) => (dispatch) => {
  axios
    .get(`/apoyo/${apoyoId}/like`)
    .then((res) => {
      dispatch({
        type: LIKE_APOYO,
        payload: res.data
      });
    })
    .catch((err) => console.log(err));
};
// Unlike a apoyo
export const unlikeApoyo = (apoyoId) => (dispatch) => {
  axios
    .get(`/apoyo/${apoyoId}/unlike`)
    .then((res) => {
      dispatch({
        type: UNLIKE_APOYO,
        payload: res.data
      });
    })
    .catch((err) => console.log(err));
};
// Submit a comment
export const submitComment = (apoyoId, commentData) => (dispatch) => {
  axios
    .post(`/apoyo/${apoyoId}/comment`, commentData)
    .then((res) => {
      dispatch({
        type: SUBMIT_COMMENT,
        payload: res.data
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};
export const deleteApoyo = (apoyoId) => (dispatch) => {
  axios
    .delete(`/apoyo/${apoyoId}`)
    .then(() => {
      dispatch({ type: DELETE_APOYO, payload: apoyoId });
    })
    .catch((err) => console.log(err));
};

export const getUserData = (userHandle) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/user/${userHandle}`)
    .then((res) => {
      dispatch({
        type: SET_APOYOS,
        payload: res.data.apoyos
      });
    })
    .catch(() => {
      dispatch({
        type: SET_APOYOS,
        payload: null
      });
    });
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
