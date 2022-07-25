import { useDispatch } from "react-redux";
import styled from "styled-components";
import { printersActions } from "_store/printers.slice";
import { PrinterListItem } from "./PrinterListItem";

const PrintersListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const AddButton = styled.button`
  padding: 5px;
  border: 1px solid black;
  cursor: pointer;
`;

export const PrintersList = ({ printers }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(printersActions.openCreatePrinter());
  };

  return (
    <>
      <AddButton onClick={handleClick}>Add +</AddButton>
      <PrintersListContainer>
        {printers.map((p, i) => (
          <PrinterListItem key={i} printer={p} />
        ))}
      </PrintersListContainer>
    </>
  );
};
