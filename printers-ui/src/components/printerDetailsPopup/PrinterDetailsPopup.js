import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const PopupContainer = styled.div`
  background-color: white;
  border: 1px solid black;
  padding: 10px;
  width: 400px;
  height: 400px;
`;

const Button = styled.div``;

export const PrinterDetailsPopup = ({ visible, printer }) => {
  const [modelName, setModelName] = useState(printer.modelName);
  const [manufacturer, setManufacturer] = useState(printer.modelName);
  const [isDuplex, setIsDuplex] = useState(printer.modelName);
  const [isLaser, setIsLaser] = useState(printer.modelName);

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "PAGE_DETAILS_SAVED",
      payload: {
        modelName,
        manufacturer,
        isDuplex,
        isLaser,
      },
    });
  };

  return (
    <Container visible={visible}>
      <PopupContainer>
        <form onSubmit={handleFormSubmit}>
          <label for="modelName">Model name:</label>
          <br />
          <input
            type="text"
            value={modelName}
            name="modelName"
            onChange={(e) => setModelName(e.target.value)}
          />
          <br />
          <label for="manufacturer">Manufacturer:</label>
          <br />
          <input
            type="text"
            value={manufacturer}
            name="manufacturer"
            onChange={(e) => setManufacturer(e.target.value)}
          />
          <br />
          <input
            type="radio"
            value={isDuplex}
            name="isDuplex"
            onChange={(e) => setIsDuplex(e.target.value)}
          />
          <label for="isDuplex"> Is Duplex</label>
          <input type="radio" value={isLaser} name="isLaser" />
          <label for="isLaser" onChange={(e) => setIsLaser(e.target.value)}>
            Is Laser
          </label>
          <br />
        </form>
        <Button>Close</Button>
      </PopupContainer>
    </Container>
  );
};
