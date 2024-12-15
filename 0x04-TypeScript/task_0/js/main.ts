interface Student {
    firstName : string;
    lastName : string;
    age : number;
    location : string;
}
let student1 : Student={
    firstName:'omnia',
    lastName : "Eid",
    age : 23,
    location :'tanta',
} 
let student2 : Student={
    firstName:'Aya',
    lastName : "Eid",
    age : 23,
    location :'tanta',
} 
// creating a Students array
const studentsList :Student[]=[student1,student2];
// Render a table using Vanilla JavaScript
const table = document.createElement("table");
const headerRow = table.insertRow();

// Add table headers
const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
headerRow.appendChild(nameHeader);

const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(locationHeader);

// Append rows for each student
studentsList.forEach((student) => {
  const row = table.insertRow();

  const nameCell = row.insertCell();
  nameCell.textContent = student.firstName;

  const locationCell = row.insertCell();
  locationCell.textContent = student.location;
});

// Append the table to the body
const body = document.querySelector("body");
if (body) {
  body.appendChild(table);
}
