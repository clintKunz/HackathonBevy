import actionTypes from '../actions/actionTypes';
const { login, register, logout } = actionTypes;

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
    case (register.progress): //'registerProgress'
      return {
        ...state,
        isLoggedIn: false,
        inProgress: true,
      }
    case (register.success): //'registerSuccess'
      return {
        ...state,
        isLoggedIn: true,
        inProgress: false,
      }
    case (register.error):
      return {
        ...state,
        isLoggedIn: false,
        inProgress: false,
        errorMessage: action.errorMessage,
      }
    case (actionTypes .logout):
      return {
        ...state,
        isLoggedIn: false,
      }
    default:
      return state
  }
}

export default session;