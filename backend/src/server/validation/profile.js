const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};
  /*
  // Just to debug the type of the data
  for (var key in data) {
    console.log(key, typeof data[key]);
  }
  */
  data.profile_name = !isEmpty(data.profile_name) ? data.profile_name : '';
  data.full_name = !isEmpty(data.full_name) ? data.full_name : '';
  data.bio = !isEmpty(data.bio) ? data.bio : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.address = !isEmpty(data.address) ? data.address : '';
  data.map_address = !isEmpty(data.map_address) ? data.map_address : '';
  data.resume_link = !isEmpty(data.resume_link) ? data.resume_link : '';
  data.residence = !isEmpty(data.residence) ? data.residence : '';
  data.skillsAt = !isEmpty(data.skillsAt) ? data.skillsAt : ''; // .join() to make the array -> string
  data.phone = !isEmpty(data.phone) ? data.phone : '';
  // profile_name
  if (!Validator.isLength(data.profile_name, { min: 4, max: 100 })) {
    errors.profile_name = 'profile name needs to between 4 and 100 characters';
  }

  if (Validator.isEmpty(data.profile_name)) {
    errors.profile_name = 'profile name is required';
  }
  // full_name
  if (!Validator.isLength(data.full_name, { min: 4, max: 100 })) {
    errors.full_name = 'full name needs to between 4 and 100 characters';
  }

  if (Validator.isEmpty(data.full_name)) {
    errors.full_name = 'full name is required';
  }
  // bio
  if (!Validator.isLength(data.bio, { min: 10, max: 500 })) {
    errors.bio = 'bio needs to between 10 and 500 characters';
  }

  if (Validator.isEmpty(data.bio)) {
    errors.bio = 'bio is required';
  }

  // email
  if (!Validator.isLength(data.email, { min: 10, max: 100 })) {
    errors.email = 'email needs to between 10 and 100 characters';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'email is required';
  }

  // profile img
  if (Validator.isEmpty(data.img)) {
    errors.img = 'profile image is required';
  }

  // address
  if (!Validator.isLength(data.address, { min: 4, max: 200 })) {
    errors.address = 'address needs to between 4 and 200 characters';
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = 'address is required';
  }

  // map_address
  if (!Validator.isLength(data.map_address, { min: 4, max: 100 })) {
    errors.map_address = 'map address needs to between 4 and 100 characters';
  }

  if (Validator.isEmpty(data.map_address)) {
    errors.map_address = 'map address is required';
  }
  // resume_link
  if (Validator.isEmpty(data.resume_link)) {
    errors.resume_link = 'resume link is required';
  }

  // phone
  if (Validator.isEmpty(data.phone)) {
    errors.phone = 'phone is required';
  }

  // skillsAt
  if (Validator.isEmpty(data.skillsAt)) {
    errors.skillsAt = 'skillsAt is required';
  }

  // residence
  if (!Validator.isLength(data.residence, { min: 2, max: 30 })) {
    errors.residence = 'residence needs to between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.residence)) {
    errors.residence = 'residence is required';
  }
  // age
  if (!data.age) {
    errors.age = 'age field is required';
  }

  if (data.age) {
    if (data.age <= 10) {
      errors.age = 'age have to be bigger than 10';
    }
    if (data.age > 110) {
      errors.age = '(Man Is Mortal) so age have to be lower than 110';
    }
  }

  // Social Media

  if (!isEmpty(data.github)) {
    if (!Validator.isURL(data.github)) {
      errors.github = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = 'Not a valid URL';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
