import actionTypes from '../actions/actionTypes';
const { login, register } = actionTypes;

const defaultState = {
  profile: {}
};

const session = (state = defaultState, action) => {
  switch (action.type) {
    case (login.success || register.success): //'loginProgress'
      return {
        ...state,
        profile: action.response.user,
      }
    default:
      return state
  }
}

export default session;