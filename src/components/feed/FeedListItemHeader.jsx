import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Favorite from '../Favorite';

const HeaderContainer = styled.div`
	width: 100%;
	min-height: 2rem;
	color: #000;
	position: relative;
`;

const Avatar = styled.img`
	height: 3rem;
	width: auto;
	border-radius: 50%;
	border: 1px solid var(--feed-text-color);
	background-color: var(--avatar-bg);
	position: inline-block;
`;

const UserName = styled.div`
	display: inline-block;
	position: absolute;
	left: 4rem;
	top: 0.25rem;
	font-size: 1.2rem;
`;

const PostedOn = styled.div`
	display: inline-block;
	font-size: 0.8rem;
	color: var(--feed-text-color);
`;

const FavoriteContainer = styled.div`
	position: absolute;
	display: inline-block;
	right: -0.25rem;
	top: -1.25rem;
	height: 2rem;
`;

const FeedListItemHeader = ({ headerDetails }) => {
	const { author, liked, created, postId } = headerDetails;

	const buildTimeString = (dateStr) => {
		//convert string to date object (arrives in ISO format)
		const d = new Date(dateStr);
		const options = {
		  year: 'numeric',
		  month: 'long',
		  day: 'numeric',
		};

		return `${d.toLocaleTimeString("en-US", options)}`;
	}

	return (
		<HeaderContainer>
			<Avatar src={author.picture} alt={`Avatar of ${author.displayName}`}/>
			<UserName>{`Posted By: ${author.displayName}`}
				<br/>
				<PostedOn>{buildTimeString(created)}</PostedOn>
			</UserName>
			<FavoriteContainer>
				<Favorite filled={liked} postId={postId} />
			</FavoriteContainer>
		</HeaderContainer>
	);
}

FeedListItemHeader.propTypes = {
	author: PropTypes.shape({
		displayName: PropTypes.string,
		email: PropTypes.string,
		picture: PropTypes.string,
		userId: PropTypes.number
	}),
	created: PropTypes.string, //ISO Timestamp
	liked: PropTypes.bool,
	postId: PropTypes.number
};

export default FeedListItemHeader;