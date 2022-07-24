import { useDispatch } from "react-redux";
import { changePage } from "../../features/printersSearchView/printersSearchViewSlice";

export const PagesNavigation = ({ currentPage, totalPages }) => {
  const dispatch = useDispatch();

  const handlePrevButtonClick = (e) => {
    e.preventDefault();
    dispatch(changePage(currentPage - 1));
  };

  const handleNextButtonClick = (e) => {
    e.preventDefault();
    dispatch(changePage(currentPage + 1));
  };

  return (
    <div>
      {currentPage > 1 && <button onClick={handlePrevButtonClick}>prev</button>}
      <p>
        {currentPage}/{totalPages}
      </p>
      {currentPage < totalPages && (
        <button onClick={handleNextButtonClick}>next</button>
      )}
    </div>
  );
};
