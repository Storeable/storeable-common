"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectMobileStatuses = exports.mobileStatus = exports.VERIFIED = exports.UNVERIFIED = void 0;
var UNVERIFIED = 0;
exports.UNVERIFIED = UNVERIFIED;
var VERIFIED = 1;
exports.VERIFIED = VERIFIED;
var mobileStatus = {
  0: 'Unverified',
  1: 'Verified'
};
exports.mobileStatus = mobileStatus;
var selectMobileStatuses = [{
  text: 'Unverified',
  value: 0
}, {
  text: 'Verified',
  value: 1
}];
exports.selectMobileStatuses = selectMobileStatuses;