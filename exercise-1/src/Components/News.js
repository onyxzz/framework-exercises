import React from 'react';
import styles from './MainSection.module.css'

export default function News( props ) {
	return (
		<div className={ styles.news }>
			<img src={`/images/${ props.data.image }`} />
			<span className={ styles.news }>{ props.data.category }</span>
			<span className={ styles.headline }>{ props.data.headline }</span>
		</div>
	);
}