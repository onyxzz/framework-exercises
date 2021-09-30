import React from 'react';
import styles from './MainSection.module.css'
import News from './News'

export default function MainSection( props ) {
	const NewsData = [
		{
			category: 'POLITICS',
			headline: 'Republicans Filibuster Bill Averting Government Shutdown, Debt Default',
			image: "News1.JPG",
		},
		{
			category: 'POLITICS',
			headline: 'Pentagon Leader To Face Congress On Afghan Pullout Decision',
			image: "News2.JPG",
		},
		{
			category: 'CRIME',
			headline: 'R.Kelly Found Guilty On All Counts In Sexual Abuse Trial',
			image: "News3.JPG",
		},
		{
			category: 'POLITICS',
			headline: 'Trumps Mar-a-Lago Pals Aimed To Monetize Veterans Medical Records, House Probe Finds',
			image: "news4.JPG",
		},
		{
			category: 'POLITICS',
			headline: 'Kayaktivists Protest Outside Joe Marchins Houseboat Over Budget Bill',
			image: "News5.JPG",
		},
		{
			category: 'U.S. News',
			headline: 'Greyhound Settles Lawsuit Over Immigration Sweeps On Buses',
			image: "News6.JPG",
		},
	];

	return (
		<div className={ styles.mainsection }>
			<span className={ styles.title }>{ props.data.title }</span>
			{
          		NewsData.map( element => <News data={ element } />)
       		}
       		<hr/>
		</div>
	);
}