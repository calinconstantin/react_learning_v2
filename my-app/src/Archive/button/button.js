import React from 'react';
import styles from './my-style.module.css';

export function Button() {
    const shoot = (text, event) => {
        console.warn(text);
        console.warn(event);
    }

    return (
        <button onClick={(event) => shoot('Button Got Clicked', event)} className={styles.btn}>Hello, I am a button</button>
    )
}