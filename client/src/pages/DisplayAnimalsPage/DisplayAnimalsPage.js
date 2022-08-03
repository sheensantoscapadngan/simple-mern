import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { displayAnimalsPage } from '../../styles/displayAnimalsPage/displayAnimalsPageStyles';
import { StateContext } from '../../App';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import { ANIMAL_PER_PAGE } from '../../constants/constants';

const DisplayAnimalsPage = () => {
  const { state } = useContext(StateContext);
  const { animalType } = useParams();
  const navigate = useNavigate();

  const [totalPages, setTotalPages] = useState(0);
  const [animals, setAnimals] = useState([]);

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  };

  const fetchData = async (currentPage = 1) => {
    const response = await axios.get(
      `http://localhost:5000/api/v1/animals/${animalType}?page=${currentPage}`,
      axiosConfig
    );
    const data = response.data;
    const totalNames = data.totalNames;
    const totalPageData = Math.ceil(totalNames / ANIMAL_PER_PAGE);

    setTotalPages(totalPageData);
    setAnimals(data.names);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageNumberClick = (pageNumber) => {
    fetchData(pageNumber);
    navigate(`/animals/${animalType}?page=${pageNumber}`);
  };

  return (
    <Box sx={displayAnimalsPage}>
      List of {animalType}
      {animals.map((animal, index) => {
        return <h3 key={index}>{animal.name}</h3>;
      })}
      <Pagination
        totalPages={totalPages}
        onPageNumberClick={handlePageNumberClick}
      />
    </Box>
  );
};

export default DisplayAnimalsPage;
