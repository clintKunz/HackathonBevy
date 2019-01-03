import actionTypes from '../actions/actionTypes';
const { login } = actionTypes;

const defaultState = {
  inProgress: false,
  isLoggedIn: false,
};

const session = (state = defaultState, action) => {
  switch (action.type) {
    case (login.success): //'loginProgress'
      return {
        ...state,
        profile: action.response,
      }
    default:
      return state
  }
}

export default session;