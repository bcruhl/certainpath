import styled from '@emotion/styled';
import logo from '../../static/img/logo.svg';

const Heading = styled.nav`
  background-color: var(--header-bg);

  & > h1 {
  	margin-top: 0;
  }
`;

const Logo = styled.img`
	height: 3rem;
	width: auto;
	margin: 1rem;
`;

const MainNavigation = () => {
	return (
		<Heading>
			<h1>
				<Logo src={logo} alt="CertainPath Logo" />
			</h1>
		</Heading>
	);
};

export default MainNavigation;