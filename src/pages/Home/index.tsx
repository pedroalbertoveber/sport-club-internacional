import React, { ReactElement } from 'react';
import newsList from 'data/news.json';
import playerList from 'data/players.json';
import styles from './Home.module.scss';
import News from './News';
import PlayerCard from 'components/PlayerCard';

const Home = (): ReactElement => {

  const news = [ ...newsList ];
  let players = [ ...playerList ];

  players = players.sort(() => 0.5 - Math.random()).splice(0, 3);

  return (
    <section className={styles.homeContainer}>
      <div className={styles.title}>
        <h2>ÚLTIMAS DO INTER</h2>
      </div>
      { news.map(item => (
        <News key={item.id} {...item} />
      ))}
      <div className={styles.players}>
        <div className={styles.title}>
          <h2>Conheça alguns de nossos atletas</h2>
        </div>
        <div>
          { players.map(player => (
            <PlayerCard key={player.id} {...player}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;