import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "_store/users.slice";
import styled from "styled-components";

const NavContainer = styled.nav`
  justify-content: space-between;
  height: 3em;
  width: 100vw;
  padding: 5px;
  background: #7eaa86;
  grid-column: 1 / 3;
  display: flex;
  gap: 5px;
`;

const H3 = styled.text`
  display: none;
`;

const Button = styled.button`
border: 2px solid #7eaa86;
width: 8em;
font-size: 18px;
background: #fff;
border-radius: 20px;
cursor: pointer;
margin-right: 10em;
z-index: 100;
&:hover {
  border: 2px solid #7eaa86;
  background: #d6e7d9;
  color: black;
  text-shadow: none;
  transition-timing-function: ease-in-out;
  transition: 0.3s;
`;

export const Nav = () => {
  const authUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(authActions.logout());

  if (!authUser) return null;

  return (
    <NavContainer>
      <NavLink to="/">
        <H3>Home</H3>
      </NavLink>
      <Button onClick={handleLogout}>Logout</Button>
    </NavContainer>
  );
};
