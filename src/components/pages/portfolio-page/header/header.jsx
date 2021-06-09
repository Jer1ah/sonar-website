import React from 'react';
import styles from './header.module.scss';

const header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__image}></div> {/*-- .header__image end --*/}
            <div className={styles.header__info}>
                <div className={styles.line}></div> {/*-- .line end --*/}
                <h1>Take a look at my Portfolio</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui.</p>
                <a href="placeholder">Contact Me</a>
            </div> {/*-- .header__info end --*/}
        </div>
    );
};

export default header;