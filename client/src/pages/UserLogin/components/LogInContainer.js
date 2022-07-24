import React, {useState} from 'react';

const LogInContainer = (props) => {
  const { logIn, handleSubmit } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const text = logIn ? 'Log In' : 'Sign Up';

  return (
    <>
      <h3>{text}</h3>
      <div>
        Username: <input type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div>
        Password: <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button type="button" onClick={()=> handleSubmit(username,password)}>{text}</button>
    </>
  );
};

export default LogInContainer;
