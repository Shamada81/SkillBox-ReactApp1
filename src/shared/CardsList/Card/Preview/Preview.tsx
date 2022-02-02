import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img 
        className={styles.previewImg}
        src="https://cdn.dribbble.com/users/59947/screenshots/17378893/media/68b06dceb7d8788e2bd2b1e95b3297b7.jpg"
      />
    </div>
  );
}
