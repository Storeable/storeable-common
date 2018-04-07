import { SubmissionError } from 'redux-form';

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
