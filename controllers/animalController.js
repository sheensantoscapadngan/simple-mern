import mongoose from 'mongoose';
import AnimalSchema from '../db/models/AnimalSchema.js';
import { InvalidRequestError, ServerError } from '../utils/CustomErrors.js';
import UserSchema from '../db/models/userSchema.js';

export const getAnimalList = async (req, res) => {
  const collections = await mongoose.connection.db.listCollections().toArray();
  const collectionNames = collections
    .filter((collection) => collection.name !== 'users')
    .map((collection) => collection.name);
  res.status(200).send({ success: true, animalList: collectionNames });
};

const doesCollectionExist = async (collectionName) => {
  const collections = await (
    await mongoose.connection.db.listCollections().toArray()
  ).map((collection) => collection.name);

  return collections.includes(collectionName);
};

export const getAnimal = async (req, res) => {
  const { animal } = req.params;

  if (!animal) {
    throw new InvalidRequestError('Please provide Animal type');
  }

  try {
    if (!(await doesCollectionExist(animal))) {
      return res.status(400).json({
        success: false,
        msg: 'Animal does not exist',
      });
    }

    const AnimalModel = mongoose.model(animal, AnimalSchema);

    const limit = 10;
    const page = Number(req.query.page) || 1;
    const skip = (page - 1) * limit;

    const allNames = (await AnimalModel.find({}).skip(skip).limit(limit)).map(
      (_animal) => ({
        name: _animal.name,
        owners: _animal.owners,
      })
    );

    const totalNames = await AnimalModel.countDocuments();

    res.status(200).json({
      success: true,
      names: allNames,
      totalNames: totalNames,
    });
  } catch (error) {
    console.error(error);
    throw new ServerError('Something went wrong');
  }
};

export const createAnimal = async (req, res) => {
  const { type, name } = req.body;

  if (!type || !name) {
    throw new InvalidRequestError('Please provide Animal type or name');
  }

  try {
    const user = await UserSchema.findOne({ _id: req.user.id });
    const AnimalModel = mongoose.model(type, AnimalSchema);

    const animal = await AnimalModel.findOne({ name: name });

    if (animal) {
      const allOwnerUsernames = [...animal.owners, user.username];
      animal.owners = allOwnerUsernames;
      animal.save();
      return res.status(200).json({
        success: true,
        type: type,
        name: name,
        owners: allOwnerUsernames,
      });
    }

    await AnimalModel.create({
      name: name,
      owners: [user.username],
    });

    res.status(200).json({
      success: true,
      type: type,
      name: name,
      owners: user.username,
    });
  } catch (error) {
    console.error(error);
    throw new ServerError('Something went wrong');
  }
};
