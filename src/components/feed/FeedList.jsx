import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import FeedListItem from './FeedListItem';

const FeedContainer = styled.div`
	max-width: var(--main-width);
	margin: auto auto;
	overflow: auto;
	height: calc(100vh - 12rem);

	& > span {
		color: #fff;
	}
`;

const FeedList = ({ posts }) => (
	<FeedContainer>
		{posts?.map(post => <FeedListItem post={post} key={post.postId}/>)}
		{/* IF NO POST/QUERY MATCHES, SHOW 'Nothing fount' MESSAGE BELOW */}
		{posts?.length === 0 && (
			<span>There were no authors matching your query</span>
		)}
	</FeedContainer>
);

FeedList.propTypes = {
	posts: PropTypes.arrayOf(
		PropTypes.shape({
			author: PropTypes.shape({
				displayName: PropTypes.string,
				email: PropTypes.string,
				picture: PropTypes.string,
				userId: PropTypes.number
			}),
			created: PropTypes.string, //ISO Timestamp
			liked: PropTypes.bool,
			postId: PropTypes.number,
			text: PropTypes.string
		})
	)
};

export default FeedList;