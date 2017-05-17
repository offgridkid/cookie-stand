'use strict';

// Yesterday, day 1 of this project, I couldn't figure out how to
// do pretty much any of the "sales.html"  stuff which set me pretty far behind.
//  I also don't understand what sales.html even is, as I'm writing javascript
// in a file named app.js .
//
//  So step 2 was to create a random number of customers using our given
//  minimum and maximum.
//
//  When using object literals, I found that number with this,
//
// var firstAndPike = {
//   min: 23,
//   max: 65,
//   avgCookies: 6.3,
//   avgCust: function(minCust, maxCust) {
//     return Math.floor(Math.random() * (this.max - this.min)) + this.min;
//   }
// };
//
//  and thats where I stopped.
//  So,
//  Now today I have made the table, not list, with all the known/given info, but don't
// know how to go back and input the stuff from monday
// 1) random number of customers
// 2) average cookies per customer * random # of customers
// 3) total cookies per location
//
//
// I haven't done anything in a .html file either?
//
//



// most comments from here on out were copy and pasted from a codepen example
//
// create constructor definition
// function Store(location, min, max, avg) {
//   this.location = location; // dynamic location property
//   this.min = min; // dynamic min property
//   this.max = max; // dynamic max property
//   this.avg = avg; // dynamic avg property
// }


// add new stores to our table by instantiating new Store objects
// var firstAndPike = new Store('First and Pike', 23, 65, 6.3);
// var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
// var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
// var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
// var alki = new Store('Alki', 2, 16, 4.6);
//
// var stores = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];
//
// var table = document.getElementById('shell');
// var data = [];
//
// for (var i = 0; i < stores.length; i++) {
//   data.push(
//     '<td>' + stores[i].location + '</td>' +
//     '<td>' + stores[i].min + '</td>' +
//     '<td>' + stores[i].max + '</td>' +
//     '<td>' + stores[i].avg + '</td>' +
//     '<td>' + stores[i].randomCustomers() + '</td>'
//   );
// }
//
// var new_row;
//
// for (var j = 0; j < data.length; j++) {
//   new_row = document.createElement('tr');
//   new_row.innerHTML = data[j];
//   table.appendChild(new_row);
// }


//

var form = document.getElementById('sample_form');
var table = document.getElementById('store_table');

var data = [];

function Store(location, minCust, maxCust, avg) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avg = avg;
}

// add randomCustomers method to the prototype chain
Store.prototype.randomCustomers = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};

var firstAndPike = new Store('First and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

function formData(event) {
  event.preventDefault();

  var location = event.target.location.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var avg = event.target.avg.value;

  data.push(new Store(location, minCust, maxCust, avg));
  createTable();
  form.reset();
}

function createTable() {
  var row;
  for (var i = 0; i < data.length; i++) {
    row = document.createElement('tr');
    row.innerHTML = '<td>' + data[i].location + '</td>' +
    '<td>' + data[i].minCust + '</td>' +
    '<td>' + data[i].maxCust + '</td>' +
    '<td>' + data[i].avg + '</td>';
  }

  table.appendChild(row);
}

form.addEventListener('submit', formData);
