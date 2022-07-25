import { InvalidRequestError } from '../utils/CustomErrors.js';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const AuthHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new InvalidRequestError('Authentication Invalid');
  }

  const token = authHeader.split(' ')[1];
  try {
    const user = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    throw new InvalidRequestError('Authentication Failed');
  }
};

export default AuthHandler;
