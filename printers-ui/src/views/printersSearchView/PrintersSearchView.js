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

export const PrintersSearchView = () => {
  const printers = useSelector(selectPrinters);
  const searchQuery = useSelector(selectSearchQuery);
  const printerDetails = useSelector(selectPrinterDetails);

  return (
    <Container>
      <SearchInput searchQuery={searchQuery} />
      <PrintersList printers={printers} />
      <PrinterDetailsPopup
        visible={printerDetails._id}
        printer={printerDetails}
      />
    </Container>
  );
};
