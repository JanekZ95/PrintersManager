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
	background: #629478;
	border: 1px solid black;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	border-radius: 10px;
	padding: 10px;
	width: 600px;
	height: 300px;
`;

const Form = styled.div`
	margin-top: 0.3em;
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
`;

export const PrinterDetailsPopup = ({ visible, printer }) => {
	const [modelName, setModelName] = useState(printer.modelName);
	const [manufacturer, setManufacturer] = useState(printer.modelName);
	const [isDuplex, setIsDuplex] = useState(printer.modelName);
	const [isLaser, setIsLaser] = useState(printer.modelName);

	const dispatch = useDispatch();

	const updatePrinterDetailsPop = [];

	const handleFormSubmit = (e) => {
		e.preventDefault();
		dispatch(
			updatePrinterDetailsPop({
				modelName,
				manufacturer,
				isDuplex,
				isLaser,
			})
		);
	};

	return (
		<Container visible={visible}>
			<PopupContainer>
				<Form onSubmit={handleFormSubmit}>
					<Label for="modelName">Model name:</Label>
					<br />
					<Input
						type="text"
						value={modelName}
						name="modelName"
						onChange={(e) => setModelName(e.target.value)}
					/>
					<br />
					<Label for="manufacturer">Manufacturer:</Label>
					<br />
					<Input
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
					<Label for="isDuplex"> Is Duplex</Label>
					<input type="radio" value={isLaser} name="isLaser" />
					<Label for="isLaser" onChange={(e) => setIsLaser(e.target.value)}>
						{" "}
						Is Laser
					</Label>
					<br />
				</Form>
				<Button>Close</Button>
			</PopupContainer>
		</Container>
	);
};
