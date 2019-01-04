import actionTypes from '../actions/actionTypes';
const {searchLoans, createLoan, updateLoan} = actionTypes;

const defaultState = {
  solicits: [],
};

const solicit = (state=defaultState, action) => {
  switch(action.type) {
    case (searchLoans.success):
      return {
        ...state,
        solicits: action.response.data.loans,
      }
    default:
      return state
  }
};

export default solicit;