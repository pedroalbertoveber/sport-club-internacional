import React, { ReactElement } from 'react';
import styles from './MobileNav.module.scss';

interface Props {
  openMenu: boolean;
}

const MobileNav = ({ openMenu }: Props): ReactElement => {
  return (
    <div className={`${styles.container} ${ openMenu ? '' : styles.hidden }`}>
      <nav className={styles.menu}>
        <ul className={styles.menu__list}>
          <li>CLUBE</li>
          <li>PLANTEL</li>
          <li>TROFÉUS</li>
          <li>INTER STORE</li>
        </ul>
      </nav>
      <button type='button'>
        ASSOCIE-SE
      </button>
    </div>
  );
};

export default MobileNav;