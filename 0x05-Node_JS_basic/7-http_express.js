const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const path = process.argv[2];

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const lines = data.trim().split('\n');
    const students = lines.slice(1); // Remove the header line
    const totalStudents = students.length;
    const fields = {};
    students.forEach((line) => {
      const parts = line.split(',');
      const field = parts[3];
      const firstname = parts[0];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });
    let result = `Number of students: ${totalStudents}\n`;
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }
    }
    resolve(result.trim());
  });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(path)
    .then((studentData) => {
      res.send(`This is the list of our students\n${studentData}`);
    })
    .catch(() => {
      res.send('Cannot load the database');
    });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});

module.exports = app;
