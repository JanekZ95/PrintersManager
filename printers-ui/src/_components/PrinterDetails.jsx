import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { printersActions } from "_store/printers.slice";
import { Popup } from "./common/Popup";

const FormsContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const Label = styled.label`
  display: flex;
  text-align: center;
  margin: 0 auto;
  font-size: 22px;
`;

const Input = styled.input`
  text-align: center;
  border-radius: 20px;
  border: none;
  padding: 7px 0;
  outline-style: none;
  background: #eeeeee;
  margin: 0 auto;
  width: 260px;
`;

const InputC = styled.input`
  transform: scale(1.3);
  accent-color: #7eaa86;
`;

const DivLabel = styled.form`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  width: 10em;
  font-size: 18px;
  background: #7eaa86;
  border-radius: 20px;
  padding: 5px 20px;
  cursor: pointer;
  color: #fff;
  transition: 0.3s;
  margin: 4px auto;
  text-shadow: 4px 0px 6px rgba(66, 68, 90, 1);
  &:hover {
    border: 1px solid #9ec9a6;
    background: #9ec9a6;
    color: #fff;
    text-shadow: 4px 0px 6px rgba(66, 68, 90, 1);
    transition-timing-function: ease-in-out;
    transition: 0.3s;
  }
`;

export const PrinterDetails = ({ printerDetails, create }) => {
  const [modelName, setModelName] = useState(printerDetails.modelName);
  const [manufacturer, setManufacturer] = useState(printerDetails.manufacturer);
  const [isDuplex, setIsDuplex] = useState(printerDetails.isDuplex);
  const [isLaser, setIsLaser] = useState(printerDetails.isLaser);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!create) {
      dispatch(
        printersActions.updatePrinter({
          id: printerDetails.id,
          modelName,
          manufacturer,
          isDuplex,
          isLaser,
        })
      );
    } else {
      dispatch(
        printersActions.createPrinter({
          modelName,
          manufacturer,
          isDuplex,
          isLaser,
        })
      );
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    dispatch(printersActions.closePrinterDetails());
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(printersActions.deletePrinter(printerDetails.id));
  };

  return (
    <Popup>
      <FormsContainer onSubmit={handleSubmit}>
        <Label htmlFor="modelName">Model</Label>
        <Input
          type="text"
          placeholder="model"
          value={modelName}
          onChange={(e) => setModelName(e.target.value)}
        />
        <Label htmlFor="manufacturer">Manufacturer</Label>
        <Input
          type="text"
          placeholder="manufacturer"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
        />
        <DivLabel>
          <Label htmlFor="isDuplex">
            Duplex&nbsp;
            <InputC
              type="checkbox"
              placeholder="isDuplex"
              value={isDuplex}
              checked={isDuplex}
              onChange={(e) => setIsDuplex(!isDuplex)}
            />
          </Label>
          <Label htmlFor="isLaser">
            Laser&nbsp;
            <InputC
              type="checkbox"
              placeholder="isLaser"
              value={isLaser}
              checked={isLaser}
              onChange={(e) => setIsLaser(!isLaser)}
            />
          </Label>
        </DivLabel>
        <Button type="submit">Submit</Button>
        {!create && <Button onClick={handleDelete}>Delete</Button>}
        <Button onClick={handleClose}>Close</Button>
      </FormsContainer>
    </Popup>
  );
};
