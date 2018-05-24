export const STORAGE_INDOOR = 1;
export const STORAGE_OUTDOOR = 2;
export const PARKING_INDOOR = 3;
export const PARKING_OUTDOOR = 4;

export const spaceTypes = {
  [STORAGE_INDOOR]: 'Storage Indoor',
  [STORAGE_OUTDOOR]: 'Storage Outdoor',
  [PARKING_INDOOR]: 'Parking Indoor',
  [PARKING_OUTDOOR]: 'Parking Outdoor'
};

export const selectSpaceTypes = [
  { text: 'Storage Indoor', value: STORAGE_INDOOR },
  { text: 'Storage Outdoor', value: STORAGE_OUTDOOR },
  { text: 'Parking Indoor', value: PARKING_INDOOR },
  { text: 'Parking Outdoor', value: [PARKING_OUTDOOR] }
];
