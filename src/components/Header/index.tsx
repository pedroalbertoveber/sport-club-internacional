import React, { ReactElement, useState } from 'react';
import styles from './Header.module.scss';
import { BsPerson } from 'react-icons/bs';
import { CgMenu, CgClose } from 'react-icons/cg';
import MobileNav from './MobileNav';
import { Link, useNavigate } from 'react-router-dom';

const Header = (): ReactElement => {

  const [ openMenu, setOpenMenu ] = useState<boolean>(false);
  const navigate = useNavigate();

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
          <button type='button' onClick={() => navigate('/login')}>
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
            <li className={styles.sejaSocio}><a  href='https://internacional.com.br/associe-se' target='_blank' rel="noreferrer">ASSOCIE-SE</a></li>
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