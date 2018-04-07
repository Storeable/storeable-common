'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('javascript-utils/lib/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OnOffLabel = function OnOffLabel(_ref) {
  var on = _ref.on,
      onText = _ref.onText,
      offText = _ref.offText,
      _ref$onColor = _ref.onColor,
      onColor = _ref$onColor === undefined ? '#57d500' : _ref$onColor,
      _ref$offColor = _ref.offColor,
      offColor = _ref$offColor === undefined ? '#ff2e00' : _ref$offColor,
      _ref$hideOnOff = _ref.hideOnOff,
      hideOnOff = _ref$hideOnOff === undefined ? false : _ref$hideOnOff,
      _ref$emptyText = _ref.emptyText,
      emptyText = _ref$emptyText === undefined ? 'N/A' : _ref$emptyText;

  if ((0, _utils.isEmpty)(onText)) {
    if (hideOnOff) {
      return null;
    }

    return _react2.default.createElement(
      'div',
      null,
      emptyText
    );
  }

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'span',
      { style: {
          color: on ? onColor : offColor
        }
      },
      '\u25CF'
    ),
    ' ',
    on ? onText : offText
  );
};

OnOffLabel.propTypes = {
  on: _propTypes2.default.bool.isRequired,
  onText: _propTypes2.default.string,
  offText: _propTypes2.default.string,
  onColor: _propTypes2.default.string,
  offColor: _propTypes2.default.string,
  hideOnOff: _propTypes2.default.bool,
  emptyText: _propTypes2.default.string
};

exports.default = OnOffLabel;
module.exports = exports['default'];