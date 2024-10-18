const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('./database/blog.sqlite3', (err) => {
  if (err) {
    console.error(' Error opening the database:', err.message);
  } else {
    console.log('connected to blog database.')
  }
});

function initDb() {
  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTs posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title VARCHAR(255),
      content TEXT
      )`, (err) => {
      if (err) {
        console.error('Error creating table:', err.message);
      } else {
        console.log('Posts table created or already exists.');
      }
    });
  });
}
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err.message);
    } else {
      console.log('Database connection closed.');
    }
    process.exit(0);
  });
});
module.exports = { initDb }