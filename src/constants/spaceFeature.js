export const SCHEDULED = 1;
export const ANY_TIME = 2;
export const HEAT = 3;
export const AC = 4;
export const LOCK = 5;
export const SECURITY_ALARM = 6;
export const FIRE_DETECTION = 7;
export const HOME_OWNERS_INSURANCE = 8;
export const RENTERS_INSURANCE = 9;

export const spaceFeatures = {
  [SCHEDULED]: 'Scheduled',
  [ANY_TIME]: 'Any Time',
  [HEAT]: 'Heat',
  [AC]: 'A/C',
  [LOCK]: 'Lock',
  [SECURITY_ALARM]: 'Security Alarm',
  [FIRE_DETECTION]: 'Fire Detection',
  [HOME_OWNERS_INSURANCE]: 'Homeowner\'s Insurance',
  [RENTERS_INSURANCE]: 'Renter\'s Insurance'
};

export const selectSpaceFeatures = [
  {
    text: 'Scheduled ',
    value: SCHEDULED
  },
  {
    text: 'Any Time',
    value: ANY_TIME
  },
  {
    text: 'Heat',
    value: HEAT
  },
  {
    text: 'A/C ',
    value: AC
  },
  {
    text: 'Lock',
    value: LOCK
  },
  {
    text: 'Security Alarm',
    value: SECURITY_ALARM
  },
  {
    text: 'Fire Detection',
    value: FIRE_DETECTION
  },
  {
    text: 'Homeowner\'s Insurance',
    value: HOME_OWNERS_INSURANCE
  },
  {
    text: 'Renter\'s Insurance',
    value: RENTERS_INSURANCE
  }
];
