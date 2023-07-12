import styled from '@emotion/styled';
import spinner from '../static/img/loading.svg';

const LoaderContainer = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	text-align: center;
	max-width: 100vw;  /* TODO: Make this use CSS Variables */
`;

const Spinner = styled.img`
	height: 4rem;
	position: absolute;
	top: 2rem;
	left: calc(50% - 2rem);
`;

const Loading = () => (
	<LoaderContainer>
		<Spinner src={spinner} alt="Loading" />
	</LoaderContainer>
);

export default Loading;