import * as apiMethods from '../helpers/methods';

let actionTypes = {
  //syncronous actions go here as string properties,
  logout: 'logout',
};

Object.keys(apiMethods).forEach(name => {
  actionTypes[name] = {};
  actionTypes[name].success = name + 'Success';
  actionTypes[name].error = name + 'Error';
  actionTypes[name].progress = name + 'Progress'
});

export default actionTypes;