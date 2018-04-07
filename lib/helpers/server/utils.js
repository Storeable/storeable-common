'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encryptString = exports.buildSequelizeValidationError = undefined;

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a validation error object used by Sequelize.
 * @param {String} attr Attribute name
 * @param {String} message Error message
 * @returns {Object}
 */
var buildSequelizeValidationError = exports.buildSequelizeValidationError = function buildSequelizeValidationError(attr, message) {
  return {
    errors: [{
      path: attr,
      message: message
    }]
  };
};

/**
 * Encrypts the specified value.
 * @param {String} value
 * @returns {String}
 */
var encryptString = exports.encryptString = function encryptString(value) {
  return _crypto2.default.createHash('sha1').update(value).digest('base64');
};