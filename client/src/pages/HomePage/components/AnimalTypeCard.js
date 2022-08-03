import React from 'react';
import { Grid, Typography } from '@mui/material';
import { animalTypeCard } from '../../../styles/home/animalTypeBoxStyles';
import { Link } from 'react-router-dom';

const AnimalTypeCard = (props) => {
  const { animalType } = props;

  return (
    <Link to={`/animals/${animalType}`}>
      <Grid item container justifyContent="center" sx={animalTypeCard}>
        <Grid item>
          <Typography color="white">{animalType}</Typography>
        </Grid>
      </Grid>
    </Link>
  );
};

export default AnimalTypeCard;
