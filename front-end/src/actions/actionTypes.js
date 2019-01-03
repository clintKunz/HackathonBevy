import * as apiMethods from '../helpers/methods';

let actionTypes = {
  //syncronous actions go here as string properties,
};

Object.keys(apiMethods).forEach(name => {
  actionTypes[name] = {};
  actionTypes[name].success = name + 'Success';
  actionTypes[name].error = name + 'Error';
  actionTypes[name].progress = name + 'Progress'
});

console.log(actionTypes);

export default actionTypes;