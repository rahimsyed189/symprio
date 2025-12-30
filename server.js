import express from 'express';
import sqlite3 from 'sqlite3';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SQLite Database
const db = new sqlite3.Database(path.join(__dirname, 'users.db'), (err) => {
  if (err) {
    console.error('Database error:', err);
  } else {
    console.log('Connected to SQLite database');
    initializeDatabase();
  }
});

// Initialize database tables
function initializeDatabase() {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) {
      console.error('Error creating users table:', err);
    } else {
      console.log('Users table ready');
    }
  });

  db.run(`
    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      date TEXT NOT NULL,
      location TEXT NOT NULL,
      type TEXT DEFAULT 'event',
      link TEXT,
      created_by INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (created_by) REFERENCES users(id)
    )
  `, (err) => {
    if (err) {
      console.error('Error creating events table:', err);
    } else {
      console.log('Events table ready');
      // Add link column if it doesn't exist
      db.run(`ALTER TABLE events ADD COLUMN link TEXT`, (altErr) => {
        if (altErr && !altErr.message.includes('duplicate column')) {
          console.log('Link column added to events');
        }
      });
    }
  });

  db.run(`
    CREATE TABLE IF NOT EXISTS trainings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      date TEXT NOT NULL,
      duration TEXT NOT NULL,
      instructor TEXT NOT NULL,
      capacity INTEGER DEFAULT 50,
      enrolled INTEGER DEFAULT 0,
      link TEXT,
      created_by INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (created_by) REFERENCES users(id)
    )
  `, (err) => {
    if (err) {
      console.error('Error creating trainings table:', err);
    } else {
      console.log('Trainings table ready');
      // Add link column if it doesn't exist
      db.run(`ALTER TABLE trainings ADD COLUMN link TEXT`, (altErr) => {
        if (altErr && !altErr.message.includes('duplicate column')) {
          console.log('Link column added to trainings');
        }
      });
    }
  });
}

// Register endpoint
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Validation
    if (!email || !password || !name) {
      return res.status(400).json({ error: 'Email, password, and name are required' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    db.run(
      'INSERT INTO users (email, password, name) VALUES (?, ?, ?)',
      [email, hashedPassword, name],
      function(err) {
        if (err) {
          if (err.message.includes('UNIQUE')) {
            return res.status(400).json({ error: 'Email already registered' });
          }
          return res.status(500).json({ error: 'Registration failed' });
        }

        // Generate JWT
        const token = jwt.sign({ id: this.lastID, email }, JWT_SECRET, { expiresIn: '7d' });
        res.status(201).json({
          success: true,
          token,
          user: { id: this.lastID, email, name }
        });
      }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login endpoint
app.post('/api/auth/login', (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }

      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Compare passwords
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Generate JWT
      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
      res.json({
        success: true,
        token,
        user: { id: user.id, email: user.email, name: user.name }
      });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Verify token endpoint
app.post('/api/auth/verify', (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    res.json({ valid: true, user: decoded });
  } catch (error) {
    res.status(401).json({ valid: false, error: 'Invalid token' });
  }
});

// Get user profile
app.get('/api/auth/profile', (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    db.get('SELECT id, email, name, created_at FROM users WHERE id = ?', [decoded.id], (err, user) => {
      if (err || !user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Middleware to verify JWT
const verifyJWT = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// ========== EVENTS ENDPOINTS ==========

// Get all events
app.get('/api/events', (req, res) => {
  db.all('SELECT * FROM events ORDER BY date DESC', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(rows || []);
  });
});

// Add new event (admin only)
app.post('/api/events', verifyJWT, (req, res) => {
  try {
    const { title, description, date, location, type, link } = req.body;

    if (!title || !description || !date || !location) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    db.run(
      'INSERT INTO events (title, description, date, location, type, link, created_by) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [title, description, date, location, type || 'event', link || null, req.user.id],
      function(err) {
        if (err) {
          return res.status(500).json({ error: 'Failed to create event' });
        }
        res.status(201).json({
          success: true,
          event: {
            id: this.lastID,
            title,
            description,
            date,
            location,
            type: type || 'event',
            link: link || null
          }
        });
      }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete event (admin only)
app.delete('/api/events/:id', verifyJWT, (req, res) => {
  try {
    db.run('DELETE FROM events WHERE id = ? AND created_by = ?', [req.params.id, req.user.id], function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to delete event' });
      }
      res.json({ success: true, message: 'Event deleted' });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ========== TRAININGS ENDPOINTS ==========

// Get all trainings
app.get('/api/trainings', (req, res) => {
  db.all('SELECT * FROM trainings ORDER BY date DESC', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(rows || []);
  });
});

// Add new training (admin only)
app.post('/api/trainings', verifyJWT, (req, res) => {
  try {
    const { title, description, date, duration, instructor, capacity, link } = req.body;

    if (!title || !description || !date || !duration || !instructor) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    db.run(
      'INSERT INTO trainings (title, description, date, duration, instructor, capacity, link, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [title, description, date, duration, instructor, capacity || 50, link || null, req.user.id],
      function(err) {
        if (err) {
          return res.status(500).json({ error: 'Failed to create training' });
        }
        res.status(201).json({
          success: true,
          training: {
            id: this.lastID,
            title,
            description,
            date,
            duration,
            instructor,
            capacity: capacity || 50,
            enrolled: 0,
            link: link || null
          }
        });
      }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete training (admin only)
app.delete('/api/trainings/:id', verifyJWT, (req, res) => {
  try {
    db.run('DELETE FROM trainings WHERE id = ? AND created_by = ?', [req.params.id, req.user.id], function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to delete training' });
      }
      res.json({ success: true, message: 'Training deleted' });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Auth server running on http://localhost:${PORT}`);
});
