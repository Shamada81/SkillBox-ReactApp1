import React, { useState } from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root'
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { generateId, generateRandomString} from './utils/react/generateRandomIndex';
import { merge } from './utils/js/merge';
import { Dropdown } from './shared/Dropdown';
import { Text, EColors } from './shared/Text';

const LIST = [
	{As: 'a' as const, text: 'some' },
	{As: 'a' as const, text: 'other some' },
	{As: 'a' as const, text: 'some' }
].map(generateId);


function AppComponent() {
	const [list, setList] = useState(LIST);

	const handleItemClick = (id: string) => {
		setList(list.filter((item) => item.id != id))
	}

	const handleAdd = () => {
		setList(list.concat(generateId({ text: generateRandomString(), As: 'a' as const })))
	}

	return (
		<Layout>
			<Header />
			<Content>
				<CardsList />
			</Content>
		</Layout>
	)
}

export const App = hot( () => <AppComponent/>);

