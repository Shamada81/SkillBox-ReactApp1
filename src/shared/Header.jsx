import * as React from 'react';
import { hot } from 'react-hot-loader/root'

function HeaderComponent() {
	return (
		<header>
			<h1>Хрен им</h1>
			<p>Я их сделал!!!!</p>
		</header>
	)
}


export const Header = hot(HeaderComponent);