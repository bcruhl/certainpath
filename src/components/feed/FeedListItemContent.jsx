import { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

/*
*  Clicking on the clamped div will reveal all the text
*  Emotion class rules are conditional here based on `clamped` prop
*/
const ContentContainer = styled.div(({ clamped }) => ({
	color: 'var(--feed-text-color)',
	overflow: clamped ? 'hidden' : 'visible',
	display: clamped ? '-webkit-box' : 'inline',
	WebkitLineClamp: clamped ? 2 : 'none', 
	lineClamp: clamped ? 2 : 'none', /* number of lines to show */
	WebkitBoxOrient: 'vertical',
}))

const FeedListItemContent = ({ text }) => {
	const [clamped, setClamped] = useState(true);

	const toggleClamp = () => {
		setClamped(!clamped);
	}

	return (
		<ContentContainer clamped={clamped} onClick={toggleClamp}>{text}</ContentContainer>
	)
}

FeedListItemContent.propTypes = {
	text: PropTypes.string.isRequired
};

export default FeedListItemContent;