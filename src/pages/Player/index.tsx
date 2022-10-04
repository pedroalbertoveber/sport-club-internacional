import React, { ReactElement } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import playerList from 'data/players.json';
import NotFound from 'pages/NotFound';
import Info from './Info';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'
import styles from './Player.module.scss';

const Player = (): ReactElement => {

  const players = [...playerList];
  const { n } = useParams();
  const navigate = useNavigate();

  const player = players.find(item => item.number === Number(n));

  if (!player) {
    return <NotFound />
  }

  const next = players.find(item => item.id === player?.id + 1);
  const previous = players.find(item => item.id === player?.id - 1);

  const { age, birthday, goals, name, nickname, nationality, number, position, imagePath } = player;
  console.log(imagePath);

  return (
    <>
      <section className={styles.container}>
        <figure className={styles.container__image}>
          <img src={imagePath} alt={`Foto do jogador ${nickname}`} />
          <div>
            {number}
          </div>
        </figure>
        <div className={styles.info}>
          <div className={styles.info__header}>
            <span>{position}</span>
            <h2>{nickname}</h2>
            <span>{name}</span>
          </div>
          <div className={styles.info__description}>
            <Info attribute={"DATA DE NASCIMENTO"} value={birthday}/>
            <Info attribute={"NACIONALIDADE"} value={nationality}/>
            <Info attribute={"IDADE"} value={String(age)}/>
            {goals > 0 && <Info attribute={'GOLS MARCADOS'} value={String(goals)} />}
          </div>
        </div>
      </section>
      <div className={styles.buttonContainer}>
        { player.id !== 1 && <button type='button' onClick={() => navigate(`/${previous?.number}`)}><BsArrowLeftShort /> {previous?.nickname}</button>}
        { player.id !== players.length &&  <button type='button'  onClick={() => navigate(`/${next?.number}`)}><BsArrowRightShort />{next?.nickname}</button>}
      </div>
    </>
  );
};

export default Player;