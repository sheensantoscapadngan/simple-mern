import React, { useState } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import {
  addAnimalButton,
  addAnimalContainer,
} from '../../../styles/home/addAnimalStyles';
import AddAnimalInput from './AddAnimalInput';

const AddAnimal = (props) => {
  const { addAnimal } = props;
  const [newAnimal, setNewAnimal] = useState({
    name: '',
    type: '',
  });

  return (
    <Grid
      container
      sx={addAnimalContainer}
      justifyContent="space-evenly"
      alignItems="center"
      direction="column"
    >
      <Grid item>
        <Typography variant="h5">Add Animal</Typography>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <AddAnimalInput
          inputType="Name"
          newAnimal={newAnimal}
          setNewAnimal={setNewAnimal}
        />
        <AddAnimalInput
          inputType="Type"
          newAnimal={newAnimal}
          setNewAnimal={setNewAnimal}
        />
      </Grid>
      <Grid item>
        <Button sx={addAnimalButton} onClick={() => addAnimal(newAnimal)}>
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddAnimal;
