import React from 'react';
import { BlockIcon, WarningIcon } from '../../../../icons';
import { EColors, Text } from '../../../../Text';
import styles from './menuitemslist.css';

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem}  onClick={() => console.log(postId)}>
        <BlockIcon />
        <Text size={12} color={EColors.grey99}>Скрыть</Text>
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <WarningIcon />
        <Text size={12} color={EColors.grey99}>Пожаловаться</Text>
      </li>
    </ul>
  );
}
