const { createServer } = require('http');
const url = require('url');
const fs = require('fs');

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

const app = createServer((req, res) => {
  const reqUrl = url.parse(req.url, true).pathname;
  if (reqUrl === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (reqUrl === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    countStudents(path)
      .then((studentData) => {
        res.end(`This is the list of our students\n${studentData}`);
      })
      .catch(() => {
        res.end('This is the list of our students\nCannot load the database');
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
