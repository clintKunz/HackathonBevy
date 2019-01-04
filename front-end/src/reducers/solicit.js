import actionTypes from '../actions/actionTypes';
const {searchLoans, createLoan, updateLoan} = actionTypes;

const defaultState = {
  searchResults: [],
};

const solicit = (state=defaultState, action) => {
  switch(action.type) {
    case (searchLoans.success):
      return {
        ...state,
        searchResults: action.response.loans,
      }
    default:
      return state
  }
};

export default solicit;