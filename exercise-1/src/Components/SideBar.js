import React from 'react';
import styles from './MainSection.module.css';
import Shop from './Shop'

export default function SideBar() {
	const ShopData = [
		{
			list: '16 Lifesaving Items You Should Always Keep In Your Car',
			image: "list1.JPG"
		},
		{
			list: 'The Best Products To Treat Your Sagging Skin, According To Experts',
			image: "list2.JPG",
		},
		{
			list: 'If You’re Even A Little Bit Into Fall, You Need These 50 Things',
			image: "list3.JPG",
		},
		{
			list: '25 Things You Need If You Love Working Out At Home',
			image: "list4.JPG",
		},
		{
			list: 'Uusi 47 euron teleskooppi on myynnissä',
			image: "list5.JPG",
		},
		{
			list: '13 Accessories That’ll Turn Your Instant Pot Into Pure Magic',
			image: "list6.JPG",
		},
	];

	return (
		<div className={ styles.sidebar }>
		<span className={ styles.title } >/SHOPPING/</span>
			{
          		ShopData.map( element => <Shop data={ element } />)
       		}
		</div>
	);
}