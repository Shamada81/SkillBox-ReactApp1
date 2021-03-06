import React from 'react';
import styles from './textcontent.css';
import { Title } from './Title';
import { UserLink } from './UserLink';

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink />
        <span className={styles.createAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          4 часа назад
        </span>
      </div>
      <Title />
    </div>
  );
}
