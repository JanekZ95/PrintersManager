import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  setPrinter,
  setPrinterDetails,
} from "../../features/printersSearchView/printersSearchViewSlice";

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

const PopupContainer = styled.div`
  background: #629478;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  padding: 15px;
`;

const Form = styled.div`
  margin-top: 0.3em;
  display: flex;
  flex-direction: column;
`;

const Label = styled.text`
  font-size: 22px;
  letter-spacing: 1px;
  color: #fff;
  text-shadow: 4px 4px 6px rgba(66, 68, 90, 1);
`;

const Input = styled.input`
  margin: 0.5em;
  padding: 0.3em;
  border: 1px solid black;
  text-align: center;
  border-radius: 50px;
  font-size: 1.5em;
  -webkit-box-shadow: 4px 4px 24px -4px rgba(66, 68, 90, 1);
  -moz-box-shadow: 4px 4px 24px -4px rgba(66, 68, 90, 1);
  box-shadow: 4px 4px 24px -4px rgba(66, 68, 90, 1);
`;

const Button = styled.div`
  border: 2px solid white;
  border-radius: 20px;
  font-size: 20px;
  width: 6em;
  padding: 0.5em;
  color: #fff;
  margin-top: 1em;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #629478;
    transition-timing-function: ease-in-out;
    transition: 0.3s;
  }

  > input[type="submit"],
  input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const PrinterDetailsPopup = ({ printer }) => {
  const [modelName, setModelName] = useState(printer.modelName);
  const [manufacturer, setManufacturer] = useState(printer.manufacturer);
  const [isDuplex, setIsDuplex] = useState(printer.isDuplex);
  const [isLaser, setIsLaser] = useState(printer.isLaser);

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "PRINTER_DETAILS_SAVED",
      payload: {
        printer: {
          _id: printer._id,
          modelName,
          manufacturer,
          isDuplex,
          isLaser,
        },
      },
    });
    dispatch(setPrinterDetails({}));
    dispatch(
      setPrinter({
        _id: printer._id,
        modelName,
        manufacturer,
      })
    );
  };

  const handleCloseButtonClick = (e) => {
    e.preventDefault();
    dispatch(setPrinterDetails({}));
  };

  return (
    <Container>
      <PopupContainer>
        <Form>
          <Label for="modelName">Model name:</Label>
          <Input
            type="text"
            value={modelName}
            name="modelName"
            onChange={(e) => setModelName(e.target.value)}
          />
          <Label for="manufacturer">Manufacturer:</Label>
          <Input
            type="text"
            value={manufacturer}
            name="manufacturer"
            onChange={(e) => setManufacturer(e.target.value)}
          />
          <CheckboxContainer>
            <div>
              <input
                type="checkbox"
                id="isDuplex"
                name="isDuplex"
                value="Is Duplex"
                checked={isDuplex}
                onChange={(e) => setIsDuplex(!isDuplex)}
              />
              <Label for="isDuplex">Is Duplex</Label>
            </div>
            <div>
              <input
                type="checkbox"
                id="isLaser"
                name="isLaser"
                value="Is Laser"
                checked={isLaser}
                onChange={(e) => setIsLaser(!isLaser)}
              />
              <Label for="isLaser">Is Laser</Label>
            </div>
          </CheckboxContainer>
          <ButtonsContainer>
            <Button onClick={handleFormSubmit}>Save</Button>
            <Button onClick={handleCloseButtonClick}>Close</Button>
          </ButtonsContainer>
        </Form>
      </PopupContainer>
    </Container>
  );
};
