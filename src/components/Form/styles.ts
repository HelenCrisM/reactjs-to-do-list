import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const StyledForm = styled.form`
	margin-top: 10px;
`;

export const StyledInput = styled.input`
	background-color: ${COLORS.white};
	outline: none;
	height: 40px;
	width: 80%;
	border: none;
`;

export const StyledButton = styled.button`
	height: 42px;
	background: ${COLORS.white};
	box-shadow: none;
	border-radius: 0px;
	border: 0;
	color: ${COLORS.teal};
	font-weight: 600;
	text-transform: uppercase;

	&:focus {
		outline: none;
	}
`;
