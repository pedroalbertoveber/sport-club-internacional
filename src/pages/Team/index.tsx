import React, { ReactElement, useState, useEffect } from 'react';
import playersList from 'data/players.json';
import PlayerCard from 'components/PlayerCard';
import { BsSearch } from 'react-icons/bs'
import styles from './Team.module.scss';
import { IPlayer } from 'interfaces';

const Team = (): ReactElement => {
  
  const [ search, setSearch ] = useState<string>(''); 
  const [ players, setPlayers ] = useState<IPlayer[]>(playersList);

  const team = [ ...playersList ];

  const searchTest = (title: string): boolean => {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }; 

  useEffect(() => {
    const newList = team.filter(item => searchTest(item.nickname));
    setPlayers(newList);
  }, [ search, players ]);

  return (
    <section className={styles.container}>
      <div className={styles.pageTitle}>
        <h1>Futebol Masculino</h1>
      </div>
      <div className={styles.filtro}>
        <div>
          <label><BsSearch /></label>
          <input type='text' value={search} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
        </div>
      </div>
      { players.length === 0 && <h2 className={styles.ops}>Ops... nenhum jogador com este nome encontrado</h2>}
      <div className={styles.playerContainer}>
        { players.map(player => (
          <PlayerCard {...player} key={player.id}/>
        )) }
      </div>
    </section>
  );
};

export default Team;