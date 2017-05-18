'use strict';


// this is to make sure our table and form go where-
// they are supposed to within the html
var form = document.getElementById('sample_form');
var table = document.getElementById('store_table');

var data = [];

// create Store constructor
function Store(location, minCust, maxCust, avgCooPerCus) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCooPerCus = avgCooPerCus; //better change this to avgCooPerCus
}

//
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
Store.prototype.cooSoldPerHour = function() {
  var cookies_arr = [];
  for (var i = 0; i < 15; i++) {
    var ranCusPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    // cookies per hour = avg cookies sold * custNum (need whole number))
    var cooSoldPerHour =  Math.floor(ranCusPerHour * this.avgCooPerCus);
    cookies_arr.push(cooSoldPerHour);
  }
  return cookies_arr;
};
//
//
// function header(cooSoldPerHour) {
//   var data = [];
//   for (var i = 0; i < cooSoldPerHour.length; i++) {
//     data.push('<td>' + cooSoldPerHour[i] + '</td>');
//   }
//
//   addRow(data);
// }


// add new stores to our table by instantiating new Store objects
//
var firstAndPike = new Store('First and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

// Hours that stores are open
// Will be used for the columns of data on our table
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm', '2pm','3pm','4pm','5pm', '6pm','7pm','8pm'];

function header(hours) {
  var data = [];

  data.push('<td></td>');
  for (var i = 0; i < hours.length; i++) {
    data.push('<td>' + hours[i] + '</td>');
  }
  data.push('<td>Daily Location Total</td>');

  addRow(data);
}

// go ahead and declare addRow function
function addRow(data) {
  var new_row = document.createElement('tr');
  new_row.innerHTML = data.join('');
  table.appendChild(new_row);
}


// stores array
// var stores = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

function formData(event) {
  event.preventDefault();

  var location = event.target.location.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var avgCooPerCus = event.target.avgCooPerCus.value;

//   data.push(new Store(location, minCust, maxCust, avgCooPerCus));
//   createTable();
//   form.reset();
// }
//
// function createTable() {
//   var row;
//   for (var i = 0; i < data.length; i++) {
//     row = document.createElement('tr');
//     row.innerHTML = '<td>' + data[i].location + '</td>' +
//     '<td>' + data[i].minCust + '</td>' +
//     '<td>' + data[i].maxCust + '</td>' +
//     '<td>' + data[i].avgCooPerCus + '</td>';
//   }
//
//   table.appendChild(row);
// }

form.addEventListener('submit', formData);
