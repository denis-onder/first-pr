const Validator = require('validator');

module.exports = function validateInput(input) {
  let errors = {};
  if(Validator.isEmpty(input.user)) {
    errors.user = 'Username field is empty.'
  }
  if(!Validator.isURL(input.link)) {
    errors.link = 'Please provide a valid URL.'
  }
  if(!input.link.includes('github')) {
    errors.link = 'Please provide a valid GitHub URL.'
  }
  return errors;
};