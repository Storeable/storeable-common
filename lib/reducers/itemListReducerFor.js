"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = exports.initialState = {
  isFetching: false,
  fetchingError: false,
  itemsLoaded: false,
  items: false
};

/**
 * Reusable factory reducer to set async fetched data in a state.
 *
 * @param {Object} actionTypes
 * @returns {Function}
 */
var itemListReducerFor = function itemListReducerFor(_ref) {
  var FETCH_BEGIN = _ref.FETCH_BEGIN,
      FETCH_SUCCESS = _ref.FETCH_SUCCESS,
      FETCH_FAIL = _ref.FETCH_FAIL;
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
      case FETCH_BEGIN:
        return _extends({}, state, {
          isFetching: true
        });
      case FETCH_SUCCESS:
        return _extends({}, state, {
          isFetching: false,
          itemsLoaded: true,
          items: action.response,
          fetchingError: initialState.fetchingError
        });
      case FETCH_FAIL:
        return _extends({}, state, {
          isFetching: false,
          fetchingError: action.error
        });
      default:
        return state;
    }
  };
};

exports.default = itemListReducerFor;