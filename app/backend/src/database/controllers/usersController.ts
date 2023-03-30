import { Request, Response } from 'express';
import bcrypt = require('bcryptjs');
import jwt = require('jsonwebtoken');
import User from '../../interfaces/user.interface';
import UsersService from '../services/usersService';

class UsersController {
  // Login
  public static async login(req: Request, res: Response) {
    // Verificar de o JWT_SECRET esta definido e se não estiver definir um valor padrão ''
    const JWT_SECRET = process.env.JWT_SECRET ?? '';
    const { email, password } = req.body;
    const errorMessage = 'Invalid email or password';
    const user : User | null = await UsersService.getUserByEmail(email);
    if (!user) return res.status(401).json({ message: errorMessage });

    if (!user.password) return res.status(401).json({ message: errorMessage });
    await bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.log(err, result);
        return res.status(401).json({ message: errorMessage });
      } if (result === true) {
        const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({ token });
      }
      return res.status(401).json({ message: errorMessage });
    });
  }
}
export default UsersController;
