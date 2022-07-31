import React, { useContext, useEffect } from 'react';
import { Box } from '@mui/material';
import { displayAnimalsPage } from '../../styles/displayAnimalsPage/displayAnimalsPageStyles';
import { StateContext } from '../../App';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DisplayAnimalsPage = () => {
  const { state } = useContext(StateContext);
  const { animalType } = useParams();

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  };

  const fetchData = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/v1/animals/${animalType}`,
      axiosConfig
    );
    const data = response.data;
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <Box sx={displayAnimalsPage}>All Animals</Box>;
};

export default DisplayAnimalsPage;
