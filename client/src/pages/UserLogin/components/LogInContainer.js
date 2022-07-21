import React from 'react';

const LogInContainer = (props) => {
  const { logIn, handleSubmit } = props;
  const text = logIn ? 'Log In' : 'Sign Up';

  return (
    <form onSubmit={handleSubmit}>
      <h3>{text}</h3>
      <div>
        Username: <input type="text" />
      </div>
      <div>
        Password: <input type="password" />
      </div>
      <button type="submit">{text}</button>
    </form>
  );
};

export default LogInContainer;
