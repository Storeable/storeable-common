"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetHtmlIdCounter = exports.generateHtmlId = exports.catchValidation = void 0;

var _reduxForm = require("redux-form");

var currentHtmlId = 0;
/**
 * Catch redux-form validation errors.
 * @param {Object} error
 * @returns {Promise}
 */

var catchValidation = function catchValidation(error) {
  if (error.message === 'Validation error.' && error.errors) {
    error.errors._error = error.message; // eslint-disable-line

    throw new _reduxForm.SubmissionError(error.errors);
  }

  throw new _reduxForm.SubmissionError({
    _error: error.message
  });
};
/**
 * Generates a unique html id.
 * @param {String} prefix
 * @returns {String}
 */


exports.catchValidation = catchValidation;

var generateHtmlId = function generateHtmlId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'yt';
  return "".concat(prefix, "-").concat(currentHtmlId++);
};
/**
 * Resets the html id counter,
 */


exports.generateHtmlId = generateHtmlId;

var resetHtmlIdCounter = function resetHtmlIdCounter() {
  currentHtmlId = 0;
};

exports.resetHtmlIdCounter = resetHtmlIdCounter;