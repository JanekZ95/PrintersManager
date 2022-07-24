import { useSelector } from "react-redux";
import styled from "styled-components";
import { PrinterDetailsPopup } from "../../components/printerDetailsPopup/PrinterDetailsPopup";
import { PrintersList } from "../../components/printersList/PrintersList";
import { SearchInput } from "../../components/searchInput/SearchInput";
import {
	selectPrinterDetails,
	selectPrinters,
	selectSearchQuery,
} from "../../features/printersSearchView/printersSearchViewSlice";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const H1 = styled.h1`
	margin-top: 1em;
	font-size: 40px;
	letter-spacing: 2px;
	color: #fff;
	text-shadow: 4px 4px 6px rgba(66, 68, 90, 1);
`;

const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #629478;
	width: 100%;
	margin-bottom: 2em;
`;

export const PrintersSearchView = () => {
	const printers = useSelector(selectPrinters);
	const searchQuery = useSelector(selectSearchQuery);
	const printerDetails = useSelector(selectPrinterDetails);

	return (
		<Container>
			<Div>
				<H1>PRINTERS SEARCH</H1>
				<SearchInput searchQuery={searchQuery} />
			</Div>
			<PrintersList printers={printers} />
			<PrinterDetailsPopup
				visible={printerDetails._id}
				printer={printerDetails}
			/>
		</Container>
	);
};
