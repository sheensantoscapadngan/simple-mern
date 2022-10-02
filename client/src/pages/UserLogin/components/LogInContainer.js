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
  const { isLoggingIn, onChange: handleChange, onSubmit: handleSubmit } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginText = isLoggingIn ? 'LOG IN' : 'SIGN UP';
  const changeLoginText = isLoggingIn
    ? "Don't have an account?"
    : 'Login to access site';
  const changeLoginButtonText = isLoggingIn ? 'SIGN UP' : 'LOG IN';

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
            <Typography sx={whiteText}>{loginText}</Typography>
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
              {loginText}
            </Button>
          </Grid>
          <Grid item container justifyContent="center" md={2}>
            <Typography variant="subtitle2" sx={whiteText}>
              {changeLoginText}
            </Typography>
            <Button
              color="secondary"
              variant="contained"
              size="small"
              type="button"
              sx={buttonTextSize}
              onClick={handleChange}
            >
              {changeLoginButtonText}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LogInContainer;
