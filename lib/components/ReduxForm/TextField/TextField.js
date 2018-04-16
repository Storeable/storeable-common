'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _FieldPropTypes = require('../FieldPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TextField = function TextField(_ref) {
  var input = _ref.input,
      label = _ref.label,
      initialValue = _ref.initialValue,
      required = _ref.required,
      width = _ref.width,
      inline = _ref.inline,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      rest = _objectWithoutProperties(_ref, ['input', 'label', 'initialValue', 'required', 'width', 'inline', 'meta']);

  return _react2.default.createElement(
    _semanticUiReact.Form.Field,
    {
      error: !!(touched && error),
      required: required,
      width: width,
      inline: inline
    },
    label && _react2.default.createElement(
      'label',
      null,
      label
    ),
    _react2.default.createElement(_semanticUiReact.Input, _extends({}, input, rest, {
      value: initialValue
    })),
    touched && error ? _react2.default.createElement(
      _semanticUiReact.Label,
      { basic: true, color: 'red', pointing: true },
      error
    ) : null
  );
};

TextField.propTypes = _extends({}, _FieldPropTypes.fieldProps);

exports.default = TextField;
module.exports = exports['default'];