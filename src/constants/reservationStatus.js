export const PENDING = 1;
export const ACCEPTED = 2;
export const DECLINED = 3;

export const reservationStatuses = {
  1: 'Pending',
  2: 'Accepted',
  3: 'Declined'
};

export const selectReservationStatuses = [
  { text: 'Pending', value: 1 },
  { text: 'Accepted', value: 2 },
  { text: 'Declined', value: 3 }
];
