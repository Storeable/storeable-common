"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectReservationStatuses = exports.reservationStatuses = exports.DECLINED = exports.ACCEPTED = exports.PENDING = void 0;

var _reservationStatuses;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PENDING = 1;
exports.PENDING = PENDING;
var ACCEPTED = 2;
exports.ACCEPTED = ACCEPTED;
var DECLINED = 3;
exports.DECLINED = DECLINED;
var reservationStatuses = (_reservationStatuses = {}, _defineProperty(_reservationStatuses, PENDING, 'Pending'), _defineProperty(_reservationStatuses, ACCEPTED, 'Accepted'), _defineProperty(_reservationStatuses, DECLINED, 'Declined'), _reservationStatuses);
exports.reservationStatuses = reservationStatuses;
var selectReservationStatuses = [{
  text: 'Pending',
  value: PENDING
}, {
  text: 'Accepted',
  value: ACCEPTED
}, {
  text: 'Declined',
  value: DECLINED
}];
exports.selectReservationStatuses = selectReservationStatuses;