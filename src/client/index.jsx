import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Header } from '../shared/Header';
import { StarWarsNameClass } from '../shared/StateExamples/StarWarsNameClass/StarWarsNameClass';
import { StarWarsNameFunction } from '../shared/StateExamples/StarWarsNameFunction/StarWarsNameFunction';


// window.addEventListener('load', () => {
// 	ReactDom.hydrate(<Header />, document.getElementById('react_root'))
// });

window.addEventListener('load', () => {
	ReactDom.hydrate(<StarWarsNameFunction />, document.getElementById('react_root'))
});

