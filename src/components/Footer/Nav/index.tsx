import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';

const Nav = (): ReactElement => {
  return (
    <nav className={styles.navList}>
      <ul>
        <li>
          <Link to='/sobre'>CLUBE</Link>
        </li>
        <li>
          <Link to='/plantel'>PLANTEL</Link>
        </li>
        <li>
          <Link to='/trofeus'>TROFÉUS</Link>
        </li>
        <li>
          <Link to=''>INTER STORE</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;