const Validator = require("validator");

module.exports = data => {
  let errors = {};
  if (Validator.isEmpty(data.user)) {
    errors.user = "User Field must be filled out.";
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = "Description Field must be filled out.";
  }
  if (Validator.isEmpty(data.link)) {
    errors.link = "URL Field must be filled out.";
  }
  if (!Validator.isURL(data.link)) {
    errors.link = "The Link must be a valid URL.";
  }
  if (!data.link.includes("github.com")) {
    errors.link = "The Link must be a valid GitHub URL.";
  }
  if (Object.keys(errors).length > 0) {
    return errors;
  } else {
    return false;
  }
};
