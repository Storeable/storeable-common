'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _react3 = require('javascript-utils/lib/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var withAuthRequiredRoute = function withAuthRequiredRoute(WrappedComponent, createLoginUrl, isLoggedInSelector) {
  var WithAuthRequiredRoute = function WithAuthRequiredRoute(_ref) {
    var loggedIn = _ref.loggedIn,
        rest = _objectWithoutProperties(_ref, ['loggedIn']);

    return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
      render: function render(_ref2) {
        var staticContext = _ref2.staticContext;

        if (loggedIn) {
          return _react2.default.createElement(WrappedComponent, rest);
        }

        if (staticContext) {
          staticContext.status = 302; // eslint-disable-line
        }

        return _react2.default.createElement(_reactRouterDom.Redirect, { to: createLoginUrl() });
      }
    }));
  };

  WithAuthRequiredRoute.propTypes = {
    loggedIn: _propTypes2.default.bool.isRequired
  };

  WithAuthRequiredRoute.displayName = 'WithAuthRequiredRoute(' + (0, _react3.getDisplayName)(WrappedComponent) + ')';

  return (0, _reactRedux.connect)(function (state) {
    return {
      loggedIn: isLoggedInSelector(state)
    };
  }, null)(WithAuthRequiredRoute);
};

exports.default = withAuthRequiredRoute;
module.exports = exports['default'];