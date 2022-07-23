import { DUPLICATE_KEY_ERROR_CODE } from '../constants/mongoDbErrorCodes.js';
import UserSchema from '../db/models/userSchema.js';
import { InvalidRequestError, ServerError } from '../utils/CustomErrors.js';
import jsonwebtoken from 'jsonwebtoken';

export const signUp = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new InvalidRequestError('Please provide username and password');
  }

  try {
    const user = await UserSchema.create({
      username: username,
      password: password,
    });

    res.status(201).json({
      success: true,
      data: { username: user.username },
      msg: 'Successfully created account!',
    });
  } catch (error) {
    if (error.code && error.code === DUPLICATE_KEY_ERROR_CODE) {
      throw new InvalidRequestError('Username already taken');
    }
    const possibleMongoDbErrors = Object.values(error?.errors)
      ?.map((er) => er?.properties?.message)
      .join(', ');
    if (possibleMongoDbErrors) {
      throw new InvalidRequestError(possibleMongoDbErrors);
    }
    throw new ServerError('Something went wrong');
  }
};

export const logIn = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new InvalidRequestError('Please provide username and password');
  }

  try {
    const user = await UserSchema.findOne({ username: username }).select(
      '+password'
    );

    if (!user) {
      return res.status(400).json({ success: false, msg: 'User not found' });
    }

    if (await user.isPasswordCorrect(password)) {
      const token = await user.createJWT();
      return res
        .status(200)
        .json({ success: true, msg: 'Successfully logged in!', token: token });
    } else {
      res.status(400).json({ success: false, msg: 'Password is incorrect' });
    }
  } catch (error) {
    console.error(error);
    const possibleMongoDbErrors = Object.values(error?.errors)
      ?.map((er) => er?.properties?.message)
      .join(', ');
    if (possibleMongoDbErrors) {
      throw new InvalidRequestError(possibleMongoDbErrors);
    }
    throw new ServerError('Something went wrong');
  }
};
