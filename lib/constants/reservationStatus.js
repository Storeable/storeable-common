'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reservationStatuses;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PENDING = exports.PENDING = 1;
var ACCEPTED = exports.ACCEPTED = 2;
var DECLINED = exports.DECLINED = 3;

var reservationStatuses = exports.reservationStatuses = (_reservationStatuses = {}, _defineProperty(_reservationStatuses, PENDING, 'Pending'), _defineProperty(_reservationStatuses, ACCEPTED, 'Accepted'), _defineProperty(_reservationStatuses, DECLINED, 'Declined'), _reservationStatuses);

var selectReservationStatuses = exports.selectReservationStatuses = [{ text: 'Pending', value: PENDING }, { text: 'Accepted', value: ACCEPTED }, { text: 'Declined', value: DECLINED }];