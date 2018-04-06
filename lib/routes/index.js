'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRequiredUrlParamsRoute = exports.withAuthRequiredRoute = undefined;

var _withAuthRequiredRoute2 = require('./withAuthRequiredRoute');

var _withAuthRequiredRoute3 = _interopRequireDefault(_withAuthRequiredRoute2);

var _withRequiredUrlParamsRoute2 = require('./withRequiredUrlParamsRoute');

var _withRequiredUrlParamsRoute3 = _interopRequireDefault(_withRequiredUrlParamsRoute2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.withAuthRequiredRoute = _withAuthRequiredRoute3.default;
exports.withRequiredUrlParamsRoute = _withRequiredUrlParamsRoute3.default;