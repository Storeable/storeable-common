'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optionsFieldProps = exports.fieldProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inputProps = {
  checked: _propTypes2.default.bool,
  name: _propTypes2.default.string,
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onDrop: _propTypes2.default.func,
  onDragStart: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  value: _propTypes2.default.any
};

var fieldProps = exports.fieldProps = {
  input: _propTypes2.default.shape(inputProps),
  meta: _propTypes2.default.shape({
    error: _propTypes2.default.any,
    touched: _propTypes2.default.bool
  }),
  required: _propTypes2.default.bool,
  width: _propTypes2.default.string,
  label: _propTypes2.default.string,
  inline: _propTypes2.default.bool,
  defaultChecked: _propTypes2.default.bool
};

var optionsFieldProps = exports.optionsFieldProps = _extends({}, fieldProps, {
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    text: _propTypes2.default.string,
    value: _propTypes2.default.number
  }))
});