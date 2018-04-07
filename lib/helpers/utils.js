'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.catchValidation = undefined;

var _reduxForm = require('redux-form');

/**
 * Catch redux-form validation errors.
 * @param {Object} error
 * @returns {Promise}
 */
var catchValidation = exports.catchValidation = function catchValidation(error) {
  if (error.message === 'Validation error.' && error.errors) {
    error.errors._error = error.message; // eslint-disable-line
    throw new _reduxForm.SubmissionError(error.errors);
  }

  throw new _reduxForm.SubmissionError({ _error: error.message });
};