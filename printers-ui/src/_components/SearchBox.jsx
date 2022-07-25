import { useDispatch } from "react-redux";
import { printersActions } from "_store/printers.slice";
import styled from "styled-components";

const Input = styled.input`
	display: flex;
	margin: 2em auto;
	text-align: center;
	border-radius: 20px;
	border: none;
	-webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
	-moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
	box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
	padding: 10px 0;
	outline-style: none;
	background: #eeeeee;
	width: 20em;
	font-size: 20px;
`;

export const SearchBox = ({ searchQuery }) => {
	const dispatch = useDispatch();

	const onChange = (e) => {
		e.preventDefault();
		dispatch(printersActions.setQuery(e.target.value));
	};

	return (
		<Input
			type="text"
			placeholder="search"
			value={searchQuery}
			onChange={onChange}
		/>
	);
};
