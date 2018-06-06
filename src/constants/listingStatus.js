export const DRAFT = 1;
export const INACTIVE = 2;
export const ACTIVE = 3;

export const listingStatuses = {
  [DRAFT]: 'Draft',
  [INACTIVE]: 'Inactive',
  [ACTIVE]: 'Active'
};

export const selectListingStatuses = [
  { text: 'Draft', value: DRAFT },
  { text: 'Inactive', value: INACTIVE },
  { text: 'Active', value: ACTIVE }
];
