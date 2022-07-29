import React from 'react';
import { Grid, Typography, Input } from '@mui/material';
import {
  addAnimalInput,
  addAnimalInputContainer,
  addAnimalInputLabel,
} from '../../../styles/home/addAnimalStyles';

const AddAnimalInput = (props) => {
  const { inputType, newAnimal, setNewAnimal } = props;
  return (
    <Grid
      item
      container
      sx={addAnimalInputContainer}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item md={3}>
        <Typography>{inputType}:</Typography>
      </Grid>
      <Grid md={9} item>
        <Input
          sx={addAnimalInput}
          value={newAnimal[inputType.toLowerCase()]}
          onChange={(e) =>
            setNewAnimal({
              ...newAnimal,
              [inputType.toLowerCase()]: e.target.value,
            })
          }
        />
      </Grid>
    </Grid>
  );
};

export default AddAnimalInput;
