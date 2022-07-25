import React, { useState } from 'react';
import { Grid, Box, Typography, Input, Button } from '@mui/material';
import {
  loginContainerStyles,
  loginPageStyles,
  containerLeftDesign,
  containerRightDesign,
  whiteText,
  buttonTextSize,
} from '../../../styles/userLoginStyles.js';

const LogInContainer = (props) => {
  const { logIn, handleChange, handleSubmit } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const text = logIn ? 'LOG IN' : 'SIGN UP';

  return (
    <Box sx={loginPageStyles}>
      <Grid container sx={loginContainerStyles}>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          md={7}
          sx={containerLeftDesign}
        >
          <Typography variant="h2">PET OPET</Typography>
        </Grid>
        <Grid
          item
          container
          md={5}
          direction="column"
          sx={containerRightDesign}
        >
          <Grid item md={1}></Grid>
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            md={2}
          >
            <Typography sx={whiteText}>{text}</Typography>
          </Grid>
          <Grid item md={2}>
            <Input
              placeholder="Username"
              color="primary"
              sx={whiteText}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item md={2}>
            <Input
              placeholder="Password"
              type="password"
              color="primary"
              sx={whiteText}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item md={3}>
            <Button
              variant="contained"
              type="button"
              onClick={() => handleSubmit(username, password)}
            >
              {text}
            </Button>
          </Grid>
          <Grid item container justifyContent="center" md={1}>
            <Typography variant="subtitle2" sx={whiteText}>
              Login to access site
            </Typography>
            <Button
              color="secondary"
              variant="contained"
              size="small"
              type="button"
              sx={buttonTextSize}
              onClick={handleChange}
            >
              Log In
            </Button>
          </Grid>
          <Grid item container justifyContent="center" md={1}>
            <Typography variant="subtitle2" sx={whiteText}>
              Don't have an account?
            </Typography>
            <Button
              color="secondary"
              variant="contained"
              type="button"
              size="small"
              sx={buttonTextSize}
              onClick={handleChange}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LogInContainer;
