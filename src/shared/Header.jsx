import * as React from 'react';
import { hot } from 'react-hot-loader/root'

import styles from './header.less';


function HeaderComponent() {
	return (
		<header className={styles.example}>
			<h1>Хрен им</h1>
			<p>Я нашел решение!!!!</p>
		</header>
	)
}


export const Header = hot(HeaderComponent);