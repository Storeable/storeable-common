"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _react2 = require("javascript-utils/lib/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var withAuthRequiredRoute = function withAuthRequiredRoute(WrappedComponent, createLoginUrl, isLoggedInSelector) {
  var WithAuthRequiredRoute = function WithAuthRequiredRoute(_ref) {
    var loggedIn = _ref.loggedIn,
        rest = _objectWithoutProperties(_ref, ["loggedIn"]);

    return _react.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
      render: function render(_ref2) {
        var staticContext = _ref2.staticContext;

        if (loggedIn) {
          return _react.default.createElement(WrappedComponent, rest);
        }

        if (staticContext) {
          staticContext.status = 302; // eslint-disable-line
        }

        return _react.default.createElement(_reactRouterDom.Redirect, {
          to: createLoginUrl()
        });
      }
    }));
  };

  WithAuthRequiredRoute.propTypes = {
    loggedIn: _propTypes.default.bool.isRequired
  };
  WithAuthRequiredRoute.displayName = "WithAuthRequiredRoute(".concat((0, _react2.getDisplayName)(WrappedComponent), ")");
  return (0, _reactRedux.connect)(function (state) {
    return {
      loggedIn: isLoggedInSelector(state)
    };
  }, null)(WithAuthRequiredRoute);
};

var _default = withAuthRequiredRoute;
exports.default = _default;
module.exports = exports.default;