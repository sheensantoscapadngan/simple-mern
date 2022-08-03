import React from 'react';
import { Grid, Typography } from '@mui/material';

const Pagination = (props) => {
  const { totalPages, onPageNumberClick: handlePageNumberClick } = props;

  const pageNumbers = [...Array(totalPages).keys()].map((i) => i + 1);

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
