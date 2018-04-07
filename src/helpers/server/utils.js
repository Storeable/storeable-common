import crypto from 'crypto';

/**
 * Returns a validation error object used by Sequelize.
 * @param {String} attr Attribute name
 * @param {String} message Error message
 * @returns {Object}
 */
export const buildSequelizeValidationError = (attr, message) => ({
  errors: [
    {
      path: attr,
      message
    }
  ]
});

/**
 * Encrypts the specified value.
 * @param {String} value
 * @returns {String}
 */
export const encryptString = value => crypto.createHash('sha1').update(value).digest('base64');

/**
 * Checks if a password matches the encrypted password.
 *
 * @param {String} encryptedPassword
 * @param {String} rawPassword
 */
export const isPasswordValid = (encryptedPassword, rawPassword) => encryptedPassword === encryptString(rawPassword);
