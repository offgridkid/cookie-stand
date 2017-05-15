'use strict';

var firstAndPike = {
  min: 23,
  max: 65,
  avgCookies: 6.3,
  avgCust: function(minCust, maxCust) {
    return Math.floor(Math.random() * (this.max - this.min)) + this.min;
  }
  cph: function(minCust, maxCust) {
    return this.avgCookies * this.avgCust;
  }
};


// var seatacAirport = {
//   min: 3,
//   max: 24,
//   avgCookies: 1.2,
//   avgCust: function(minCust, maxCust) {
//     return Math.floor(Math.random() * (this.max - this.min)) + this.min;
//   }
// };
//
// var seattleCenter = {
//   min: 11,
//   max: 38,
//   avgCookies: 3.7,
//   avgCust: function(minCust, maxCust) {
//     return Math.floor(Math.random() * (this.max - this.min)) + this.min;
//   }
// };
//
// var capitolHill = {
//   min: 20,
//   max: 38,
//   avgCookies: 2.3,
//   avgCust: function(minCust, maxCust) {
//     return Math.floor(Math.random() * (this.max - this.min)) + this.min;
//   }
// };
//
// var alki = {
//   min: 2,
//   max: 16,
//   avgCookies: 4.6,
//   avgCust: function(minCust, maxCust) {
//     return Math.floor(Math.random() * (this.max - this.min)) + this.min;
//   }
// };
