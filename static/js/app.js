// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    //#1. clear out any existing data in table
    tbody.html("");

// #2. loop through each object in the data
// and append a row and cells for each value in row
data.forEach((dataRow) => {
    //append a row to the table body
    let row = tbody.append("tr");
    // loop through each field in the data row and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}