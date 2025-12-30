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
    seedData();
  }
});

function seedData() {
  // Clear existing events
  db.run('DELETE FROM events', (err) => {
    if (err) console.error('Error clearing events:', err);
  });

  // Clear existing trainings
  db.run('DELETE FROM trainings', (err) => {
    if (err) console.error('Error clearing trainings:', err);
  });

  // Add events
  const events = [
    {
      title: 'RPA Summit 2024',
      description: 'Join industry leaders discussing the future of automation',
      date: 'Dec 15, 2024',
      location: 'Virtual Event',
      type: 'Featured'
    },
    {
      title: 'Automation Workshop',
      description: 'Hands-on training for RPA best practices',
      date: 'Dec 20, 2024',
      location: 'New York, USA',
      type: 'Live'
    },
    {
      title: 'AI & Automation Conference',
      description: 'Explore the latest in AI-powered automation',
      date: 'Jan 10, 2025',
      location: 'San Francisco, USA',
      type: 'Featured'
    },
    {
      title: 'RPA Best Practices Webinar',
      description: 'Learn industry best practices from our experts',
      date: 'Jan 15, 2025',
      location: 'Virtual Event',
      type: 'Live'
    }
  ];

  events.forEach((event) => {
    db.run(
      'INSERT INTO events (title, description, date, location, type) VALUES (?, ?, ?, ?, ?)',
      [event.title, event.description, event.date, event.location, event.type],
      function(err) {
        if (err) {
          console.error('Error inserting event:', err);
        } else {
          console.log('Event added:', event.title);
        }
      }
    );
  });

  // Add trainings
  const trainings = [
    {
      title: 'RPA Fundamentals',
      description: 'Learn the basics of Robotic Process Automation',
      date: 'Dec 20, 2024',
      duration: '4 weeks',
      instructor: 'John Smith',
      capacity: 50
    },
    {
      title: 'Advanced Automation',
      description: 'Master advanced automation techniques',
      date: 'Jan 5, 2025',
      duration: '6 weeks',
      instructor: 'Jane Doe',
      capacity: 40
    },
    {
      title: 'AI & ML for Automation',
      description: 'Integrate AI and Machine Learning with RPA',
      date: 'Jan 15, 2025',
      duration: '8 weeks',
      instructor: 'Mike Johnson',
      capacity: 35
    }
  ];

  trainings.forEach((training) => {
    db.run(
      'INSERT INTO trainings (title, description, date, duration, instructor, capacity) VALUES (?, ?, ?, ?, ?, ?)',
      [training.title, training.description, training.date, training.duration, training.instructor, training.capacity],
      function(err) {
        if (err) {
          console.error('Error inserting training:', err);
        } else {
          console.log('Training added:', training.title);
        }
      }
    );
  });

  setTimeout(() => {
    console.log('\n✅ Database seeded successfully!');
    db.close();
  }, 1000);
}
