import React from 'react';
import { Grid, Typography, Input } from '@mui/material';
import {
  addAnimalInput,
  addAnimalInputContainer,
} from '../../../styles/home/addAnimalStyles';

const AddAnimalInput = (props) => {
  const { inputType, newAnimal, setNewAnimal } = props;

  const handleAnimalInput = (e) => {
    const newAnimalInput = e.target.value;
    setNewAnimal({ ...newAnimal, [inputType.toLowerCase()]: newAnimalInput });
  };

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
          onChange={(e) => handleAnimalInput(e)}
        />
      </Grid>
    </Grid>
  );
};

export default AddAnimalInput;
