import React, { useEffect, useState } from 'react';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({ button, children, isOpen, onOpen = NOOP, onClose = NOOP }: IDropdownProps) {
  const [ isDropdownOpen, setIsDropdownOpen ] = useState(isOpen);
  
  const handleOpen =() => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  useEffect(() => {
    setIsDropdownOpen(isOpen)
  }, [isOpen]);

  useEffect(() => isDropdownOpen ? onOpen(): onClose(), [isDropdownOpen]);
  
  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
          {button}
      </div>
      {
        isDropdownOpen && (
          <div className={styles.listContainer}>
            <div className={styles.list} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              {children}
            </div>
          </div>
        )
      }
    </div>
  );
}
