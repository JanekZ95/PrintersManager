import { useDispatch } from "react-redux";
import styled from "styled-components";
import { printersActions } from "_store/printers.slice";

const PageNavContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  font-size: 15px;
  margin: 0 auto;
  align-self: flex-start;
  gap: 10px;
`;

const Button = styled.button`
border: none;
width: 5em;
font-size: 15px;
background: #7eaa86;
border-radius: 20px;
padding: 5px 20px;
cursor: pointer;
color: #fff;
transition: 0.3s;
text-shadow: 4px 0px 6px rgba(66, 68, 90, 1);
&:hover {
  border: 0px solid #9ec9a6;
  background: #9ec9a6;
  color: #fff;
  text-shadow: 4px 0px 6px rgba(66, 68, 90, 1);
  transition-timing-function: ease-in-out;
  transition: 0.3s;
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
      {currentPage > 1 && <Button onClick={handlePrevButtonClick}>PREV</Button>}
      <p>
        {currentPage} / {totalPages}
      </p>
      {currentPage < totalPages && (
        <Button onClick={handleNextButtonClick}>NEXT</Button>
      )}
    </PageNavContainer>
  );
};
