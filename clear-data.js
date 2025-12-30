import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new sqlite3.Database(path.join(__dirname, 'users.db'), (err) => {
  if (err) {
    console.error('Database error:', err);
  } else {
    console.log('Connected to SQLite database');
    clearData();
  }
});

function clearData() {
  // Clear events
  db.run('DELETE FROM events', (err) => {
    if (err) {
      console.error('Error clearing events:', err);
    } else {
      console.log('✅ All events cleared');
    }
  });

  // Clear trainings
  db.run('DELETE FROM trainings', (err) => {
    if (err) {
      console.error('Error clearing trainings:', err);
    } else {
      console.log('✅ All trainings cleared');
    }
  });

  setTimeout(() => {
    console.log('\n✅ Database cleared successfully! You can now add your own data.');
    db.close();
  }, 500);
}
