import React, { ReactElement } from 'react';
import { IPlayer } from 'interfaces';
import { ImForward } from 'react-icons/im';
import { Link } from 'react-router-dom';
import styles from './PlayerCard.module.scss';

const PlayerCard = (props: IPlayer): ReactElement => {

  const { nickname, imagePath, number, position } = props;

  return (
    <div className={ styles.cardContainer } >
      <img src={imagePath} alt={`Foto do jogador ${nickname}`} />
      <div className={styles.playerInfo}>
        <strong>{ nickname }</strong>
        <span>{ position }</span>
      </div>
      <div className={styles.playerNumber}>
        { number }
      </div>
      <div className={styles.playerLink}>
        <Link to='/'>
          { <ImForward /> }
        </Link>
      </div>
    </div>
  );
};

export default PlayerCard;