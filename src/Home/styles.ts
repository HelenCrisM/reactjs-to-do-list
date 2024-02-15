import styled from 'styled-components';

import { COLORS } from '../styles/colors';

export const StyledView = styled.div`
	display: flex;
	flex-flow: column nowrap;
	background-color: ${COLORS.grey};
	padding: 20px;
`;

export const StyledTitle = styled.h1`
	font-size: 50px;
`;
