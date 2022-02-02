import React from 'react';
import { Actions } from './Actions';
import { Comments } from './Comments';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter';

export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />
      <Comments />
      <Actions />        
    </div>
  );
}
