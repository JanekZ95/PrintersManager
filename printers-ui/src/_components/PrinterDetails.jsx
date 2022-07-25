import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { printersActions } from "_store/printers.slice";
import { Popup } from "./common/Popup";

const FormsContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
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
        <label htmlFor="modelName">Model</label>
        <input
          type="text"
          placeholder="model"
          value={modelName}
          onChange={(e) => setModelName(e.target.value)}
        />
        <label htmlFor="manufacturer">Manufacturer</label>
        <input
          type="text"
          placeholder="manufacturer"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
        />
        <div>
          <label htmlFor="isDuplex">Duplex</label>
          <input
            type="checkbox"
            placeholder="isDuplex"
            value={isDuplex}
            checked={isDuplex}
            onChange={(e) => setIsDuplex(!isDuplex)}
          />
        </div>
        <div>
          <label htmlFor="isLaser">Laser</label>
          <input
            type="checkbox"
            placeholder="isLaser"
            value={isLaser}
            checked={isLaser}
            onChange={(e) => setIsLaser(!isLaser)}
          />
        </div>
        <button type="submit">Submit</button>
        {!create && <button onClick={handleDelete}>Delete</button>}
        <button onClick={handleClose}>Close</button>
      </FormsContainer>
    </Popup>
  );
};
