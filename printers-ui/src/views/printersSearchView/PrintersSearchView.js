import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { PagesNavigation } from "../../components/pagesNavigation/PagesNavigation";
import { PrinterDetailsPopup } from "../../components/printerDetailsPopup/PrinterDetailsPopup";
import { PrintersList } from "../../components/printersList/PrintersList";
import { SearchInput } from "../../components/searchInput/SearchInput";
import {
  selectPageInfo,
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
  const pageInfo = useSelector(selectPageInfo);
  const token = useSelector((state) => state.printersSearch.token);

  console.log(token);

  return (
    <>
      <Container>
        <Div>
          <H1>PRINTERS SEARCH</H1>
          <SearchInput
            searchQuery={searchQuery}
            currentPage={pageInfo.currentPage}
            pageSize={pageInfo.pageSize}
          />
        </Div>
        {pageInfo && (
          <PagesNavigation
            currentPage={pageInfo.currentPage}
            totalPages={pageInfo.totalPages}
          />
        )}
        <PrintersList printers={printers} />
        {printerDetails._id && <PrinterDetailsPopup printer={printerDetails} />}
      </Container>
      {!token && <Navigate replace to="/login" />}
    </>
  );
};
