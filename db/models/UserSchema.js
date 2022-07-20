import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    minLength: [4, 'Username is too short'],
  },
  password: {
    type: String,
    required: true,
    minLength: [4, 'Password is too short'],
    select: false,
  },
});

UserSchema.pre('save', async function (next) {
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

UserSchema.methods.isPasswordCorrect = async function (password) {
  return bcryptjs.compare(password, this.password);
};

UserSchema.methods.createJWT = async function () {
  return jsonwebtoken.sign(
    { id: this._id.toString() },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRY,
    }
  );
};

export default mongoose.model('Users', UserSchema);
