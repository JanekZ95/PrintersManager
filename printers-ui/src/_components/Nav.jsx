import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { authActions } from "_store/users.slice";
import styled from "styled-components";

const NavContainer = styled.nav`
  position: absolute;
  height: 45px;
  width: 100vw;
  padding: 5px;
  background-color: black;
  grid-column: 1 / 3;
  display: flex;
  gap: 5px;
`;

export const Nav = () => {
  const authUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(authActions.logout());

  if (!authUser) return null;

  return (
    <NavContainer>
      <NavLink to="/">Home</NavLink>
      <button onClick={handleLogout}>Logout</button>
    </NavContainer>
  );
};
