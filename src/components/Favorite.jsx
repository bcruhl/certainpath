import { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const HeartContainer = styled.div`
	position: relative;
	width: var(--heart-width, 1rem);
	aspect-ratio: 1/1;
	overflow: hidden;
	clip-path: url(#svgClip);
`;

const HeartStroke = styled.svg`
	width: calc(100% - (2 * var(--stroke-width, 2px)));
	aspect-ratio: 1/1;
	position: absolute;
	top: var(--stroke-width, 0);
	left: var(--stroke-width, 0);
	fill: transparent;;
	stroke: var(--heart-color);
	stroke-width: var(--stroke-width, 1px);
`;

//Create mask outline for heart
const HeartClip = styled.input`
	appearance: none;
	margin: 0px;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	position: absolute;
	overflow: hidden;
	z-index: 2;
	cursor: pointer;

	& + div {
		top:0;
		left:0;
		transform: translateY(50%);
		width: calc(2 * var(--heart-width, 1rem));
		aspect-ratio: 1/1;
		transition: transform var(--transition-length, 0s) cubic-bezier(.2, .6, .8, .4);
	}

	&:checked + div {
		transform: translateY(0);
	}
`;

//Define the fill shape
const WaveShape = styled.path`
	animation-name: waveAction; /* defined in index.css */
	animation-iteration-count: infinite;
	animation-timing-function: linear;
	animation-duration: 1s;
	fill: var(--heart-color);
`;

const AriaLabel = styled.label`
	display none;
`;

const Favorite = ({ filled, postId }) => {
	const [liked, setLiked] = useState(filled);

	const toggleFavorite = () => {
		setLiked(!liked);
	}

	return (
		<>
			<svg height='0' width='0'>
				<defs>
					 <clipPath id='svgClip' clipPathUnits='objectBoundingBox' transform='scale(0.01 0.01)'>
						 <path d='M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z' />     
					 </clipPath>
				</defs>
			</svg>

			<HeartContainer>
				 <HeartStroke viewBox='0 0 100 100'>
						<path d='M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z' />    
				 </HeartStroke>
				
				 <HeartClip name={`favorite_${postId}`} id={`favorite_${postId}`} type='checkbox' checked={liked} onChange={toggleFavorite} />
				 <div>
					 <svg viewBox='0 0 400 400'>
						 <WaveShape d='M0,6c100,10,100,-10,200,0c100,10,100,-10,200,0v394h-400Z'></WaveShape>
					</svg>
				 </div>
				 <AriaLabel for={`favorite_${postId}`}>Add to Favorites</AriaLabel>
			</HeartContainer>
		</>
	);
};

Favorite.propTypes = {
	filled: PropTypes.bool,
	postId: PropTypes.number
}

export default Favorite;