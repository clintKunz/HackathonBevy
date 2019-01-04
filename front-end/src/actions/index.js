import * as apiMethods from '../helpers/methods';
import actionTypes from './actionTypes';

let actions = {
  //syncronous actions go here as string properties,
};

Object.keys(apiMethods).forEach(methodName => {
  actions[methodName] = (...args) => dispatch => {
    dispatch({ type: actionTypes[methodName].progress })
    apiMethods[methodName](...args)
      .then(response => dispatch({ type: actionTypes[methodName].success, response }))
      .catch(error => {
        let errorMessage;
        if (error.response) {
          if (error.response.data) {
            if (error.response.data.message) {
              errorMessage = error.response.data.message;
            } else {
              errorMessage = error.response.data;
            }
          } else {
            errorMessage = error.response;
          }
        } else {
          errorMessage = error;
        }
        return dispatch({ type: actionTypes[methodName].error, errorMessage });
      });
  }
});

actions.logout = dispatch => () => {
  dispatch({ type: actionTypes.logout });
}


  export default actions;
