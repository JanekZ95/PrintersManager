import { useDispatch } from "react-redux";
import {
	fetchPrinters,
	setSearchQuery,
} from "../../features/printersSearchView/printersSearchViewSlice";
import styled from "styled-components";

const Input = styled.input`
	margin: 1.5em;
	padding: 0.5em 1em;
	border: 1px solid black;
	text-align: center;
	border-radius: 50px;
	font-size: 1.5em;
	-webkit-box-shadow: 8px 8px 24px -4px rgba(66, 68, 90, 1);
	-moz-box-shadow: 8px 8px 24px -4px rgba(66, 68, 90, 1);
	box-shadow: 8px 8px 24px -4px rgba(66, 68, 90, 1);
`;

export const SearchInput = ({ searchQuery }) => {
	const dispatch = useDispatch();

	function handleOnChange(e) {
		e.preventDefault();
		dispatch(setSearchQuery(e.target.value));
		dispatch(fetchPrinters(e.target.value));
	}

	return (
		<div>
			<Input
				type="text"
				name="search"
				placeholder="Type to search"
				value={searchQuery}
				onChange={handleOnChange}
			/>
		</div>
	);
};
