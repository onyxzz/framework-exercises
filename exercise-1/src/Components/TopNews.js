import React from 'react';
import styles from './TopNews.module.css';
import image from '../images/TopNews.JPG'

export default function TopNews() {
	return (
		<div>
			<div className={ styles.news }>
				DEMS BIG BILL IN LIMBO: SCRAMBLE TO SALVAGE CHILD AID
			</div>
			<div className={ styles.img }>
				<img src={ image }/>
			</div>
		</div>
	);
}