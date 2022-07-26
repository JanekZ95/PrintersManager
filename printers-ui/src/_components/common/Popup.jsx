import styled from "styled-components";

const PopupBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContainer = styled.div`
  border: 1px solid black;
  background-color: white;
  padding: 10px;
  width: 22em;
  height: 24em;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Popup = ({ children }) => {
  return (
    <PopupBackground>
      <PopupContainer>{children}</PopupContainer>
    </PopupBackground>
  );
};
