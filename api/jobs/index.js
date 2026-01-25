import { sql, ensureTables } from '../_lib/db.js';
import { verify } from '../_lib/auth.js';
import { readBody } from '../_lib/body.js';

export default async function handler(req, res) {
  await ensureTables();
  if (req.method === 'GET') {
    try {
      const result = await sql`SELECT * FROM jobs WHERE status = 'active' ORDER BY created_at DESC`;
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
    const { title, department, type, description, location } = await readBody(req);
    if (!title || !department || !type || !description) {
      res.status(400).json({ error: 'All fields are required' });
      return;
    }
    try {
      const result = await sql`INSERT INTO jobs (title, department, type, description, location, status, created_by) VALUES (${title}, ${department}, ${type}, ${description}, ${location || 'Remote'}, 'active', ${decoded.id}) RETURNING id`;
      const id = result.rows[0].id;
      res.status(201).json({ success: true, job: { id, title, department, type, description, location } });
    } catch {
      res.status(500).json({ error: 'Failed to create job' });
    }
    return;
  }
  res.status(405).json({ error: 'Method not allowed' });
}
