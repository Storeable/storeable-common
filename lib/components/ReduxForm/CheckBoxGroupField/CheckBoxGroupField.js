'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = require('semantic-ui-react');

var _utils = require('javascript-utils/lib/utils');

var _FieldPropTypes = require('../FieldPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBoxGroupField = function (_Component) {
  _inherits(CheckBoxGroupField, _Component);

  function CheckBoxGroupField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CheckBoxGroupField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CheckBoxGroupField.__proto__ || Object.getPrototypeOf(CheckBoxGroupField)).call.apply(_ref, [this].concat(args))), _this), _this.getCurrentValues = function () {
      var value = _this.props.input.value;


      var previousValues = [];

      if (!(0, _utils.isEmpty)(value)) {
        previousValues = value;
      }

      return Array.isArray(previousValues) ? [].concat(_toConsumableArray(previousValues)) : [previousValues];
    }, _this.handleOnChange = function (event, _ref2) {
      var checked = _ref2.checked,
          value = _ref2.value;
      var onChange = _this.props.input.onChange;

      var values = _this.getCurrentValues();

      if (checked) {
        values.push(value);
      } else {
        values.splice(values.indexOf(value), 1);
      }

      onChange(values);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CheckBoxGroupField, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          label = _props.label,
          required = _props.required,
          _props$meta = _props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error,
          options = _props.options,
          grouped = _props.grouped;


      var values = this.getCurrentValues();

      return _react2.default.createElement(
        _semanticUiReact.Form.Group,
        { grouped: grouped },
        label && _react2.default.createElement(
          _semanticUiReact.Form.Field,
          {
            error: !!(touched && error),
            required: required
          },
          _react2.default.createElement(
            'label',
            null,
            label
          )
        ),
        options.map(function (option, i) {
          var optionLabel = option.text;
          var optionValue = option.value;
          var optionChecked = values.indexOf(optionValue) > -1;
          var key = 'key' + i;

          return _react2.default.createElement(
            _semanticUiReact.Form.Field,
            { key: key },
            _react2.default.createElement(_semanticUiReact.Checkbox, {
              label: optionLabel,
              checked: optionChecked,
              value: optionValue,
              onClick: _this2.handleOnChange
            })
          );
        }),
        touched && error && _react2.default.createElement(
          _semanticUiReact.Form.Field,
          { error: true },
          _react2.default.createElement(
            _semanticUiReact.Label,
            { basic: true, color: 'red', pointing: true },
            error
          )
        )
      );
    }
  }]);

  return CheckBoxGroupField;
}(_react.Component);

CheckBoxGroupField.propTypes = _extends({}, _FieldPropTypes.optionsFieldProps, {
  grouped: _propTypes2.default.bool
});
CheckBoxGroupField.defaultProps = {
  grouped: true
};
exports.default = CheckBoxGroupField;
module.exports = exports['default'];