'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var PENDING = exports.PENDING = 1;
var ACCEPTED = exports.ACCEPTED = 2;
var DECLINED = exports.DECLINED = 3;

var reservationStatuses = exports.reservationStatuses = {
  1: 'Pending',
  2: 'Accepted',
  3: 'Declined'
};

var selectReservationStatuses = exports.selectReservationStatuses = [{ text: 'Pending', value: 1 }, { text: 'Accepted', value: 2 }, { text: 'Declined', value: 3 }];