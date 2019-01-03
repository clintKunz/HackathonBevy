import actionTypes from '../actions/actionTypes';
const { login, register } = actionTypes;

const defaultState = {
  inProgress: false,
  isLoggedIn: false,
};

const session = (state = defaultState, action) => {
  switch (action.type) {
    case (login.progress): //'loginProgress'
      return {
        ...state,
        isLoggedIn: false,
        inProgress: true,
      }
    case (login.success): //'loginSuccess'
      return {
        ...state,
        isLoggedIn: true,
        inProgress: false,
      }
    case (login.error):
      return {
        ...state,
        isLoggedIn: false,
        inProgress: false,
        errorMessage: action.errorMessage,
      }
    default:
      return state
  }
}

export default session;