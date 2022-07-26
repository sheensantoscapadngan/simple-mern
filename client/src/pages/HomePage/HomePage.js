import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { StateContext } from '../../App';

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
    <div>
      <h1>HomePage</h1>
      <h2>Animal Types:</h2>
      {animalTypes.map((animalType) => {
        return (
          <>
            <h3>{animalType}</h3>
          </>
        );
      })}
    </div>
  );
};

export default HomePage;
