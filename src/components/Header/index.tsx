import React, { ReactElement, useState } from 'react';
import styles from './Header.module.scss';
import { BsPerson } from 'react-icons/bs';
import { CgMenu, CgClose } from 'react-icons/cg';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';

const Header = (): ReactElement => {

  const [ openMenu, setOpenMenu ] = useState<boolean>(false);

  return (
    <>
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src='assets/img/logo-inter.png' alt='Logo do SC Internacional' className={styles.logo__img} />
        <div className={styles.logo__title}>
          <h1>SPORT CLUB <br /> INTERNACIONAL</h1>
          <span>O CLUBE <strong>DO POVO</strong></span>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.menu__areaSocio}>
          <button type='button'>
            <BsPerson />
            <span>Área do sócio</span>
          </button>
          <button className={styles.menu__toggle} onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <CgClose /> : <CgMenu />}
          </button>
        </div>
        <nav className={styles.menu__nav}>
          <ul className={styles.menu__nav_list}>
            <li><Link to='/sobre'>CLUBE</Link></li>
            <li><Link to='/plantel'>PLANTEL</Link></li>
            <li><Link to='/trofeus'>TROFÉUS</Link></li>
            <li><Link to='/'>INTER STORE</Link></li>
            <li className={styles.sejaSocio}>ASSOCIE-SE</li>
          </ul>
        </nav>
      </div>
    </header>
    <div className={styles.navContainer}>
      <MobileNav openMenu={ openMenu } setOpenMenu={setOpenMenu}/>
    </div>
    </>
  );
};

export default Header;