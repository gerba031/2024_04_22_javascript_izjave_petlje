var tableBegin = "<table><thead><tr><th>Ime</th><th>Prezime</th></tr></thead><tbody>";
var tableEnd = "</tbody></table>";

var rowBegin = "<tr>";
var rowEnd = "</tr>";


var rowData = "";
var row = "";
for (var i = 1; i <= 20; i++) {
    //"<td>Ime</td><td>Prezime</td>";
    row += rowBegin; // <tr>
    rowData = "<td>ime" + i + "</td><td>prezime" + i + "</td>"; // formiramo podatke
    row += rowData; // formirani podaci dodani u varijablu "row"
    row += rowEnd; // </tr>
    // <tr><td>ime1</td><td>prezime1</td></tr>...<tr><td>ime2</td><td>prezime2</td></tr>
}


// var row = rowBegin + rowData + rowEnd;

document.write(tableBegin + row + tableEnd);
console.log(tableBegin + row + tableEnd);