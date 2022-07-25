import express from 'express';
import {
  createAnimal,
  getAnimalList,
  getAnimal,
} from '../controllers/animalController.js';

const animalRouter = express.Router();

animalRouter.get('/', getAnimalList);
animalRouter.get('/:animal', getAnimal);
animalRouter.put('/create', createAnimal);

export default animalRouter;
