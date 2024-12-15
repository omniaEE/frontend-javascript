var student1 = {
    firstName: 'omnia',
    lastName: "Eid",
    age: 23,
    location: 'tanta',
};
var student2 = {
    firstName: 'Aya',
    lastName: "Eid",
    age: 23,
    location: 'tanta',
};
// creating a Students array
var studentsList = [student1, student2];
// Render a table using Vanilla JavaScript
var table = document.createElement("table");
var headerRow = table.insertRow();
// Add table headers
var nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
headerRow.appendChild(nameHeader);
var locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(locationHeader);
// Append rows for each student
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var nameCell = row.insertCell();
    nameCell.textContent = student.firstName;
    var locationCell = row.insertCell();
    locationCell.textContent = student.location;
});
// Append the table to the body
var body = document.querySelector("body");
if (body) {
    body.appendChild(table);
}
