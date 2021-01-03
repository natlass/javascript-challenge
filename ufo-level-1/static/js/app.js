// from data.js
var tableData = data;

// YOUR CODE HERE!

// Getting a reference to the button on the page
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page
var form = d3.select("form");

// Get a reference to the table body
var tbody = d3.select("tbody");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(event => event.datetime === inputValue);

  console.log(filteredData);

  filteredData.forEach(function(ufo) {
    console.log(ufo);
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row
        var cell = row.append("td");
        cell.text(value);
    });
});

}