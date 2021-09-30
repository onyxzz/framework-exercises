import React from 'react';
import styles from './Header.module.css'

export default function Menu() {
	return (
		<div className= { styles.menu }>
			<div>NEWS</div>
			<div>POLITICS</div>
			<div>ENTERTAINMENT</div>
			<div>LIFE</div>
			<div>PERSONAL</div>
			<div>SHOPPING</div>
			<div>VIDEO</div>
			<div style={{ color: "#0DBE98"}}>US Edition</div>
		</div>
	);
}