"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("javascript-utils/lib/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OnOffLabel = function OnOffLabel(_ref) {
  var on = _ref.on,
      onText = _ref.onText,
      offText = _ref.offText,
      onColor = _ref.onColor,
      offColor = _ref.offColor,
      hideOnOff = _ref.hideOnOff,
      emptyText = _ref.emptyText;

  if ((0, _utils.isEmpty)(onText)) {
    if (hideOnOff) {
      return null;
    }

    return _react.default.createElement("div", null, emptyText);
  }

  return _react.default.createElement("div", null, _react.default.createElement("span", {
    style: {
      color: on ? onColor : offColor
    }
  }, "\u25CF"), ' ', on ? onText : offText);
};

OnOffLabel.propTypes = {
  on: _propTypes.default.bool.isRequired,
  onText: _propTypes.default.string,
  offText: _propTypes.default.string,
  onColor: _propTypes.default.string,
  offColor: _propTypes.default.string,
  hideOnOff: _propTypes.default.bool,
  emptyText: _propTypes.default.string
};
OnOffLabel.defaultProps = {
  onText: '',
  offText: '',
  onColor: '#57d500',
  offColor: '#ff2e00',
  hideOnOff: false,
  emptyText: 'N/A'
};
var _default = OnOffLabel;
exports.default = _default;
module.exports = exports.default;