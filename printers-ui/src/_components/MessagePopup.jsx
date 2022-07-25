import { Popup } from "./common/Popup";
import { ReactComponent as ErrorSvg } from "_assets/icons/error.svg";
import { ReactComponent as SuccessSvg } from "_assets/icons/success.svg";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { printersActions } from "_store/printers.slice";

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Message = styled.p`
  font-size: 1.5em;
  color: ${(props) => (props.type === "success" ? "green" : "red")};
`;

const CloseButton = styled.button`
  align-self: flex-end;
  padding: 2px 4px;
  border: 1px solid black;
  cursor: pointer;
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
