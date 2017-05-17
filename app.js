'use strict';

// var firstAndPike = {
//   min: 23,
//   max: 65,
//   avgCookies: 6.3,
//   avgCust: function(minCust, maxCust) {
//     return Math.floor(Math.random() * (this.max - this.min)) + this.min;
//   }
// };



//
// create constructor definition
function Store(location, min, max, avg) {
  this.location = location; // dynamic location property
  this.min = min; // dynamic min property
  this.max = max; // dynamic max property
  this.avg = avg; // dynamic avg property
}

// add randomCustomers method to the prototype chain
Store.prototype.randomCustomers = function() {



}
// ?i dont get ittttttt
// ?i need the thing at the top in object literal translated to constructor or something
// randomCustomers() has been added to data.push loop thing

// add new stores to our table by instantiating new Store objects
var firstAndPike = new Store('First and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var stores = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

var table = document.getElementById('shell');
var data = [];

for (var i = 0; i < stores.length; i++) {
  data.push(
    '<td>' + stores[i].location + '</td>' +
    '<td>' + stores[i].min + '</td>' +
    '<td>' + stores[i].max + '</td>' +
    '<td>' + stores[i].avg + '</td>' +
    '<td>' + stores[i].randomCustomers() + '</td>'
  );
}

var new_row;

for (var j = 0; j < data.length; j++) {
  new_row = document.createElement('tr');
  new_row.innerHTML = data[j];
  table.appendChild(new_row);
}
