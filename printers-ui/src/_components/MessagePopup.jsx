import { Popup } from "./common/Popup";
import { ReactComponent as ErrorSvg } from "_assets/icons/error.svg";
import { ReactComponent as SuccessSvg } from "_assets/icons/success.svg";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { printersActions } from "_store/printers.slice";

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 7em;
`;

const Message = styled.p`
  font-size: 1.5em;
  color: ${(props) => (props.type === "success" ? "green" : "red")};
`;

const CloseButton = styled.button`
border: 2px solid #7eaa86;
width: 8em;
font-size: 18px;
background: #fff;
border-radius: 20px;
padding: 5px 20px;
cursor: pointer;
margin-top: 4em;
&:hover {
  border: 2px solid #9ec9a6;
  background: #9ec9a6;
  color: black;
  text-shadow: none;
  transition-timing-function: ease-in-out;
transition: 0.3s;
`;

export const MessagePopup = ({ type, message }) => {
  const dispatch = useDispatch();

  const handleClose = (e) => {
    e.preventDefault();
    dispatch(printersActions.closePopups());
  };

  return (
    <Popup>
      <MessageContainer>
        {type === "success" ? (
          <SuccessSvg width="2rem" />
        ) : (
          <ErrorSvg width="2rem" />
        )}
        <Message type={type}>{message}</Message>
        <CloseButton onClick={handleClose}>Close</CloseButton>
      </MessageContainer>
    </Popup>
  );
};
