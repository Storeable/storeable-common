'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetHtmlIdCounter = exports.generateHtmlId = exports.catchValidation = undefined;

var _reduxForm = require('redux-form');

var currentHtmlId = 0;

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

/**
 * Generates a unique html id.
 * @param {String} prefix
 * @returns {String}
 */
var generateHtmlId = exports.generateHtmlId = function generateHtmlId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'yt';
  return prefix + '-' + currentHtmlId++;
};

/**
 * Resets the html id counter,
 */
var resetHtmlIdCounter = exports.resetHtmlIdCounter = function resetHtmlIdCounter() {
  currentHtmlId = 0;
};