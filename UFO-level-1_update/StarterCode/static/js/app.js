// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody =d3.select("tbody");

// Loop through a list of objects

function loadData(ufo) {
    tbody.text("")
    ufo.forEach(function(UFOSightings) {
        // Add rows in the table
        var row = tbody.append("tr"); 
        // Add value of the data in the table
        Object.entries(UFOSightings).forEach(function([key, value]) {
            row.append("td").text(value);
        });
    })
}

loadData(tableData);

var button = d3.select("#filter-btn");
// function for clicking the button
button.on("click", function() {
    //tbody.html("");
    // prevent page from refreshing
    d3.event.preventDefault();
    var inputDate = d3.select("#datetime");
    //var input_date = inputDate.preperty("value");
    console.log(inputDate.property("value"))

    // filter the input
    var filtered_date = tableData.filter(UFOSightings => { 
        return (UFOSightings.datetime === inputDate.property("value") || !inputDate.property("value"))

    //filtered_date.forEach((filter) => {
      //  var row =tbody.append("tr");
        //Object.entries(filter).forEach(([key, value]) => {
          //  row.append("td").text(value);
        //});
    })
    
    loadData(filtered_date)

});

var filterInsert = d3.selectAll('.form-control');

// clear input fields and objects
function emptyObjects() {
    sort = {}

    // filter every input field to empty
    filterInput._group[0].forEach(entry => {
        if(entry.value !=0) {
            d3.select('#' + entry.id).node().value = "";
        }
    });
};

var eraseButton = d3.select("#clear");
eraseButton.on('click', function() {
    d3.event.preventDefault();
    emptyObjects()

});
