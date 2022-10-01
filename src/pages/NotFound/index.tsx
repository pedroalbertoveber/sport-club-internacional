import React, { ReactElement } from 'react';
import { ReactComponent as ReactSvg } from 'assets/svg/notFound.svg';
import { useNavigate } from 'react-router-dom';
import { HiHome } from 'react-icons/hi'
import styles from './NotFound.module.scss';

const NotFound = ():ReactElement => {

  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <div className={styles.container__button}>
        <button type='button' onClick={() => navigate('/')}>
          <HiHome /> Ir para Página Principal
        </button>
      </div>
      <div className={styles.container__svg}>
        <ReactSvg />
      </div>
    </section>
  );
};

export default NotFound;