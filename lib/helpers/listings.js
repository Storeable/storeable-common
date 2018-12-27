"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPricesBySpaceFeature = exports.calculateSqFootageAvailable = exports.calculateTotalSqFootage = exports.calculateListingPrice = exports.calculateSpaceServicePrice = exports.metaKeywords = exports.metaDescription = exports.metaTitle = exports.getListingBaseSqFtCost = exports.getListingTotalCost = exports.isRentable = exports.isOwner = exports.getTotalCost = exports.getBaseSqFtCost = exports.getListingFee = exports.getInsuranceFee = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _number = require("javascript-utils/lib/number");

var _utils = require("javascript-utils/lib/utils");

var _array = require("javascript-utils/lib/array");

var _string = require("javascript-utils/lib/string");

var _listingStatus = require("../constants/listingStatus");

var _fees = require("../constants/fees");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Returns the insurance fee.
 *
 * @param {Number|undefined} fee
 * @returns {Number}
 */
var getInsuranceFee = function getInsuranceFee() {
  var fee = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

  if (typeof fee === 'undefined') {
    return _fees.fees[_fees.INSURANCE].price;
  }

  if (!(0, _number.isNumber)(fee)) {
    return 0;
  }

  return parseFloat(fee);
};
/**
 * Returns the listing fee.
 *
 * @param {Number} total
 * @param {Number|undefined} fee
 * @returns {Number}
 */


exports.getInsuranceFee = getInsuranceFee;

var getListingFee = function getListingFee(total) {
  var fee = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var listingFee = fee;

  if (typeof listingFee === 'undefined') {
    listingFee = _fees.fees[_fees.LISTING_FEE].price;
  }

  if (!(0, _number.isNumber)(listingFee)) {
    return 0;
  }

  var normalizedFee = parseFloat(listingFee);

  if (normalizedFee <= 0) {
    return 0;
  }

  return normalizedFee / 100 * total;
};
/**
 * Returns the base quare feet cost for a listing.
 *
 * @param {Number} sqFtCost
 * @param {Number} spaceTypeSqFtCost
 * @param {Number|Array|undefined} features features
 * @returns {Number}
 */


exports.getListingFee = getListingFee;

var getBaseSqFtCost = function getBaseSqFtCost(sqFtCost, spaceTypeSqFtCost, features) {
  var total = parseFloat(sqFtCost) + parseFloat(spaceTypeSqFtCost); // Add the features

  if ((0, _number.isNumber)(features)) {
    total += parseFloat(features);
  } else if (Array.isArray(features) && features.length > 0) {
    features.forEach(function (feature) {
      total += parseFloat(feature.price);
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


exports.getBaseSqFtCost = getBaseSqFtCost;

var getTotalCost = function getTotalCost(sqFt, sqFtCost, spaceTypeSqFtCost) {
  var features = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var services = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
  var includeFees = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var baseSqFtCost = getBaseSqFtCost(sqFtCost, spaceTypeSqFtCost, features);
  var total = sqFt * baseSqFtCost; // Add the services

  if (Array.isArray(services) && services.length > 0) {
    services.forEach(function (service) {
      total += parseFloat(service.price);
    });
  }

  if (includeFees) {
    var listingFee = _typeof(includeFees) === 'object' ? includeFees.listingFee : undefined;
    var insuranceFee = _typeof(includeFees) === 'object' ? includeFees.insuranceFee : undefined; // Add the insurance fee and listing fee percentage

    total += getListingFee(total, listingFee) + getInsuranceFee(insuranceFee);
  }

  return total;
};
/**
 * Returns true if the specified user is the listing's owner.
 * @param {Object} listing
 * @param {Number} userId
 * @returns {Boolean}
 */


exports.getTotalCost = getTotalCost;

var isOwner = function isOwner(listing, userId) {
  return listing.userId === userId;
};
/**
 * Returns true if the specified listing can be rented.
 * @param {Object} listing
 * @param {Number} userId
 * @returns {Boolean}
 */


exports.isOwner = isOwner;

var isRentable = function isRentable(listing, userId) {
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


exports.isRentable = isRentable;

var getListingTotalCost = function getListingTotalCost(listing) {
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


exports.getListingTotalCost = getListingTotalCost;

var getListingBaseSqFtCost = function getListingBaseSqFtCost(listing) {
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


exports.getListingBaseSqFtCost = getListingBaseSqFtCost;

var metaTitle = function metaTitle(name, city, region, postalCode) {
  var metaTitleString = '';

  if (!(0, _utils.isEmpty)(name)) {
    metaTitleString += "".concat(name, " in ");
  }

  if (!(0, _utils.isEmpty)(city) && (!(0, _utils.isEmpty)(region) || !(0, _utils.isEmpty)(postalCode))) {
    metaTitleString += "".concat(city, ", ");
  } else if (!(0, _utils.isEmpty)(city)) {
    metaTitleString += "".concat(city, " ");
  }

  if (!(0, _utils.isEmpty)(region)) {
    metaTitleString += "".concat(region, " ");
  }

  if (!(0, _utils.isEmpty)(postalCode)) {
    metaTitleString += "".concat(postalCode, " ");
  }

  return (0, _string.rtrim)(metaTitleString);
};
/**
 * Creates a metaDescription for a listing.
 *
 * @param {String} description
 * @returns {String}
 */


exports.metaTitle = metaTitle;

var metaDescription = function metaDescription(description) {
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


exports.metaDescription = metaDescription;

var metaKeywords = function metaKeywords(spaceFeatures, spacePropertyType, spaceType) {
  var keywords = [spacePropertyType, spaceType];
  var normalizedSpaceFeatures = (0, _array.arrayUnique)(spaceFeatures);
  normalizedSpaceFeatures.sort();
  (0, _array.arrayUnique)(spaceFeatures).forEach(function (res) {
    keywords.push(res);
  });
  return keywords.join(', ');
};
/**
 * Calculates the price of all the space Services Available.
 *
 * @param {Array} spaceServices
 * @returns {Number}
 */


exports.metaKeywords = metaKeywords;

var calculateSpaceServicePrice = function calculateSpaceServicePrice(spaceServices) {
  var total = 0;

  if (!_lodash.default.isEmpty(spaceServices)) {
    spaceServices.forEach(function (service) {
      total += parseFloat(service.price);
    });
  }

  return total;
};
/**
 * Calculates the Listing Price.
 *
 * @param {Object} listing
 * @returns {Number}
 */


exports.calculateSpaceServicePrice = calculateSpaceServicePrice;

var calculateListingPrice = function calculateListingPrice(listing) {
  var listingPrice = listing.price;
  var spaceTypePrice = listing.spaceType.price;
  var servicesPrice = calculateSpaceServicePrice(listing.spaceServicesPrices);
  return listingPrice + spaceTypePrice + servicesPrice;
};
/**
 * Calculates the Total Sq Footage of a Listing.
 *
 * @param {Object} listing
 * @returns {Number}
 */


exports.calculateListingPrice = calculateListingPrice;

var calculateTotalSqFootage = function calculateTotalSqFootage(listing) {
  var width = listing.width,
      length = listing.length;
  return width * length;
};
/**
 * Calculates the Available Sq Footage of a Listing.
 *
 * @param {Object} listing
 * @returns {Number}
 */


exports.calculateTotalSqFootage = calculateTotalSqFootage;

var calculateSqFootageAvailable = function calculateSqFootageAvailable(listing) {
  var totalSqFootage = calculateTotalSqFootage(listing);
  var reservations = listing.reservations;

  if (_lodash.default.isEmpty(reservations)) {
    return totalSqFootage;
  }

  var validReservations = reservations.filter(function (reservation) {
    return reservation.statusId <= 2;
  });

  if (!_lodash.default.isEmpty(validReservations)) {
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
/**
 * Returns a map of prices by space feature.
 *
 * @param {Array} spaceFeatures
 * @returns {Object}
 */


exports.calculateSqFootageAvailable = calculateSqFootageAvailable;

var getPricesBySpaceFeature = function getPricesBySpaceFeature(spaceFeatures) {
  var pricesBySpaceFeature = {};
  spaceFeatures.forEach(function (spaceFeature) {
    pricesBySpaceFeature[spaceFeature.id] = spaceFeature.price;
  });
  return pricesBySpaceFeature;
};

exports.getPricesBySpaceFeature = getPricesBySpaceFeature;