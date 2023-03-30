import { Request, Response, NextFunction } from 'express';
import jwt = require ('jsonwebtoken');
import { JwtPayload, Secret } from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

interface AuthRequest extends Request {
  user?: JwtPayload;
}

function validateToken(req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET as Secret) as JwtPayload;
    if (req.user) {
      req.user.email = payload;
    }

    next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError || err instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    next(err as Error);
  }
}

export default validateToken;
