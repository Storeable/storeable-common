export const ACCESS = 1;
export const CLIMATE_CONTROLS = 2;
export const SECURITY = 3;
export const INSURANCE = 4;

export const reservationStatuses = {
  [ACCESS]: 'Access',
  [CLIMATE_CONTROLS]: 'Climate Controls',
  [SECURITY]: 'Security',
  [INSURANCE]: 'Insurance',
};

export const selectReservationStatuses = [
  { text: 'Access', value: ACCESS },
  { text: 'Climate Controls', value: CLIMATE_CONTROLS },
  { text: 'Security', value: SECURITY },
  { text: 'Insurance', value: INSURANCE }
];
