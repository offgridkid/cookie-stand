'use strict';

//
// var stores = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];
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
// this is to make sure our
var form = document.getElementById('sample_form');
var table = document.getElementById('store_table');

var data = [];

// create Store constructor
function Store(location, minCust, maxCust, avg) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avg = avg; //better change this to avgCooPerCus
}

// add randomCustomers method to the prototype chain
Store.prototype.ranCusPerHour = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};

// add a method that multiplies ranCusPerHour by avgCooPerCus
Store.prototype.cooSoldPerHour = function() {
  // i dont know where to start
  return Store.ranCusPerHour * this.avg;
};

// Matthews code below
//
// Store.prototype.cookiesPerHour = function() {
//   var cookies_arr = [];
//   for (var i = 0; i < 15; i++) {
//     //console.log(this.maxCust, this.minCust);
//     var custNum = this.minCust + Math.floor(Math.random() * (this.maxCust - this.minCust + 1));
//     // cookies per hour = avg cookies sold * custNum (need whole number))
//     var cookiesSold =  Math.floor(custNum * this.avgPerSale);
//     cookies_arr.push(cookiesSold);
//   }
//   return cookies_arr;
// };
//
// I see he has made an empty array then a loop that calculates
// first a random number of customers between our declared min and max and then
// second it multiplies those numbers by that stores declared average cookies per
// customers and pushes the result into our new array.
//
// So if I were going to model mine after this it would look like
// Store.prototype.cooSoldPerHour = function() {
//   var cookies_arr = [];
//   for (var i = 0; i < 15; i++) {
//     var ranCusPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     // cookies per hour = avg cookies sold * custNum (need whole number))
//     var cooSoldPerHour =  Math.floor(ranCusPerHour * this.avgCooPerCus);
//     cookies_arr.push(cooSoldPerHour);
//   }
//   return cookies_arr;
// };
//
// I want to see how I would use the result of a ranCusPerHour prototype in
// a second prototype to find cooSoldPerHour, rather than one method to do both.

// add new stores to our table by instantiating new Store objects
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
