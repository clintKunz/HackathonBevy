import actionTypes from '../actions/actionTypes';
const { login, register, getMyLoans } = actionTypes;

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
    case (getMyLoans.success):
      const { loans } = action.response;
      return {
        ...state,
        profile: {
          ...state.profile,
          loans: loans.length ? loans : [],
        }
      }
    default:
      return state
  }
}

export default session;