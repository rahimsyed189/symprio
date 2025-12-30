import { sql, ensureTables } from '../_lib/db.js';
import { verify } from '../_lib/auth.js';
import { readBody } from '../_lib/body.js';

export default async function handler(req, res) {
  await ensureTables();
  if (req.method === 'GET') {
    try {
      const result = await sql`SELECT * FROM events ORDER BY date DESC`;
      res.json(result.rows || []);
    } catch {
      res.status(500).json({ error: 'Database error' });
    }
    return;
  }
  if (req.method === 'POST') {
    const decoded = verify(req);
    if (!decoded) {
      res.status(401).json({ error: 'Invalid token' });
      return;
    }
    const { title, description, date, location, type } = await readBody(req);
    if (!title || !description || !date || !location) {
      res.status(400).json({ error: 'All fields are required' });
      return;
    }
    try {
      const result = await sql`INSERT INTO events (title, description, date, location, type, created_by) VALUES (${title}, ${description}, ${date}, ${location}, ${type || 'event'}, ${decoded.id}) RETURNING id`;
      const id = result.rows[0].id;
      res.status(201).json({ success: true, event: { id, title, description, date, location, type: type || 'event' } });
    } catch {
      res.status(500).json({ error: 'Failed to create event' });
    }
    return;
  }
  res.status(405).json({ error: 'Method not allowed' });
}
