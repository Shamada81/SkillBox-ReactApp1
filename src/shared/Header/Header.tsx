import React, { useContext } from 'react';
import { tokenContext } from '../context/tokenContext';
import styles from './header.css';

import { SearchBlock } from './SearchBlock'
import { SortBlock } from './SortBlock';
import { ThreadTitle } from './ThreadTitle';


export function Header() {
  // Через consumer
  const { Consumer } = tokenContext;
  // через хук useContext
  // const token = useContext(tokenContext)

  return (
    <header className={styles.header}>
      {/* <Consumer>
        {(token) => <SearchBlock token={token} />}
      </Consumer> */}
      {/* <SearchBlock token={token} /> */}
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}
