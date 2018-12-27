"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _url = require("javascript-utils/lib/url");

var _react2 = require("javascript-utils/lib/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var withRequiredUrlParamsRoute = function withRequiredUrlParamsRoute(WrappedComponent, ErrorComponent, requiredUrlParams) {
  var WithRequiredUrlParamsRoute = function WithRequiredUrlParamsRoute(_ref) {
    var props = _extends({}, _ref);

    return _react.default.createElement(_reactRouterDom.Route, _extends({}, props, {
      render: function render(_ref2) {
        var location = _ref2.location,
            staticContext = _ref2.staticContext;
        var hasError = false;

        if (Array.isArray(requiredUrlParams) && requiredUrlParams.length > 0 && location.search) {
          var query = (0, _url.getAllUrlParams)(location.search);
          requiredUrlParams.forEach(function (requiredUrlParam) {
            if (!Object.prototype.hasOwnProperty.call(query, requiredUrlParam)) {
              hasError = true;
            }
          });
        } else {
          hasError = true;
        }

        if (hasError) {
          if (staticContext) {
            staticContext.status = 400; // eslint-disable-line
          }

          return _react.default.createElement(ErrorComponent, _extends({}, props, {
            status: 400
          }));
        }

        return _react.default.createElement(WrappedComponent, props);
      }
    }));
  };

  WithRequiredUrlParamsRoute.displayName = "WithRequiredUrlParamsRoute(".concat((0, _react2.getDisplayName)(WrappedComponent), ")");
  return WithRequiredUrlParamsRoute;
};

var _default = withRequiredUrlParamsRoute;
exports.default = _default;
module.exports = exports.default;