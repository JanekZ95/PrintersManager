import { useDispatch } from "react-redux";
import styled from "styled-components";
import { printersActions } from "_store/printers.slice";

const PrinterContainer = styled.div`
	border: 1px solid black;
	border-radius: 5px;
	display: flex;
	justify-content: space-between;
	padding: 5px 10px;
	margin-bottom: 4px;
	cursor: pointer;
	-webkit-box-shadow: 8px 7px 21px -15px rgba(66, 68, 90, 1);
	-moz-box-shadow: 8px 7px 21px -15px rgba(66, 68, 90, 1);
	box-shadow: 8px 7px 21px -15px rgba(66, 68, 90, 1);
  &:hover {
    border: 1px solid black;
    background: #d6e7d9;
    color: black;
    text-shadow: none;
    transition-timing-function: ease-in-out;
	  transition: 0.3s;
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
