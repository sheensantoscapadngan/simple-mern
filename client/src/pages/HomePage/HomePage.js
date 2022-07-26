import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { StateContext } from '../../App';
import { Box, Typography } from '@mui/material';
import AnimalTypeBox from './components/AnimalTypeBox';
import {
  homePageContainer,
  animalTypeContainer,
  titleText,
} from '../../styles/home/animalTypeBoxStyles';

const HomePage = () => {
  const { state } = useContext(StateContext);
  const [animalTypes, setAnimalTypes] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/api/v1/animals',
        config
      );
      console.log(response.data);
      const data = response.data.animalList;
      setAnimalTypes(data);
    } catch (error) {
      console.log(error);
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
    </Box>
  );
};

export default HomePage;
