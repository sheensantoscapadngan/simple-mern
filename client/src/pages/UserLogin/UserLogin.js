import React, { useContext, useState } from "react";
import LogInContainer from "./components/LogInContainer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../App";

const UserLogin = () => {
  const [logIn, setLogIn] = useState(true);
  const { setState } = useContext(StateContext);

  const navigate = useNavigate();

  const handleChange = () => setLogIn(!logIn);

  const handleLogIn = async (username, password) => {
    const response = await axios.post(
      "http://localhost:5000/api/v1/user/login",
      {
        username: username,
        password: password,
      }
    );
    setState(response.data);
    navigate("/");
  };

  const handleSignUp = async (username, password) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/sign-up",
        {
          username: username,
          password: password,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e?.target[0]?.value;
    const password = e?.target[1]?.value;
    if (username && password) {
      if (logIn) {
        return handleLogIn(username, password);
      }
      handleSignUp(username, password);
    }
  };

  return (
    <div>
      <h1>PET NAMES</h1>
      <p>
        Log In to access site{" "}
        <span>
          <button onClick={handleChange}>Log in</button>
        </span>
      </p>
      <p>
        Don't have an account?{" "}
        <span>
          <button onClick={handleChange}>Sign up</button>
        </span>
      </p>
      <LogInContainer logIn={logIn} handleSubmit={handleSubmit} />
    </div>
  );
};

export default UserLogin;
