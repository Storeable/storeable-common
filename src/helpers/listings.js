import { isNumber } from 'javascript-utils/lib/number';
import { isEmpty } from 'javascript-utils/lib/utils';
import { arrayUnique } from 'javascript-utils/lib/array';
import { rtrim, shorten } from 'javascript-utils/lib/string';
import { ACTIVE } from '../constants/listingStatus';
import { LISTING_FEE, INSURANCE, fees } from '../constants/fees';

/**
 * Returns the insurance fee.
 *
 * @returns {Number}
 */
export const getInsuranceFee = () => fees[INSURANCE].price;

/**
 * Returns the listing fee.
 *
 * @param {Number} total
 * @returns {Number}
 */
export const getListingFee = total => (fees[LISTING_FEE].price / 100) * total;

/**
 * Returns the base quare feet cost for a listing.
 *
 * @param {Number} sqFtCost
 * @param {Number} spaceTypeSqFtCost
 * @param {Number|Array|undefined} features features
 * @returns {Number}
 */
export const getBaseSqFtCost = (sqFtCost, spaceTypeSqFtCost, features) => {
  let total = parseFloat(sqFtCost) + parseFloat(spaceTypeSqFtCost);

  // Add the features
  if (isNumber(features)) {
    total += features;
  } else if (Array.isArray(features) && features.length > 0) {
    features.forEach((feature) => {
      total += feature.price;
    });
  }

  return total;
};

/**
 * Returns the total cost of a listing.
 *
 * @param {Number} sqFt
 * @param {Number} sqFtCost
 * @param {Number} spaceTypeSqFtCost
 * @param {Number|Array|undefined} features
 * @param {Array|undefined} services
 * @param {Boolean} includeFees
 * @return {Number}
 */
export const getTotalCost = (
  sqFt,
  sqFtCost,
  spaceTypeSqFtCost,
  features = undefined,
  services = undefined,
  includeFees = false
) => {
  const baseSqFtCost = getBaseSqFtCost(sqFtCost, spaceTypeSqFtCost, features);
  let total = (sqFt * baseSqFtCost);

  // Add the services
  if (Array.isArray(services) && services.length > 0) {
    services.forEach((service) => {
      total += service.price;
    });
  }

  if (includeFees) {
    // Add the insurance fee and listing fee percentage
    total += getListingFee(total) + getInsuranceFee();
  }

  return total;
};

/**
 * Returns true if the specified user is the listing's owner.
 * @param {Object} listing
 * @param {Number} userId
 * @returns {Boolean}
 */
export const isOwner = (listing, userId) => listing.userId === userId;

/**
 * Returns true if the specified listing can be rented.
 * @param {Object} listing
 * @param {Number} userId
 * @returns {Boolean}
 */
export const isRentable = (listing, userId) =>
  listing.statusId === ACTIVE && !isOwner(listing, userId) && listing.rentableSpaceAvailable > 0;

/**
 * Returns a listing's cost.
 *
 * @param {Object} listing
 * @param {Array|undefined} features
 * @param {Array|undefined} services
 * @param {Boolean} includeFees
 * @returns {Number}
 */
export const getListingTotalCost = (listing, features = undefined, services = undefined, includeFees = false) =>
  getTotalCost(
    (listing.length * listing.width),
    listing.price,
    listing.spaceType.price,
    features,
    services,
    includeFees
  );

/**
 * Returns a listing's base sq ft cost.
 *
 * @param {Object} listing
 * @return {Number}
 */
export const getListingBaseSqFtCost = listing =>
  getBaseSqFtCost(listing.price, listing.spaceType.price, listing.spaceFeaturesPrices);

/**
 * Creates a metaTitle for a listing if none is found.
 *
 * @param {String} name
 * @param {String} city
 * @param {String} region
 * @param {String} postalCode
 * @returns {String}
 */
export const metaTitle = (name, city, region, postalCode) => {
  let metaTitleString = '';

  if (!isEmpty(name)) {
    metaTitleString += `${name} in `;
  }

  if (!isEmpty(city) && (!isEmpty(region) || !isEmpty(postalCode))) {
    metaTitleString += `${city}, `;
  } else if (!isEmpty(city)) {
    metaTitleString += `${city} `;
  }

  if (!isEmpty(region)) {
    metaTitleString += `${region} `;
  }

  if (!isEmpty(postalCode)) {
    metaTitleString += `${postalCode} `;
  }

  return rtrim(metaTitleString);
};

/**
 * Creates a metaDescription for a listing.
 *
 * @param {String} description
 * @returns {String}
 */
export const metaDescription = description => shorten(description.replace(/(\r\n|\n|\r)/gm, ' '), 190);

/**
 * Creates a metaDescription for a listing if none is found.
 *
 * @param {Array} spaceFeatures
 * @param {String} spacePropertyType
 * @param {String} spaceType
 * @returns {String}
 */
export const metaKeywords = (spaceFeatures, spacePropertyType, spaceType) => {
  const keywords = [spacePropertyType, spaceType];
  const normalizedSpaceFeatures = arrayUnique(spaceFeatures);
  normalizedSpaceFeatures.sort();

  arrayUnique(spaceFeatures).forEach((res) => {
    keywords.push(res);
  });

  return keywords.join(', ');
};