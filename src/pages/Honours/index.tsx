import React, { ReactElement } from 'react';
import honours from 'data/honours.json';
import Honour from 'components/Honour';
import styles from './Honours.module.scss';

const Honours = (): ReactElement => {

  const honourList = [ ...honours ];

  return (
    <section className={styles.container}>
      <div className={styles.container__title}>
        <h1>Títulos</h1>
        <span>*somente títulos de maior relevância</span>
      </div>
      {honourList.map(item => (
        <Honour {...item} key={item.id}/>
      ))}
    </section>
  );
};

export default Honours;