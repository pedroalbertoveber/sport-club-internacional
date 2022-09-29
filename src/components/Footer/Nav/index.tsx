import React, { ReactElement } from 'react';
import styles from './Nav.module.scss';

const Nav = (): ReactElement => {
  return (
    <nav className={styles.navList}>
      <ul>
        <li>
          <a href="#">CLUBE</a>
        </li>
        <li>
          <a href="#">PLANTEL</a>
        </li>
        <li>
          <a href="#">TROFÉUS</a>
        </li>
        <li>
          <a href="#">INTER STORE</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;