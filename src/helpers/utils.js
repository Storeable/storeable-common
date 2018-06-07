import { SubmissionError } from 'redux-form';

let currentHtmlId = 0;

/**
 * Catch redux-form validation errors.
 * @param {Object} error
 * @returns {Promise}
 */
export const catchValidation = (error) => {
  if (error.message === 'Validation error.' && error.errors) {
    error.errors._error = error.message; // eslint-disable-line
    throw new SubmissionError(error.errors);
  }

  throw new SubmissionError({ _error: error.message });
};

/**
 * Generates a unique html id.
 * @param {String} prefix
 * @returns {String}
 */
export const generateHtmlId = (prefix = 'yt') => `${prefix}-${currentHtmlId++}`;

/**
 * Resets the html id counter,
 */
export const resetHtmlIdCounter = () => {
  currentHtmlId = 0;
};
