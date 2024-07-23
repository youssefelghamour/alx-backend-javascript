const fs = require('fs');

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const lines = data.trim().split('\n');
    const students = lines.slice(1); // Remove the header line
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

    resolve(fields);
  });
});

module.exports = readDatabase;
