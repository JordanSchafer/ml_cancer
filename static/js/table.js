
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
         var row = tbody.append("tr");
        var cell0 = row.append("td");
        cell0.text(dataRow["id"])

        var cell1 = row.append("td");
        cell1.text(dataRow["diagnosis"])

        var cell2 = row.append("td");
        cell2.text(dataRow["radius_mean"])

        var cell3 = row.append("td");
        cell3.text(dataRow["texture_mean"])

        var cell4 = row.append("td");
        cell4.text(dataRow["perimeter_mean"])

        var cell5 = row.append("td");
        cell5.text(dataRow["area_mean"])

        var cell6 = row.append("td");
        cell6.text(dataRow["smoothness_mean"])

        var cell7 = row.append("td");
        cell7.text(dataRow["compactness_mean"])

        var cell8 = row.append("td");
        cell8.text(dataRow["concavity_mean"])

        var cell9 = row.append("td");
        cell9.text(dataRow["concave points_mean"])

        var cell10 = row.append("td");
        cell10.text(dataRow["symmetry_mean"])

        var cell11 = row.append("td");
        cell11.text(dataRow["fractal_dimension_mean"])

        var cell12 = row.append("td");
        cell12.text(dataRow["radius_se"])

        var cell13 = row.append("td");
        cell13.text(dataRow["texture_se"])

        var cell14 = row.append("td");
        cell14.text(dataRow["perimeter_se"])

        var cell15 = row.append("td");
        cell15.text(dataRow["area_se"])

        var cell16 = row.append("td");
        cell16.text(dataRow["smoothness_se"])

        var cell17 = row.append("td");
        cell17.text(dataRow["compactness_se"])

        var cell18 = row.append("td");
        cell18.text(dataRow["concavity_se"])

        var cell19 = row.append("td");
        cell19.text(dataRow["concave points_se"])

        var cell20 = row.append("td");
        cell20.text(dataRow["symmetry_se"])

        var cell21 = row.append("td");
        cell21.text(dataRow["fractal_dimension_se"])

        var cell22 = row.append("td");
        cell22.text(dataRow["radius_worst"])

        var cell23 = row.append("td");
        cell23.text(dataRow["texture_worst"])

        var cell24 = row.append("td");
        cell24.text(dataRow["perimeter_worst"])

        var cell25 = row.append("td");
        cell25.text(dataRow["area_worst"])

        var cell26 = row.append("td");
        cell26.text(dataRow["smoothness_worst"])

        var cell27 = row.append("td");
        cell27.text(dataRow["compactness_worst"])

        var cell28 = row.append("td");
        cell28.text(dataRow["concavity_worst"])

        var cell29 = row.append("td");
        cell29.text(dataRow["concave points_worst"])

        var cell30 = row.append("td");
        cell30.text(dataRow["symmetry_worst"])

        var cell31 = row.append("td");
        cell31.text(dataRow["fractal_dimension_worst"])
    });
}


const tbody=d3.select("tbody");
d3.json('https://machinelearningcancer.herokuapp.com/data.json',(error,data) =>{
    buildTable(data);

 $(document).ready(function(){
     $('#myTable').DataTable({
        "scrollX": true,
         "pageLength":25,
         "order":[[5,'asc']]
     });
 });
});