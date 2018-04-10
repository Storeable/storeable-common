import { getTotalCost } from './listings';

/**
 * Returns the total cost of a reservation.
 *
 * @param {Object} reservation
 * @param {Boolean} includeFees
 * @return {Number}
 */
export const getReservationTotalCost = (reservation, includeFees = true) =>
  getTotalCost(
    reservation.length * reservation.width,
    reservation.price,
    reservation.spaceType.price,
    reservation.spaceFeatures,
    undefined,
    includeFees
  );

/**
 * Returns the total earnings of a reservation.
 *
 * @param {Object} reservation
 * @return {Number}
 */
export const getReservationTotalEarnings = reservation => getReservationTotalCost(reservation, false);
