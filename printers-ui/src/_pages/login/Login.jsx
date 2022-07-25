import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { history } from "_helpers/history";
import { authActions } from "_store/users.slice";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.3em;
`;

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user: authUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authUser) history.navigate("/");
  }, [authUser]);

  const error = useSelector((state) => state.auth.error);

  const handleSignInButtonClick = (e) => {
    e.preventDefault();
    dispatch(authActions.login({ username, password }));
  };

  const handleSignUpButtonClick = (e) => {
    e.preventDefault();
    dispatch(authActions.register({ username, password }));
  };

  return (
    <FormContainer>
      <div>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
      </div>
      <div>
        <button type="submit" onClick={handleSignInButtonClick}>
          Sign In
        </button>
        <button type="submit" onClick={handleSignUpButtonClick}>
          Sign Up
        </button>
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FormContainer>
  );
};
