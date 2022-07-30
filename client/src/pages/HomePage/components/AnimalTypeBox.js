import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import {
  animalTypeContainer,
  petListText,
} from '../../../styles/home/animalTypeBoxStyles';
import AnimalTypeCard from './AnimalTypeCard';

const AnimalTypeBox = (props) => {
  const { animalTypes } = props;
  return (
    <Box sx={animalTypeContainer}>
      <Typography variant="h4" sx={petListText}>
        List of Pets
      </Typography>
      <Grid container spacing={5} justifyContent="space-evenly">
        {animalTypes.map((animalType) => {
          return (
            <Grid item md={4}>
              <AnimalTypeCard animalType={animalType} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default AnimalTypeBox;
