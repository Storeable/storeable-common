export const INACTIVE = 1;
export const ACTIVE = 2;
export const SUSPENDED = 3;

export const userStatuses = {
  [INACTIVE]: 'Inactive',
  [ACTIVE]: 'Active',
  [SUSPENDED]: 'Suspended'
};

export const selectUserStatuses = [
  { text: 'Inactive', value: INACTIVE },
  { text: 'Active', value: ACTIVE },
  { text: 'Suspended', value: SUSPENDED }
];
