import { useDispatch } from "react-redux";
import styled from "styled-components";
import { printersActions } from "_store/printers.slice";
import { PrinterListItem } from "./PrinterListItem";

const PrintersListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 33em;
  margin 0 auto;
  font-size: 18px;
  cursor: pointer;
`;

const AddButton = styled.button`
  padding: 5px;
  border: none;
  cursor: pointer;
  width: 33em;
  margin 0 auto;
  border: none;
	font-size: 18px;
	background: #7eaa86;
	border-radius: 5px;
	cursor: pointer;
	color: #fff;
	transition: 0.3s;
	text-shadow: 4px 0px 6px rgba(66, 68, 90, 1);
	&:hover {
		border: none;
		background: #9ec9a6;
		color: #fff;
		text-shadow: 4px 0px 6px rgba(66, 68, 90, 1);
		transition-timing-function: ease-in-out;
		transition: 0.3s;
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
