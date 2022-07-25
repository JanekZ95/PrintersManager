import { useDispatch } from "react-redux";
import styled from "styled-components";
import { printersActions } from "_store/printers.slice";

const PrinterContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  cursor: pointer;
`;

export const PrinterListItem = ({ printer }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(printer);
    dispatch(printersActions.openPrinterDetails(printer.id));
  };

  return (
    <PrinterContainer onClick={handleClick}>
      <p>ModelName: {printer.modelName}</p>
      <p>Manufacturer: {printer.manufacturer}</p>
    </PrinterContainer>
  );
};
