import React from 'react';
import { Grid, Typography } from '@mui/material';
import { animalTypeCard } from '../../../styles/home/animalTypeBoxStyles';

const AnimalTypeCard = (props) => {
  const { animalType } = props;
  return (
    <Grid container justifyContent="center" sx={animalTypeCard}>
      <Grid item>
        <Typography color="white">{animalType}</Typography>
      </Grid>
    </Grid>
  );
};

export default AnimalTypeCard;
