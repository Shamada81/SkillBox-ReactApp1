import React from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import { useUserData } from '../../../hooks/useUserData';

// interface ISearchBlockProps {
//   token: string;
// }


// export function SearchBlock({ token }: ISearchBlockProps) {
  // const [ data ] = useUserData(token);
export function SearchBlock() {
  const [ data ] = useUserData();
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} />
    </div>
  );
}
