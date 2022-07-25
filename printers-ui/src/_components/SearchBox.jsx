import { useDispatch } from "react-redux";
import { printersActions } from "_store/printers.slice";

export const SearchBox = ({ searchQuery }) => {
  const dispatch = useDispatch();

  const onChange = (e) => {
    e.preventDefault();
    dispatch(printersActions.setQuery(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="search"
      value={searchQuery}
      onChange={onChange}
    />
  );
};
