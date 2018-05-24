export const PENDING = 1;
export const ACCEPTED = 2;
export const DECLINED = 3;

export const reservationStatuses = {
  [PENDING]: 'Pending',
  [ACCEPTED]: 'Accepted',
  [DECLINED]: 'Declined'
};

export const selectReservationStatuses = [
  { text: 'Pending', value: PENDING },
  { text: 'Accepted', value: ACCEPTED },
  { text: 'Declined', value: DECLINED }
];
