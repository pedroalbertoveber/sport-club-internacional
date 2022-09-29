import React, { ReactElement } from 'react';
import styles from './Partners.module.scss';
import partners from 'data/partners.json';
import { IPartner } from 'interfaces';

const Partners = (): ReactElement => {

  const partnerList = partners;

  return (
    <article className={styles.partnersContainer}>
      <div className={styles.title}>
        <h4>PATROCINADORES</h4>
      </div>
      <figure className={styles.partnersImg}>
        {partnerList.map((partner: IPartner) => (
          <img src={partner.imagePath} alt={partner.name} key={partner.id}/>
        ))}
      </figure>
    </article>
  );
};

export default Partners;