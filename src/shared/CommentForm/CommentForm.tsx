import React, { ChangeEvent, FormEvent, SyntheticEvent, useContext, useRef, useState } from 'react';
import { commentContext } from '../context/commentContext';
import styles from './commentform.css';

// // Неконтролируемый компонент
// export function CommentForm() {
//   const ref = useRef<HTMLTextAreaElement>(null)

//   function handleSubmit(event: FormEvent) {
//     event.preventDefault();
//     console.log(ref.current?.value);
//   }


//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <textarea className={styles.input} ref={ref} />
//       <button type='submit' className={styles.button}>Комментировать</button>
//     </form>
//   );
// }


// Контролируемый
export function CommentForm() {
  const { value, onChange } = useContext(commentContext)

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.currentTarget.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value)
  }

  return (
    <form className={styles.form}  onSubmit={handleSubmit} >
      <textarea className={styles.input} onChange={handleChange} value={value} />
      <button type='submit' className={styles.button}>Комментировать</button>
    </form>
  );
}
