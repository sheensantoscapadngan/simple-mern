import React from 'react';
import { Grid, Typography, Input } from '@mui/material';
import { addAnimalInput } from '../../../styles/home/addAnimalStyles';

const AddAnimalInput = (props) => {
  const { inputType, newAnimal, setNewAnimal } = props;
  return (
    <Grid item container>
      <Typography>{inputType}:</Typography>
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
  );
};

export default AddAnimalInput;
