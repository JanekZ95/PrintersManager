import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { history } from "_helpers/history";
import { authActions } from "_store/users.slice";

const StyleContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  background: #eeeeee;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 15em;
  align-items: center;
  justify-content: center;
  width: 28em;
  position: relative;
  margin: 0 auto;
  border-radius: 0px 0px 20px 20px;
  background: #fff;
  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;

const TopDiv = styled.form`
  display: flex;
  width: 28em;
  height: 4em;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 20px 20px 0px 0px;
  background: #7eaa86;
  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;

const H2 = styled.h2`
  font-size: 2em;
  letter-spacing: 2px;
  color: #fff;
  text-shadow: 4px 0px 6px rgba(66, 68, 90, 1);
`;

const Label = styled.label`
  font-size: 1.4em;
  font-weight: 600;
  letter-spacing: 1px;
  padding-right: 20px;
  float: left;
`;

const Input = styled.input`
  text-align: center;
  border-radius: 20px;
  border: none;
  padding: 7px 0;
  outline-style: none;
  background: #eeeeee;
`;

const Div = styled.div`
  margin: 0.5em;
`;

const ButtonDiv = styled.div`
  display: flex;
  gap: 2.5em;
  margin: 0.3em;
`;

const Button = styled.button`
	border: 2px solid #7eaa86;
	width: 8em;
	font-size: 18px;
	background: #fff;
	border-radius: 20px;
	padding: 5px 20px;
	cursor: pointer;
  &:hover {
    border: 2px solid #9ec9a6;
    background: #9ec9a6;
    color: black;
    text-shadow: none;
    transition-timing-function: ease-in-out;
	transition: 0.3s;
`;

const Button1 = styled.button`
  border: none;
  width: 8em;
  font-size: 18px;
  background: #7eaa86;
  border-radius: 20px;
  padding: 5px 20px;
  cursor: pointer;
  color: #fff;
  transition: 0.3s;
  text-shadow: 4px 0px 6px rgba(66, 68, 90, 1);
  &:hover {
    border: 1px solid #9ec9a6;
    background: #9ec9a6;
    color: #fff;
    text-shadow: 4px 0px 6px rgba(66, 68, 90, 1);
    transition-timing-function: ease-in-out;
    transition: 0.3s;
  }
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
    <StyleContainer>
      <TopDiv>
        <H2>Printers Manager</H2>
      </TopDiv>
      <FormContainer>
        <Div>
          <Label htmlFor="username">Username</Label>
          <Input
            name="username"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Div>
        <Div>
          <Label htmlFor="password">Password&nbsp;</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </Div>
        <ButtonDiv>
          <Button type="submit" onClick={handleSignInButtonClick}>
            Sign In
          </Button>
          <Button1 type="submit" onClick={handleSignUpButtonClick}>
            Sign Up
          </Button1>
        </ButtonDiv>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </FormContainer>
    </StyleContainer>
  );
};
