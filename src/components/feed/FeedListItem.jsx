import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import FeedListItemHeader from './FeedListItemHeader';
import FeedListItemContent from './FeedListItemContent';

const FeedListItemContainer = styled.div`
	border-radius: 0.4rem;
	background-color: var(--feed-item-bg);
	margin-bottom: 0.4rem;
	padding: 0.4rem;
`;

const FeedListItem = ({ post }) => {
	const { text, ...headerDetails } = post;

	return (
		<FeedListItemContainer>
			<FeedListItemHeader headerDetails={headerDetails} />
			<FeedListItemContent text={text} />
		</FeedListItemContainer>
	)
};

FeedListItem.propTypes = {
	post: PropTypes.shape(
		{
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
		}
	)
};

export default FeedListItem;