import React from 'react';
import styles from './userlink.css';

export function UserLink() {
  return (
    <div className={styles.userLink}>
      <img 
        className={styles.avatar}
        src="https://cdn.dribbble.com/users/1299339/avatars/normal/09072605c76d8ca55e47b19ee6e7a3de.jpg?1642872279"
        alt="avatar"
      />
      <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
    </div>
  );
}
