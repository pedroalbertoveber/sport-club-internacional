import React, { ReactElement } from 'react';
import players from 'data/players.json';
import positions from 'data/positions.json';
import PlayerCard from 'components/PlayerCard';
import styles from './Team.module.scss';

const Team = (): ReactElement => {

  const playerList = [...players];
  const positionList = [...positions];

  return (
    <section className={styles.container}>
      <div className={styles.pageTitle}>
        <h1>Futebol Masculino</h1>
      </div>
      <div className={styles.playerContainer}>
        { playerList.map(player => (
          <PlayerCard {...player} key={player.id}/>
        )) }
      </div>
    </section>
  );
};

export default Team;