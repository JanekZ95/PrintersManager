import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LoginView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignInButtonClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "USER_LOGGED_IN",
      payload: {
        username,
        password,
      },
    });
  };

  const handleSignUpButtonClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "USER_REGISTERED",
      payload: {
        username,
        password,
      },
    });
  };

  return (
    <FormContainer>
      <label for="username">Username</label>
      <input
        name="username"
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label for="password">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <div>
        <button type="submit" onClick={handleSignInButtonClick}>
          Sign In
        </button>
        <button type="submit" onClick={handleSignUpButtonClick}>
          Sign Up
        </button>
      </div>
    </FormContainer>
  );
};
