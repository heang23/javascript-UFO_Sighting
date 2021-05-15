// from data.js
var tableData = data;

// YOUR CODE HERE!

var button = d3.select("#filter-btn");
var tbody =d3.select("tbody");
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var arrays = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];

// Loop through a list of objects
var loadData = (inputData) => {
    data.forEach(UFOSightings => {
        //load the data
        console.log(UFOSightings);
        // Add rows in the table
        var row = tbody.append("tr"); 
        // Add value of the data in the table
        arrays.forEach(array => {
            row.append("td").text(UFOSightings[array])
        })
    });
}

loadData(tableData);

button.on("click", runEnter);

// function for clicking the button
function runEnter(){
    // prevent page from refreshing
    d3.event.preventDefault();

    var input_date = inputDate.preperty("value").trim();
    console.log(input_date);

    var city_data = inputCity.property("value").trim();

    var input_city = city_data.toUpperCase();

    // filter the input
    var filtered_date = tableData.filter(tableData => tableData.datetime == input_date);

    var filtered_city = tableData.filter(tableData => tableData.city == input_city);

    var mergedData = tableData.filter(tableData => tableData == input_date && tableData.city == input_city);

    tbody.html("");

    let response = {filtered_date, filtered_city, mergedData}

    if(response.mergedData.length !==0){
        loadData(mergedData);
    }
    else if(response.mergedData.length == 0 && ((response.filtered_date.length !== 0 || response.filtered_city.length !== 0))){
        loadData(filtered_date) || loadData(filtered_city);
    }
    else{
        tbody.append("tr").append("td").text("Not Applicable");
    }
}
