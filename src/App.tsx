import React, { useState } from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root'
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/userContext';
import { commentContext } from './shared/context/commentContext';

function AppComponent() {
	const [ commentValue, setCommentValue ] = useState('');
	const [token] = useToken();

	const CommentContextProvider = commentContext.Provider;

	return (
		<CommentContextProvider value={{
			value: commentValue,
			onChange: setCommentValue
		}}>
			<tokenContext.Provider value={token}>
				<UserContextProvider>
					<Layout>
						<Header />
						<Content>
							<CardsList />
						</Content>
					</Layout>
				</UserContextProvider>
			</tokenContext.Provider>
		</CommentContextProvider>

	)
}

export const App = hot( () => <AppComponent/>);

