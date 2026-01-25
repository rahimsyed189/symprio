import { sql, ensureTables } from '../_lib/db.js';
import { verify } from '../_lib/auth.js';

export default async function handler(req, res) {
  await ensureTables();
  
  if (req.method === 'DELETE') {
    const decoded = verify(req);
    if (!decoded) {
      res.status(401).json({ error: 'Invalid token' });
      return;
    }
    
    const { id } = req.query;
    if (!id) {
      res.status(400).json({ error: 'Job ID is required' });
      return;
    }
    
    try {
      await sql`DELETE FROM jobs WHERE id = ${id}`;
      res.json({ success: true, message: 'Job deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete job' });
    }
    return;
  }
  
  res.status(405).json({ error: 'Method not allowed' });
}
