export const ADMIN = 1;
export const CUSTOMER = 2;

export const userTypes = {
  [ADMIN]: 'Admin',
  [CUSTOMER]: 'Customer'
};

export const selectUserTypes = [
  { text: 'Admin', value: ADMIN },
  { text: 'Customer', value: CUSTOMER }
];
