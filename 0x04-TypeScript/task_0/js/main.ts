interface  Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Daniel",
    lastName: "Solomon",
    age: 24,
    location: "A.A",
};
const student2: Student = {
    firstName: "lisa",
    lastName:  "smith",
    age: 28,
    location: 'London',

};

const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');
const tbody = document.createElement('tbody');
table.appendChild(tbody);
studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
document.body.appendChild(table);
  