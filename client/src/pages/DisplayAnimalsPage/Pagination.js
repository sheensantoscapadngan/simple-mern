import React from 'react';
import { Grid, Typography } from '@mui/material';

const Pagination = (props) => {
  const { totalPages, onPageNumberClick: handlePageNumberClick } = props;
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Typography>Page Numbers</Typography>
      <Grid container justifyContent="center">
        {pageNumbers.map((number) => {
          return (
            <Grid
              item
              key={number}
              onClick={() => handlePageNumberClick(number)}
            >
              <Typography>{number}</Typography>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Pagination;
