const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    // Process the file content
    const lines = data.trim().split('\n'); // Split the data into lines
    const students = lines.slice(1); // Remove the header line

    const totalStudents = students.length; // Count the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Initialize an object to hold the count of students in each field
    const fields = {};

    students.forEach((line) => {
      const parts = line.split(','); // Split each line by comma
      const field = parts[3]; // The field is the fourth element in the array
      const firstname = parts[0]; // The firstname is the first element in the array

      // If the field doesn't exist in the fields object,
      // initialize it as an empty array
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname); // Add the firstname to the respective field
    });

    // Output the results
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }

    resolve();
  });
});

module.exports = countStudents;
