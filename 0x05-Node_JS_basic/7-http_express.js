const fs = require('fs').promises;
const express = require('express');

const app = express();

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1).map((line) => line.split(','));
    const fields = {};

    students.forEach((student) => {
      const field = student[3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student[0]);
    });
    let result = `Number of students: ${students.length}\n`;
    for (const [fds, names] of Object.entries(fields)) {
      result += `Number of students in ${fds}: ${names.length}. List: ${names.join(', ')}\n`;
    }
    return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];
  try {
    const studentData = await countStudents(databasePath);
    res.send(`This is the list of our students\n${studentData}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];
  try {
    const content = await countStudents(databasePath);
    res.send(`This is the list of our students\n${content}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});
module.exports = app;
