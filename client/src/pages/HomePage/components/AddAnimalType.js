import React from 'react';
import { Grid, Typography, Input, Button } from '@mui/material';
import {
  addAnimalTypeContainer,
  addAnimalTypeButton,
  addAnimalTypeInput,
} from '../../../styles/home/animalTypeBoxStyles';

const AddAnimalType = () => {
  return (
    <Grid
      container
      sx={addAnimalTypeContainer}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item md={4}>
        <Typography>Add Animal Type:</Typography>
      </Grid>
      <Grid item md={6}>
        <Input sx={addAnimalTypeInput} />
      </Grid>
      <Grid item md={2}>
        <Button sx={addAnimalTypeButton}>Add</Button>
      </Grid>
    </Grid>
  );
};

export default AddAnimalType;
