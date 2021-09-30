import React from 'react';

export default function Shop( props ) {
	return (
		<div>
			<img src={`/images/${ props.data.image }`} />
			<span>{ props.data.list }</span>
			<hr/>
		</div>
	);
}