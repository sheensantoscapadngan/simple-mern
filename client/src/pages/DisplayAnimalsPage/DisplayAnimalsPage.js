import React, { useContext, useEffect } from 'react';
import { Box } from '@mui/material';
import { displayAnimalsPage } from '../../styles/displayAnimalsPage/displayAnimalsPageStyles';
import { StateContext } from '../../App';
import axios from 'axios';

const DisplayAnimalsPage = () => {
  const { state } = useContext(StateContext);

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  };

  const fetchData = async () => {
    const response = await axios.get(
      'http://localhost:5000/api/v1/animals/:animal',
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
