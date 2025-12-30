import jwt from 'jsonwebtoken';

export function getToken(req) {
  const h = req.headers.authorization || '';
  const parts = h.split(' ');
  if (parts[0] === 'Bearer' && parts[1]) return parts[1];
  return null;
}

export function verify(req) {
  const token = getToken(req);
  if (!token) return null;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key-change-in-production');
    return decoded;
  } catch {
    return null;
  }
}
