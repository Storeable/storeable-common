"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectSpaceFeatures = exports.spaceFeatures = exports.RENTERS_INSURANCE = exports.HOME_OWNERS_INSURANCE = exports.FIRE_DETECTION = exports.SECURITY_ALARM = exports.LOCK = exports.AC = exports.HEAT = exports.ANY_TIME = exports.SCHEDULED = void 0;

var _spaceFeatures;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SCHEDULED = 1;
exports.SCHEDULED = SCHEDULED;
var ANY_TIME = 2;
exports.ANY_TIME = ANY_TIME;
var HEAT = 3;
exports.HEAT = HEAT;
var AC = 4;
exports.AC = AC;
var LOCK = 5;
exports.LOCK = LOCK;
var SECURITY_ALARM = 6;
exports.SECURITY_ALARM = SECURITY_ALARM;
var FIRE_DETECTION = 7;
exports.FIRE_DETECTION = FIRE_DETECTION;
var HOME_OWNERS_INSURANCE = 8;
exports.HOME_OWNERS_INSURANCE = HOME_OWNERS_INSURANCE;
var RENTERS_INSURANCE = 9;
exports.RENTERS_INSURANCE = RENTERS_INSURANCE;
var spaceFeatures = (_spaceFeatures = {}, _defineProperty(_spaceFeatures, SCHEDULED, 'Scheduled'), _defineProperty(_spaceFeatures, ANY_TIME, 'Any Time'), _defineProperty(_spaceFeatures, HEAT, 'Heat'), _defineProperty(_spaceFeatures, AC, 'A/C'), _defineProperty(_spaceFeatures, LOCK, 'Lock'), _defineProperty(_spaceFeatures, SECURITY_ALARM, 'Security Alarm'), _defineProperty(_spaceFeatures, FIRE_DETECTION, 'Fire Detection'), _defineProperty(_spaceFeatures, HOME_OWNERS_INSURANCE, 'Homeowner\'s Insurance'), _defineProperty(_spaceFeatures, RENTERS_INSURANCE, 'Renter\'s Insurance'), _spaceFeatures);
exports.spaceFeatures = spaceFeatures;
var selectSpaceFeatures = [{
  text: 'Scheduled ',
  value: SCHEDULED
}, {
  text: 'Any Time',
  value: ANY_TIME
}, {
  text: 'Heat',
  value: HEAT
}, {
  text: 'A/C ',
  value: AC
}, {
  text: 'Lock',
  value: LOCK
}, {
  text: 'Security Alarm',
  value: SECURITY_ALARM
}, {
  text: 'Fire Detection',
  value: FIRE_DETECTION
}, {
  text: 'Homeowner\'s Insurance',
  value: HOME_OWNERS_INSURANCE
}, {
  text: 'Renter\'s Insurance',
  value: RENTERS_INSURANCE
}];
exports.selectSpaceFeatures = selectSpaceFeatures;