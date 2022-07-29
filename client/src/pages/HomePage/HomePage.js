import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { StateContext } from '../../App';
import { Box, Typography } from '@mui/material';
import AnimalTypeBox from './components/AnimalTypeBox';
import AddAnimal from './components/AddAnimal';
import {
  homePageContainer,
  animalTypeContainer,
  titleText,
} from '../../styles/home/animalTypeBoxStyles';

const HomePage = () => {
  const { state } = useContext(StateContext);
  const [animalTypes, setAnimalTypes] = useState([]);

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/api/v1/animals',
        axiosConfig
      );
      const data = response.data.animalList;
      setAnimalTypes(data);
    } catch (error) {
      console.error(error.response);
    }
  };

  const addAnimal = async (newAnimal) => {
    const { name, type } = newAnimal;
    try {
      const response = await axios.put(
        'http://localhost:5000/api/v1/animals/create',
        { type, name },
        axiosConfig
      );
      fetchData();
    } catch (error) {
      console.error(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={homePageContainer}>
      <Typography variant="h2" sx={titleText}>
        Pet oPet
      </Typography>
      <AnimalTypeBox sx={animalTypeContainer} animalTypes={animalTypes} />
      <AddAnimal addAnimal={addAnimal} />
    </Box>
  );
};

export default HomePage;
