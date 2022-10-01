import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileNav.module.scss';

interface Props {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = ({ openMenu, setOpenMenu }: Props): ReactElement => {

  const closeMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={`${styles.container} ${ openMenu ? '' : styles.hidden }`}>
      <nav className={styles.menu}>
        <ul className={styles.menu__list}>
          <li className={styles.anchor} ><Link to='/sobre' onClick={() => closeMenu()}>CLUBE</Link></li>
          <li className={styles.anchor} ><Link to='/plantel' onClick={() => closeMenu()}>PLANTEL</Link></li>
          <li className={styles.anchor} ><Link to='/trofeus' onClick={() => closeMenu()}>TROFÉUS</Link></li>
          <li className={styles.anchor} ><Link to='/' onClick={() => closeMenu()}>INTER STORE</Link></li>
        </ul>
      </nav>
      <button type='button'>
        ASSOCIE-SE
      </button>
    </div>
  );
};

export default MobileNav;