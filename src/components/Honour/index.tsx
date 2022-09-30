import React, { ReactElement } from 'react';
import { IHonour } from 'interfaces';
import { GiRibbonMedal } from 'react-icons/gi';
import styles from './Honour.module.scss';

const Honour = (props: IHonour): ReactElement => {

  const { league, year, imgPath } = props;

  return (
    <div className={styles.honourContainer}>
      <figure>
        <img src={imgPath} alt={`Taça do(a) ${league}`} />
      </figure>
      <figcaption>
        <h4>
          {league}
        </h4>
        {year.length > 5 ?
        <span className={styles.manyHonours}>Campeão de <strong>{year.length}</strong> edições do campeonato</span> :
        <div className={styles.honourYears}>
          <span>Campeão {year.length === 1 ? "do ano" : "dos anos"}:</span>
          <ul>
            {year.map(item => (
              <li key={item}>
                <i><GiRibbonMedal /></i>
                {item}
              </li>
            ))}
          </ul>
        </div>
        }
      </figcaption>
    </div>
  );
};

export default Honour;