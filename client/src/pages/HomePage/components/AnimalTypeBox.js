import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { animalTypeContainer } from '../../../styles/home/animalTypeBoxStyles';
import AnimalTypeCard from './AnimalTypeCard';
import { petListText } from '../../../styles/home/animalTypeBoxStyles';
import AddAnimalType from './AddAnimalType';

const AnimalTypeBox = (props) => {
  const { animalTypes } = props;
  return (
    <Box sx={animalTypeContainer}>
      <Typography variant="h4" sx={petListText}>
        List of Pets
      </Typography>
      <AddAnimalType />
      <Grid container justifyContent="space-evenly">
        {animalTypes.map((animalType) => {
          return (
            <Grid item md={3}>
              <AnimalTypeCard animalType={animalType} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default AnimalTypeBox;
