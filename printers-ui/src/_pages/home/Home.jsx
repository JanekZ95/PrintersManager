import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { PrintersPageNav } from "_components/PrintersPageNav";
import { PrintersList } from "_components/PrintersList";
import { SearchBox } from "_components/SearchBox";
import { printersActions } from "_store/printers.slice";
import { PrinterDetails } from "_components/PrinterDetails";
import { MessagePopup } from "_components/MessagePopup";

const HomeContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 10px;
`;

export const Home = () => {
  const dispatch = useDispatch();

  const { currentPage, totalPages } = useSelector(
    (state) => state.printers.pageInfo
  );
  const searchQuery = useSelector((state) => state.printers.searchQuery);
  const printers = useSelector((state) => state.printers.printers);
  const error = useSelector((state) => state.printers.error);
  const successMessage = useSelector((state) => state.printers.successMessage);
  const { create, data: printerDetails } = useSelector(
    (state) => state.printers.printerDetails
  );

  useEffect(() => {
    dispatch(printersActions.fetchPrinters(searchQuery));
  }, [dispatch, searchQuery, currentPage]);

  return (
    <>
      <HomeContainer>
        <SearchBox searchQuery={searchQuery} />
        <PrintersPageNav currentPage={currentPage} totalPages={totalPages} />
        <PrintersList printers={printers} />
      </HomeContainer>
      {!!printerDetails && (
        <PrinterDetails printerDetails={printerDetails} create={create} />
      )}
      {!!successMessage && (
        <MessagePopup type="success" message={successMessage} />
      )}
      {!!error && <MessagePopup type="error" message={error} />}
    </>
  );
};
