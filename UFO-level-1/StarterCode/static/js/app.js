// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody =d3.select("tbody");

// Loop through a list of objects

data.forEach((UFOSightings => {
    //load the data
    console.log(UFOSightings);
    // Add rows in the table
    var row = tbody.append("tr"); 
    // Add value of the data in the table
    Object.entries(UFOSightings).forEach(([key, value]) => {
        row.append("td").text(value);
    });
}))

//loadData(tableData);

var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html("");
// function for clicking the button

    // prevent page from refreshing
    d3.event.preventDefault();
    var inputDate = d3.select("#datetime");
    var input_date = inputDate.preperty("value");
    console.log(input_date)

    // filter the inpute
    var filtered_date = tableData.filter(UFOSightings => UFOSightings.datetime === input_date);

    filtered_date.forEach((filter) => {
        var row =tbody.appen("tr");
        Object.entries(filter).forEach(([key, value]) => {
            row.append("td").text(value);
        });
    });
});

button.on("change", runEnter);

///// Insert any dates to see the table
