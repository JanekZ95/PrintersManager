import { useDispatch } from "react-redux";
import styled from "styled-components";
import { printersActions } from "_store/printers.slice";

const PageNavContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  border: 1px solid black;
  align-self: flex-start;
  gap: 5px;
`;

export const PrintersPageNav = ({ currentPage, totalPages }) => {
  const dispatch = useDispatch();

  const handlePrevButtonClick = (e) => {
    e.preventDefault();
    dispatch(printersActions.changePage(currentPage - 1));
  };

  const handleNextButtonClick = (e) => {
    e.preventDefault();
    dispatch(printersActions.changePage(currentPage + 1));
  };

  return (
    <PageNavContainer>
      {currentPage > 1 && <button onClick={handlePrevButtonClick}>PREV</button>}
      <p>
        {currentPage} / {totalPages}
      </p>
      {currentPage < totalPages && (
        <button onClick={handleNextButtonClick}>NEXT</button>
      )}
    </PageNavContainer>
  );
};
