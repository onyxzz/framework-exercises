import React from 'react';
import styles from './Header.module.css'

export default function Header() {
	return (
		<div className={ styles.container }>
			<div className={ styles.brand }>HUFFPOST</div>
			<div>Login</div>
			<div style={{color: "#0DBE98"}}>Join HuffPost</div>
		</div>
	);
}