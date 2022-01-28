import React from 'react';
import { hot } from 'react-hot-loader/root'
import { uniqueNamesGenerator, starWars } from 'unique-names-generator';

import styles from './StarWarsNameClass.module.css'

interface IStarWarsNameClass {
	name: string;
	count: number;
}


export class StarWarsNameClass extends React.PureComponent<{}, IStarWarsNameClass> {
	// инициализация state через перегрузку
	state: Readonly<IStarWarsNameClass> = { name: this.randomName(), count: 0 }


	// constructor(props: {}) {
	// 	super(props);

	// 	this.state = {
	// 		name: '123'
	// 	}
	// }


	public render() {

		return (
			<section className='container'>
				<span className='name'>{this.state.name}</span>
				<div className='gap' />
				<button className='button' onClick={this.handleClick}>Мне нужно</button>
			</section>
		)
	}

	private randomName(): string {
		return uniqueNamesGenerator({dictionaries: [starWars], length: 1})
	}

	private handleClick = () => {
		this.setState({ name: this.randomName()	});
		this.setState( (state, props) => ({count: state.count + 1}), 
			() => console.log('>>  ', this.state.count));
	}
}

// export const SWNameClass = hot(StarWarsNameClass);