'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateSqFootageAvailable = exports.calculateTotalSqFootage = exports.calculateListingPrice = exports.calculateSpaceServicePrice = exports.metaKeywords = exports.metaDescription = exports.metaTitle = exports.getListingBaseSqFtCost = exports.getListingTotalCost = exports.isRentable = exports.isOwner = exports.getTotalCost = exports.getBaseSqFtCost = exports.getListingFee = exports.getInsuranceFee = undefined;

var _number = require('javascript-utils/lib/number');

var _utils = require('javascript-utils/lib/utils');

var _array = require('javascript-utils/lib/array');

var _string = require('javascript-utils/lib/string');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _number2 = require('javascript-utils/src/number');

var _format = require('javascript-utils/src/format');

var _listingStatus = require('../constants/listingStatus');

var _fees = require('../constants/fees');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the insurance fee.
 *
 * @returns {Number}
 */
var getInsuranceFee = exports.getInsuranceFee = function getInsuranceFee() {
  return _fees.fees[_fees.INSURANCE].price;
};

/**
 * Returns the listing fee.
 *
 * @param {Number} total
 * @returns {Number}
 */
var getListingFee = exports.getListingFee = function getListingFee(total) {
  return _fees.fees[_fees.LISTING_FEE].price / 100 * total;
};

/**
 * Returns the base quare feet cost for a listing.
 *
 * @param {Number} sqFtCost
 * @param {Number} spaceTypeSqFtCost
 * @param {Number|Array|undefined} features features
 * @returns {Number}
 */
var getBaseSqFtCost = exports.getBaseSqFtCost = function getBaseSqFtCost(sqFtCost, spaceTypeSqFtCost, features) {
  var total = parseFloat(sqFtCost) + parseFloat(spaceTypeSqFtCost);

  // Add the features
  if ((0, _number.isNumber)(features)) {
    total += features;
  } else if (Array.isArray(features) && features.length > 0) {
    features.forEach(function (feature) {
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
var getTotalCost = exports.getTotalCost = function getTotalCost(sqFt, sqFtCost, spaceTypeSqFtCost) {
  var features = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var services = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
  var includeFees = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  var baseSqFtCost = getBaseSqFtCost(sqFtCost, spaceTypeSqFtCost, features);
  var total = sqFt * baseSqFtCost;

  // Add the services
  if (Array.isArray(services) && services.length > 0) {
    services.forEach(function (service) {
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
var isOwner = exports.isOwner = function isOwner(listing, userId) {
  return listing.userId === userId;
};

/**
 * Returns true if the specified listing can be rented.
 * @param {Object} listing
 * @param {Number} userId
 * @returns {Boolean}
 */
var isRentable = exports.isRentable = function isRentable(listing, userId) {
  return listing.statusId === _listingStatus.ACTIVE && !isOwner(listing, userId) && listing.rentableSpaceAvailable > 0;
};

/**
 * Returns a listing's cost.
 *
 * @param {Object} listing
 * @param {Array|undefined} features
 * @param {Array|undefined} services
 * @param {Boolean} includeFees
 * @returns {Number}
 */
var getListingTotalCost = exports.getListingTotalCost = function getListingTotalCost(listing) {
  var features = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var services = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var includeFees = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return getTotalCost(listing.length * listing.width, listing.price, listing.spaceType.price, features, services, includeFees);
};

/**
 * Returns a listing's base sq ft cost.
 *
 * @param {Object} listing
 * @return {Number}
 */
var getListingBaseSqFtCost = exports.getListingBaseSqFtCost = function getListingBaseSqFtCost(listing) {
  return getBaseSqFtCost(listing.price, listing.spaceType.price, listing.spaceFeaturesPrices);
};

/**
 * Creates a metaTitle for a listing if none is found.
 *
 * @param {String} name
 * @param {String} city
 * @param {String} region
 * @param {String} postalCode
 * @returns {String}
 */
var metaTitle = exports.metaTitle = function metaTitle(name, city, region, postalCode) {
  var metaTitleString = '';

  if (!(0, _utils.isEmpty)(name)) {
    metaTitleString += name + ' in ';
  }

  if (!(0, _utils.isEmpty)(city) && (!(0, _utils.isEmpty)(region) || !(0, _utils.isEmpty)(postalCode))) {
    metaTitleString += city + ', ';
  } else if (!(0, _utils.isEmpty)(city)) {
    metaTitleString += city + ' ';
  }

  if (!(0, _utils.isEmpty)(region)) {
    metaTitleString += region + ' ';
  }

  if (!(0, _utils.isEmpty)(postalCode)) {
    metaTitleString += postalCode + ' ';
  }

  return (0, _string.rtrim)(metaTitleString);
};

/**
 * Creates a metaDescription for a listing.
 *
 * @param {String} description
 * @returns {String}
 */
var metaDescription = exports.metaDescription = function metaDescription(description) {
  return (0, _string.shorten)(description.replace(/(\r\n|\n|\r)/gm, ' '), 190);
};

/**
 * Creates a metaDescription for a listing if none is found.
 *
 * @param {Array} spaceFeatures
 * @param {String} spacePropertyType
 * @param {String} spaceType
 * @returns {String}
 */
var metaKeywords = exports.metaKeywords = function metaKeywords(spaceFeatures, spacePropertyType, spaceType) {
  var keywords = [spacePropertyType, spaceType];
  var normalizedSpaceFeatures = (0, _array.arrayUnique)(spaceFeatures);
  normalizedSpaceFeatures.sort();

  (0, _array.arrayUnique)(spaceFeatures).forEach(function (res) {
    keywords.push(res);
  });

  return keywords.join(', ');
};

/**
 * Calulates the price of all the space Services Available
 *
 * @param {Array} spaceServices
 * @returns {Number}
 */
var calculateSpaceServicePrice = exports.calculateSpaceServicePrice = function calculateSpaceServicePrice(spaceServices) {
  if (!_lodash2.default.isEmpty(spaceServices)) {
    var total = 0.00;
    spaceServices.forEach(function (service) {
      total += parseFloat(service.price);
    });
    return total;
  }
  return 0.00;
};

/**
 * Calulates the Listing Price
 *
 * @param {Object} listing
 * @returns {Number}
 */
var calculateListingPrice = exports.calculateListingPrice = function calculateListingPrice(listing) {
  var listingPrice = (0, _number2.normalizeInputToInteger)(listing.price);
  var spaceTypePrice = (0, _number2.normalizeInputToInteger)(listing.spaceType.price);
  var servicesPrice = (0, _number2.normalizeInputToInteger)(calculateSpaceServicePrice(listing.spaceServicesPrices));
  var total = listingPrice + spaceTypePrice + servicesPrice;
  return (0, _format.formatCurrency)(total);
};

/**
 * Calulates the Total Sq Footage of a Listing
 *
 * @param {Object} listing
 * @returns {Number}
 */
var calculateTotalSqFootage = exports.calculateTotalSqFootage = function calculateTotalSqFootage(listing) {
  var width = listing.width,
      length = listing.length;

  return width * length;
};

/**
 * Calulates the Available Sq Footage of a Listing
 *
 * @param {Object} listing
 * @returns {Number}
 */
var calculateSqFootageAvailable = exports.calculateSqFootageAvailable = function calculateSqFootageAvailable(listing) {
  var totalSqFootage = calculateTotalSqFootage(listing);
  var reservations = listing.reservations;


  if (_lodash2.default.isEmpty(reservations)) {
    return totalSqFootage;
  }
  var validReservations = reservations.filter(function (reservation) {
    return reservation.statusId <= 2;
  });
  if (!_lodash2.default.isEmpty(validReservations)) {
    var sqFootageUsed = 0;
    validReservations.forEach(function (reservation) {
      var length = reservation.length,
          width = reservation.width;

      sqFootageUsed += length * width;
    });
    return totalSqFootage - sqFootageUsed;
  }
  return totalSqFootage;
};