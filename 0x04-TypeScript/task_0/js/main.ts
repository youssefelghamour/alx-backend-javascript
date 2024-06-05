interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1 : Student = {
    firstName: 'firstname1',
    lastName: 'lastname2',
    age: 21,
    location: 'place1',
  };
  
  const student2 : Student = {
    firstName: 'firstname2',
    lastName: 'lastname2',
    age: 22,
    location: 'place2',
  };
  
  const studentsList: Student[] = [student1, student2];
  
  function renderTable(students: Student[]): void {
    const table = document.createElement('table');
  
    students.forEach((student) => {
      const row = table.insertRow();
      const cell1 = row.insertCell();
      const cell2 = row.insertCell();
  
      cell1.textContent = student.firstName;
      cell2.textContent = student.location;
    });
  
    document.body.appendChild(table);
  }
  
  renderTable(studentsList);  