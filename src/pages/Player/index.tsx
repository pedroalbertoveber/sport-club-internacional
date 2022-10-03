import React, { ReactElement, useEffect, useState } from 'react';
import playerList from 'data/players.json';
import styles from './Player.module.scss';
import {  useParams } from 'react-router-dom';
import { IPlayer } from 'interfaces';
import NotFound from 'pages/NotFound';

const Player = (): ReactElement => {

  const [ player, setPlayer ] = useState<undefined | IPlayer>();
  const { n } = useParams();

  useEffect(() => {
    setPlayer(playerList.find(item => item.number === Number(n)));
  }, []);

  if (!player) {
    return <NotFound />;
  }

  return (
    <>
      <h1>{ player?.nickname }</h1>
    </>
  );
};

export default Player;