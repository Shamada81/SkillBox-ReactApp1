import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root'
import { uniqueNamesGenerator, starWars } from 'unique-names-generator';

interface IStarWarsNameFunction {
	name: string;
	count: number;
}

export function StarWarsNameFunction() {
	const randomName = (): string => {
		return uniqueNamesGenerator({dictionaries: [starWars], length: 1})
	}
	
	// //Первый способ (мой)
	// const [name, setName] = React.useState(randomName);
	// const [count, setCount] = React.useState(0);

	// const handleClick = () => {
	// 	setName(randomName)
	// }

	// useEffect(() => {
	// 	setCount(prevCount => prevCount + 1);
	// 	console.log(count)
	// }, [name])


	// второй способ (от сенсея)
	const [state, setState] = React.useState<IStarWarsNameFunction>({ name: randomName(), count: 0})

	const handleClick = () => {
		setState((prevState) => ({ ...prevState, name: randomName()}))
		setState((prevState) => ({ ...prevState, count: prevState.count + 1 }))
	}
	console.log(state.count);

	return (
		<section className='container'>
			<span className='name'>{state.name}</span>
			<div className='gap' />
			<button className='button' onClick={handleClick}>Мне нужно</button>
		</section>
	)

}


