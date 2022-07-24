import styled from "styled-components";
import { PrinterItem } from "../printerItem/PrinterItem";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 30em;
`;

const Div = styled.div`
	margin-bottom: 0.7em;
	background: rgba(222, 222, 222, 0.5);
	border: 1px solid black;
	border-radius: 10px;
	font-size: 20px;
	transition: 1s;
	&:hover {
		background: rgba(122, 122, 122, 0.5);
		transition-timing-function: ease-in-out;
		transition: 0.3s;
	}
`;

export const PrintersList = ({ printers }) => {
	return (
		<Container>
			{printers.map((p, i) => (
				<Div>
					<PrinterItem key={i} printer={p} />
				</Div>
			))}
		</Container>
	);
};
