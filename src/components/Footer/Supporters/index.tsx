import React, { ReactElement } from 'react';
import supporters from 'data/supporters.json';
import styles from './Supporters.module.scss';

const Supporters = (): ReactElement => {

  const supporterList = supporters;

  return (
    <article className={styles.supportersContainer}>
      <div className={styles.title}>
        <h4>PARCEIROS</h4>
      </div>
      <figure className={styles.supportersImg}>
        { supporterList.map(supporter => (
          <img src={supporter.imagePath} alt={supporter.name} key={supporter.id}/>
        ))}
      </figure>
    </article>
  );
};

export default Supporters;