import { useDispatch } from "react-redux";
import {
  fetchPrinters,
  setSearchQuery,
} from "../../features/printersSearchView/printersSearchViewSlice";

export const SearchInput = ({ searchQuery }) => {
  const dispatch = useDispatch();

  function handleOnChange(e) {
    e.preventDefault();
    dispatch(setSearchQuery(e.target.value));
    dispatch(fetchPrinters(e.target.value));
  }

  return (
    <div>
      <input
        type="text"
        name="search"
        value={searchQuery}
        onChange={handleOnChange}
      />
    </div>
  );
};
