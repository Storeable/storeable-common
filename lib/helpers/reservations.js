"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReservationTotalEarnings = exports.getReservationTotalCost = void 0;

var _listings = require("./listings");

/**
 * Returns the total cost of a reservation.
 *
 * @param {Object} reservation
 * @param {Boolean} includeFees
 * @return {Number}
 */
var getReservationTotalCost = function getReservationTotalCost(reservation) {
  var includeFees = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return (0, _listings.getTotalCost)(reservation.length * reservation.width, reservation.price, reservation.spaceType.price, reservation.spaceFeatures, undefined, includeFees);
};
/**
 * Returns the total earnings of a reservation.
 *
 * @param {Object} reservation
 * @return {Number}
 */


exports.getReservationTotalCost = getReservationTotalCost;

var getReservationTotalEarnings = function getReservationTotalEarnings(reservation) {
  return getReservationTotalCost(reservation, false);
};

exports.getReservationTotalEarnings = getReservationTotalEarnings;