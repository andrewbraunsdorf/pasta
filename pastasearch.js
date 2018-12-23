var name = "Pasta Italian";
var address = "145 Federal Hill, Providence, RI. 02860";
var rating = 4.4;
var numOfDish = 20;
var numOfTable = ["Table1", "Table2", "Table3", "Table4"];
var numOfCustomer = 10;
var avgPlate = 23;
var avgDineTime = 1.5;
var hoursOpen = 12;

var total = numOfTable.length * numOfCustomer * avgPlate; 
var turnover = hoursOpen / avgDineTime;
var revenue = total * turnover;

var restaurantCapacity = numOfTable.length * numOfCustomer; // 40
var tableTurnsPerDay = hoursOpen / avgDineTime; // 8
var totalPeopleDay  = tableTurnsPerDay * restaurantCapacity; // 320

var maxSalesPerDay = totalPeopleDay * avgPlate; 

console.log(name, "has a Yelp rating of", rating, "and is located at", address + ".");
console.log("The amount of money you can make in a day is", revenue.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) + ".");
console.log("Manager, manager, the amount of money you can make in a day is,", revenue.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) + "." );

