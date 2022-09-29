import React, { ReactElement } from 'react';
import history from 'data/history.json';
import Memory from 'components/Memory';
import styles from './Club.module.scss';

const Club = ():ReactElement => {

  const historyList = [...history];

  return (
    <section className={styles.historyContainer}>
      <div>
        <h1>História do Clube</h1>
      </div>
      { historyList.map(item => (
        <Memory 
          id={item.id}
          description={item.description}
          imgPath={item.imgPath}
          title={item.title}
          year={item.year}
          key={item.id}
        />
      )) }
    </section>
  );
};

export default Club;