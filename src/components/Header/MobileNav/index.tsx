import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileNav.module.scss';

interface Props {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = ({ openMenu, setOpenMenu }: Props): ReactElement => {

  return (
    <div className={`${styles.container} ${ openMenu ? '' : styles.hidden }`}>
      <nav className={styles.menu}>
        <ul className={styles.menu__list}>
          <li className={styles.anchor} ><Link to='/sobre' onClick={() => setOpenMenu(!openMenu)}>CLUBE</Link></li>
          <li className={styles.anchor} ><Link to='/plantel' onClick={() => setOpenMenu(!openMenu)}>PLANTEL</Link></li>
          <li className={styles.anchor} ><Link to='/trofeus' onClick={() => setOpenMenu(!openMenu)}>TROFÉUS</Link></li>
          <li className={styles.anchor} ><Link to='/' onClick={() => setOpenMenu(!openMenu)}>INTER STORE</Link></li>
        </ul>
      </nav>
      <button type='button'>
        ASSOCIE-SE
      </button>
    </div>
  );
};

export default MobileNav;