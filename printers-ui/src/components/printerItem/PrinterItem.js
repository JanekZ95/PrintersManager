import { useDispatch } from "react-redux";
import styled from "styled-components";
import { showPrinterDetails } from "../../features/printersSearchView/printersSearchViewSlice";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const PrinterItem = ({ printer }) => {
  const dispatch = useDispatch();

  const handlePrinterClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "PRINTER_DETAILS_REQUESTED",
      payload: { id: printer._id },
    });
  };

  return (
    <Container onClick={handlePrinterClick}>
      <p>{printer.modelName}</p>
      <p>{printer.manufacturer}</p>
    </Container>
  );
};
