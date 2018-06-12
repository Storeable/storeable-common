'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spaceFeatures;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SCHEDULED = exports.SCHEDULED = 1;
var ANY_TIME = exports.ANY_TIME = 2;
var HEAT = exports.HEAT = 3;
var AC = exports.AC = 4;
var LOCK = exports.LOCK = 5;
var SECURITY_ALARM = exports.SECURITY_ALARM = 6;
var FIRE_DETECTION = exports.FIRE_DETECTION = 7;
var HOME_OWNERS_INSURANCE = exports.HOME_OWNERS_INSURANCE = 8;
var RENTERS_INSURANCE = exports.RENTERS_INSURANCE = 9;

var spaceFeatures = exports.spaceFeatures = (_spaceFeatures = {}, _defineProperty(_spaceFeatures, SCHEDULED, 'Scheduled'), _defineProperty(_spaceFeatures, ANY_TIME, 'Any Time'), _defineProperty(_spaceFeatures, HEAT, 'Heat'), _defineProperty(_spaceFeatures, AC, 'A/C'), _defineProperty(_spaceFeatures, LOCK, 'Lock'), _defineProperty(_spaceFeatures, SECURITY_ALARM, 'Security Alarm'), _defineProperty(_spaceFeatures, FIRE_DETECTION, 'Fire Detection'), _defineProperty(_spaceFeatures, HOME_OWNERS_INSURANCE, 'Homeowner\'s Insurance'), _defineProperty(_spaceFeatures, RENTERS_INSURANCE, 'Renter\'s Insurance'), _spaceFeatures);

var selectSpaceFeatures = exports.selectSpaceFeatures = [{
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