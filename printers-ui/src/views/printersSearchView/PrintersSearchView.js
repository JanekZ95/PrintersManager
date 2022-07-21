import { useSelector } from "react-redux";
import styled from "styled-components";
import { PrintersList } from "../../components/printersList/PrintersList";
import { SearchInput } from "../../components/searchInput/SearchInput";
import {
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

  return (
    <Container>
      <SearchInput searchQuery={searchQuery} />
      <PrintersList printers={printers} />
    </Container>
  );
};
